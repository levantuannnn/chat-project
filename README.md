# NovaChat — hướng dẫn cài đặt và cấu trúc dự án

Tài liệu này mô tả cấu trúc hiện tại của NovaChat, cách chạy frontend/backend,
các luồng chức năng chính và trách nhiệm của những file mã nguồn/config quan
trọng. Nội dung dựa trên code hiện có; các điểm tích hợp chưa đồng nhất được
ghi chú riêng ở phần [Trạng thái tích hợp hiện tại](#trạng-thái-tích-hợp-hiện-tại).

## 1. Tổng quan

NovaChat là ứng dụng chat web gồm:

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS và React Router.
- **Backend:** Node.js 20+, Express 5, TypeScript và Socket.IO.
- **Cơ sở dữ liệu:** MySQL 8, truy cập qua Prisma ORM 7 và MariaDB adapter.
- **Email:** Nodemailer, dùng để gửi mã OTP.
- **Đóng gói:** Docker Compose chạy MySQL, backend và frontend/Nginx.

Luồng tổng quát:

```text
Browser
  ├─ React UI ── HTTP /auth, /chat ──> Express routes/controllers
  │                                      └─ models ──> Prisma ──> MySQL
  └─ Socket.IO ───────────────────────> Socket.IO handlers ────> MySQL
                                         └─ broadcast tới các client trong room
```

## 2. Yêu cầu môi trường

- Node.js **20 trở lên** và npm.
- MySQL 8, hoặc Docker Desktop với lệnh `docker compose`.
- Tài khoản SMTP nếu muốn thử gửi OTP qua email.
- Git để lấy source code.

Kiểm tra phiên bản:

```powershell
node --version
npm --version
docker --version
docker compose version
```

## 3. Cấu hình môi trường

Backend đọc cấu hình từ biến môi trường. File `.env` local trong `chat-be` được
Git ignore; **không đưa mật khẩu, JWT secret hay SMTP app password thật lên Git
hoặc vào tài liệu chia sẻ**.

Tạo `chat-be/.env` trong editor và điền các giá trị phù hợp với MySQL/SMTP của
bạn:

```dotenv
PORT=8081
NODE_ENV=development

DB_HOST=localhost
DB_PORT=3306
DB_USER=<mysql-user>
DB_PASSWORD=<mysql-password>
DB_NAME=<mysql-database>

SECRET_KEY=<long-random-secret>
KEY=HS256

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=<email-account>
SMTP_PASSWORD=<email-app-password>
```

Ghi chú:

- Khi chạy backend trực tiếp trên Windows, `DB_HOST` thường là `localhost`.
- Khi chạy backend **trong Docker Compose**, host của MySQL là tên service
  `mysql`, không phải `localhost`.
- SMTP chỉ cần cấu hình nếu muốn gửi OTP. Với Gmail, dùng App Password theo
  cấu hình tài khoản của bạn, không dùng mật khẩu đăng nhập thông thường.
- `SECRET_KEY` phải là chuỗi bí mật ngẫu nhiên, riêng cho môi trường của bạn.
- `prisma.config.ts` và `src/db/db.user.ts` đọc các biến `DB_*`; backend yêu
  cầu các giá trị này khi khởi tạo kết nối.
- `docker-compose.yml` hiện khai báo một số biến cấu hình trực tiếp trong file.
  Đây là cấu hình local hiện tại, **không nên dùng nguyên trạng cho production**.
  Nên chuyển giá trị sang environment/secrets trước khi triển khai thật.

## 4. Chạy local trên Windows

### 4.1. Khởi động MySQL

Từ thư mục gốc repository:

```powershell
docker compose up -d mysql
```

Lệnh này chạy riêng service MySQL trong Compose. Đảm bảo thông tin trong
`chat-be/.env` khớp với database mà service MySQL tạo. Nếu bạn dùng MySQL cài
riêng, có thể bỏ qua Docker và cấu hình `DB_*` theo MySQL đó.

### 4.2. Cài đặt và khởi động backend

Mở terminal thứ nhất:

```powershell
Set-Location chat-be
npm ci
npx prisma generate
```

Nếu đây là database phát triển mới và chưa có bảng, đồng bộ schema Prisma:

```powershell
npx prisma db push
```

Sau đó chạy backend:

```powershell
npm run dev
```

Backend mặc định lắng nghe tại `http://localhost:8081`. Kiểm tra tiến trình:

```powershell
Invoke-RestMethod http://localhost:8081/health
```

Phản hồi dự kiến:

```json
{ "status": "ok" }
```

Không chạy `npx prisma db push` tùy tiện trên database có dữ liệu quan trọng;
trước tiên cần sao lưu và hiểu các thay đổi schema.

### 4.3. Cài đặt và khởi động frontend

Mở terminal thứ hai, từ thư mục gốc:

```powershell
Set-Location chat-fe
npm ci
npm run dev
```

Mở địa chỉ Vite hiển thị trong terminal, thường là
`http://localhost:5173`. [vite.config.ts](./chat-fe/vite.config.ts) proxy các
đường dẫn `/auth`, `/chat` và `/socket.io` tới backend ở cổng 8081.

### 4.4. Kiểm tra kiểu và build

Frontend:

```powershell
Set-Location chat-fe
npm run typecheck
npm run build
```

Backend:

```powershell
Set-Location chat-be
npm run typecheck
npm run build
```

Các script được khai báo trong [chat-fe/package.json](./chat-fe/package.json)
và [chat-be/package.json](./chat-be/package.json). Package ở thư mục gốc hiện
không điều phối các lệnh chạy của hai ứng dụng; chạy lệnh trong từng thư mục.

## 5. Chạy bằng Docker Compose

Từ thư mục gốc:

```powershell
docker compose up --build
```

Compose khai báo ba service:

| Service | Mục đích | Cổng trên máy host |
|---|---|---:|
| `mysql` | Database MySQL và volume lưu dữ liệu | `3306` |
| `backend` | Express, API và Socket.IO | `8081` |
| `frontend` | Build React và phục vụ qua Nginx | `80` |

Sau khi build, frontend được phục vụ tại `http://localhost`. Nginx chuyển tiếp
`/auth`, `/chat` và `/socket.io` tới service backend.

Các lệnh vận hành thường dùng:

```powershell
docker compose ps
docker compose logs -f backend
docker compose logs -f frontend
docker compose down
```

`docker compose down` không xóa volume MySQL. Tránh thêm `-v` nếu còn cần dữ liệu.
Compose hiện chứa giá trị cấu hình inline và SMTP password mẫu; trước khi dùng
cho môi trường chia sẻ/production, hãy chuyển secrets sang cấu hình an toàn và
thay bằng credentials riêng.

## 6. Các luồng chức năng

### 6.1. Đăng ký, đăng nhập và xác thực OTP

1. Người dùng nhập thông tin tại `component/auth/AuthForm.tsx`.
2. `component/main.tsx` kiểm tra dữ liệu, gửi request và cập nhật trạng thái qua
   hai reducer: một reducer cho form xác thực, một reducer cho OTP.
3. Backend route xác thực chuyển request đến controller tương ứng.
4. `controllers.user.ts` hash password bằng bcrypt, tạo/kiểm tra user và quản lý
   JWT cookie.
5. `mail.controllers.ts` tạo OTP, lưu OTP có thời hạn rồi gửi email qua
   Nodemailer. Khi OTP hợp lệ, `model.otp.ts` xóa OTP đã dùng và cập nhật trạng
   thái xác thực user.

Các component giao diện liên quan:
[AuthCard.tsx](./chat-fe/src/component/auth/AuthCard.tsx),
[AuthForm.tsx](./chat-fe/src/component/auth/AuthForm.tsx) và
[OtpModal.tsx](./chat-fe/src/component/auth/OtpModal.tsx).

### 6.2. Chat và lịch sử tin nhắn

1. [home.tsx](./chat-fe/src/pages/home.tsx) ghép sidebar, khu vực tin nhắn,
   navbar, ô nhập và modal tạo chat.
2. [useChat.ts](./chat-fe/src/hooks/useChat.ts) quản lý state phía giao diện,
   gọi API lịch sử và thiết lập các thao tác chat.
3. [chatReducer.ts](./chat-fe/src/hooks/chatReducer.ts) định nghĩa các action
   và cập nhật state: chọn phòng, nhận tin nhắn, cập nhật reaction, tạo phòng và
   lưu tin nhắn fallback khi mất Socket.IO.
4. Backend routes/controller gọi model chat; các thao tác dữ liệu đi qua Prisma
   tới MySQL.

Các thành phần giao diện:

- [ChatSidebar.tsx](./chat-fe/src/component/chat/ChatSidebar.tsx): tìm kiếm,
  chọn phòng và mở modal tạo chat.
- [ChatMessageList.tsx](./chat-fe/src/component/chat/ChatMessageList.tsx):
  hiển thị tin nhắn, trạng thái đang nhập và reaction.
- [ChatInput.tsx](./chat-fe/src/component/chat/ChatInput.tsx): nhập/gửi tin
  nhắn và chọn emoji.
- [ChatNavbar.tsx](./chat-fe/src/component/chat/ChatNavbar.tsx): trạng thái kết
  nối, tài khoản và đăng xuất.
- [CreateChatModal.tsx](./chat-fe/src/component/chat/CreateChatModal.tsx):
  form tạo cuộc trò chuyện.

### 6.3. Chat thời gian thực

Frontend kết nối Socket.IO và gửi các sự kiện:

| Sự kiện từ client | Mục đích |
|---|---|
| `join_room` / `leave_room` | Tham gia/rời room theo conversation ID |
| `send_message` | Gửi nội dung tin nhắn để backend lưu |
| `typing` / `stop_typing` | Báo người dùng đang/đã dừng nhập |
| `send_reaction` | Thêm, đổi hoặc gỡ reaction |

Backend phát lại:

| Sự kiện từ server | Mục đích |
|---|---|
| `receive_message` | Thông báo tin nhắn đã được lưu cho các client trong room |
| `user_typing` / `user_stop_typing` | Cập nhật typing indicator |
| `reaction_updated` | Đồng bộ danh sách reaction mới |

Đăng ký handler nằm ở
[socket.controller.ts](./chat-be/src/controllers/socket.controller.ts); thao
tác lưu tin nhắn/reaction nằm trong
[model.chat.ts](./chat-be/src/model/model.chat.ts).

## 7. API backend hiện được khai báo

Các route xác thực trong
[routes/auth.ts](./chat-be/src/routes/auth.ts):

| Method | Path | Mục đích |
|---|---|---|
| `POST` | `/auth/registers` | Đăng ký |
| `POST` | `/auth/logins` | Đăng nhập |
| `POST` | `/auth/logouts` | Đăng xuất/xóa cookie |
| `POST` | `/auth/send-otps` | Gửi OTP |
| `POST` | `/auth/verify-otps` | Xác thực OTP |
| `GET` | `/auth/mes` | Đọc thông tin user qua middleware |
| `GET` | `/auth/checks` | Kiểm tra access token |
| `POST` | `/auth/tokens` | Kiểm tra refresh token và cấp token |

Các route chat trong [routes/chat.ts](./chat-be/src/routes/chat.ts):

| Method | Path | Mục đích |
|---|---|---|
| `GET` | `/chat/conversations` | Lấy các conversation của user |
| `POST` | `/chat/conversations` | Tạo conversation |
| `GET` | `/chat/conversations/:id/messages` | Lấy tin nhắn của conversation |

Các route chat được gắn middleware `myInfo` để kiểm tra access token. Socket.IO
được khởi tạo trong [src/index.ts](./chat-be/src/index.ts).

## 8. Trạng thái tích hợp hiện tại

Trước khi kiểm thử end-to-end, cần lưu ý một số khác biệt giữa URL của frontend
và URL backend đang đăng ký:

| Chức năng | Frontend đang gọi | Backend đang đăng ký |
|---|---|---|
| Đăng ký | `/auth/register` | `/auth/registers` |
| Đăng nhập | `/auth/login` | `/auth/logins` |
| Đăng xuất | `/auth/logout` | `/auth/logouts` |
| Gửi OTP | `/auth/send-otp` | `/auth/send-otps` |
| Xác thực OTP | `/auth/verify-otp` | `/auth/verify-otps` |
| Kiểm tra đăng nhập | `/auth/check` | `/auth/checks` |
| Đọc profile | `/auth/me` | `/auth/mes` |
| Refresh token | `/auth/token` | `/auth/tokens` |
| Lịch sử chat | `/chat/message/:id` | `/chat/conversations/:id/messages` |

Frontend hiện lấy danh sách chat ban đầu từ mock trong
[mockChat.ts](./chat-fe/src/data/mockChat.ts); thao tác tạo chat hiện cập nhật
state phía client. Backend đã có route tạo conversation, nhưng cần nối frontend
vào route đó nếu muốn tạo/lưu conversation trong database.

Trong [routes/chat.ts](./chat-be/src/routes/chat.ts), cùng một `GET
/conversations/:id/messages` đang được đăng ký hai lần. Express sẽ xử lý route
đầu tiên phù hợp trước; nên thống nhất một handler khi hoàn thiện API.

Ngoài ra, thư mục frontend trên disk là `component` chữ thường, trong khi các
import ở `pages/home.tsx` dùng `../Component/...` chữ hoa. Windows thường không
phân biệt hoa/thường, nhưng Docker/Linux có thể phân biệt; cần thống nhất casing
trước khi build trên Linux.

Các điểm trên là mô tả trạng thái code hiện tại, không phải khẳng định mọi luồng
đã chạy xuyên suốt từ UI đến database.

## 9. Cấu trúc file và trách nhiệm

### 9.1. Cấp repository

| File/thư mục | Trách nhiệm |
|---|---|
| [docker-compose.yml](./docker-compose.yml) | Khai báo MySQL, backend và frontend/Nginx |
| [package.json](./package.json) | Metadata/dependencies ở cấp repository; không có script chạy toàn hệ thống |
| [package-lock.json](./package-lock.json) | Khóa dependencies ở cấp repository |
| [chat-fe/](./chat-fe) | Ứng dụng giao diện React |
| [chat-be/](./chat-be) | API, Socket.IO, Prisma và schema database |

### 9.2. Frontend — `chat-fe`

#### Điểm khởi chạy và điều hướng

| File | Trách nhiệm |
|---|---|
| [index.html](./chat-fe/index.html) | HTML shell và mount point `#root` |
| [src/main.jsx](./chat-fe/src/main.jsx) | Tạo React root, bật `StrictMode`/`BrowserRouter`, nạp CSS |
| [src/App.tsx](./chat-fe/src/App.tsx) | App root; render router |
| [src/routes/routes.tsx](./chat-fe/src/routes/routes.tsx) | Khai báo `/`, `/main`, `/home`; kiểm tra token trước trang home |
| [src/pages/home.tsx](./chat-fe/src/pages/home.tsx) | Lắp ghép giao diện chat từ hook và các component |
| [src/component/main.tsx](./chat-fe/src/component/main.tsx) | Điều phối đăng ký, đăng nhập, OTP và chuyển hướng |

#### Component xác thực

| File | Trách nhiệm |
|---|---|
| [src/component/auth/AuthCard.tsx](./chat-fe/src/component/auth/AuthCard.tsx) | Khung/branding, thông báo và chuyển đổi login/register |
| [src/component/auth/AuthForm.tsx](./chat-fe/src/component/auth/AuthForm.tsx) | Form email/password, confirm password và remember-me |
| [src/component/auth/OtpModal.tsx](./chat-fe/src/component/auth/OtpModal.tsx) | Nhập email/OTP, gửi lại mã và xác nhận |
| [src/component/auth/authTypes.ts](./chat-fe/src/component/auth/authTypes.ts) | API types, helper parse JSON, auth/OTP state và reducer |

#### Component chat

| File | Trách nhiệm |
|---|---|
| [src/component/chat/ChatNavbar.tsx](./chat-fe/src/component/chat/ChatNavbar.tsx) | Header, thông tin user, trạng thái Socket.IO và logout |
| [src/component/chat/ChatSidebar.tsx](./chat-fe/src/component/chat/ChatSidebar.tsx) | Danh sách/tìm kiếm/chọn conversation |
| [src/component/chat/ChatMessageList.tsx](./chat-fe/src/component/chat/ChatMessageList.tsx) | Hiển thị message, typing indicator và reactions |
| [src/component/chat/ChatInput.tsx](./chat-fe/src/component/chat/ChatInput.tsx) | Form gửi tin nhắn và emoji picker |
| [src/component/chat/CreateChatModal.tsx](./chat-fe/src/component/chat/CreateChatModal.tsx) | Modal nhập tên và loại conversation |

#### State, types, data và style

| File | Trách nhiệm |
|---|---|
| [src/hooks/useChat.ts](./chat-fe/src/hooks/useChat.ts) | Ghép state, API, Socket.IO và chat actions cho trang home |
| [src/hooks/chatReducer.ts](./chat-fe/src/hooks/chatReducer.ts) | Các transition cập nhật state chat theo action |
| [src/types/chat.types.ts](./chat-fe/src/types/chat.types.ts) | Kiểu `ConversationItem`, `MessageItem`, `ReactionItem` và user |
| [src/data/mockChat.ts](./chat-fe/src/data/mockChat.ts) | Dữ liệu conversation mẫu khởi tạo giao diện |
| [src/utils/authFetch.ts](./chat-fe/src/utils/authFetch.ts) | Fetch có cookie; thử refresh token khi nhận 401 |
| [src/index.css](./chat-fe/src/index.css) | Tailwind import và style nền toàn trang |
| [src/App.css](./chat-fe/src/App.css) | File style bổ sung; hiện gần như để trống |
| [src/assets/react.svg](./chat-fe/src/assets/react.svg) | Asset React mẫu |
| [public/vite.svg](./chat-fe/public/vite.svg) | Asset Vite mẫu được phục vụ tĩnh |

#### Cấu hình/build frontend

| File | Trách nhiệm |
|---|---|
| [package.json](./chat-fe/package.json) | Dependencies và scripts dev/build/typecheck |
| [package-lock.json](./chat-fe/package-lock.json) | Lockfile npm frontend |
| [vite.config.ts](./chat-fe/vite.config.ts) | Plugin React/Tailwind và proxy API/Socket.IO cho local dev |
| [tsconfig.json](./chat-fe/tsconfig.json) | Compiler options TypeScript/React |
| [Dockerfile](./chat-fe/Dockerfile) | Build Vite rồi copy bundle sang Nginx image |
| [nginx.conf](./chat-fe/nginx.conf) | SPA fallback, gzip và reverse proxy tới backend |
| [.dockerignore](./chat-fe/.dockerignore) | Loại dependencies/build/env khỏi Docker build context |
| [.gitignore](./chat-fe/.gitignore) | Loại dependencies/build và file env khỏi Git |

### 9.3. Backend — `chat-be`

#### Khởi tạo server và routes

| File | Trách nhiệm |
|---|---|
| [src/index.ts](./chat-be/src/index.ts) | Tạo Express app/HTTP server, gắn Socket.IO, routes và `/health` |
| [src/routes/auth.ts](./chat-be/src/routes/auth.ts) | Ánh xạ endpoint auth/OTP sang controller |
| [src/routes/chat.ts](./chat-be/src/routes/chat.ts) | Ánh xạ endpoint conversation/message và middleware auth |

#### Controllers

| File | Trách nhiệm |
|---|---|
| [src/controllers/controllers.user.ts](./chat-be/src/controllers/controllers.user.ts) | Đăng ký, đăng nhập, JWT cookie, refresh token, logout và middleware xác thực |
| [src/controllers/mail.controllers.ts](./chat-be/src/controllers/mail.controllers.ts) | Gửi email thử nghiệm, gửi OTP và xác thực OTP |
| [src/controllers/chat.controller.ts](./chat-be/src/controllers/chat.controller.ts) | Xử lý HTTP request conversation/message và gọi model |
| [src/controllers/socket.controller.ts](./chat-be/src/controllers/socket.controller.ts) | Join/leave room, lưu/phát message, typing event và reaction |

#### Database, model và cấu hình email

| File | Trách nhiệm |
|---|---|
| [src/db/db.user.ts](./chat-be/src/db/db.user.ts) | Tạo Prisma Client với MariaDB adapter và singleton trong dev |
| [src/model/model.user.ts](./chat-be/src/model/model.user.ts) | Truy vấn user và refresh token |
| [src/model/model.otp.ts](./chat-be/src/model/model.otp.ts) | Lưu, xác thực, xóa OTP và cập nhật trạng thái user |
| [src/model/model.chat.ts](./chat-be/src/model/model.chat.ts) | Truy vấn/tạo conversation, lưu message và thao tác reaction |
| [src/config/mail.config.ts](./chat-be/src/config/mail.config.ts) | Tạo Nodemailer transporter từ SMTP env |
| [prisma/schema.prisma](./chat-be/prisma/schema.prisma) | Khai báo user, token, OTP, conversation, message và reaction |
| [prisma.config.ts](./chat-be/prisma.config.ts) | Cấu hình Prisma CLI và dựng datasource URL từ `DB_*` |
| [src/generated/prisma/](./chat-be/src/generated/prisma) | Prisma Client được generate; không sửa tay các file bên trong |

#### Cấu hình/build backend

| File | Trách nhiệm |
|---|---|
| [package.json](./chat-be/package.json) | Dependencies, scripts dev/build/start/typecheck và phiên bản Node |
| [package-lock.json](./chat-be/package-lock.json) | Lockfile npm backend |
| [tsconfig.json](./chat-be/tsconfig.json) | Cấu hình TypeScript NodeNext; build `src` ra `dist` |
| [Dockerfile](./chat-be/Dockerfile) | Generate Prisma, compile TypeScript và tạo runtime image |
| [.gitignore](./chat-be/.gitignore) | Loại `node_modules`, `dist` và `.env` khỏi Git |
| [.dockerignore](./chat-be/.dockerignore) | Loại file không cần thiết khỏi Docker context |
| [fix-db.js](./chat-be/fix-db.js) | Script bảo trì foreign key một lần; không phải bước setup thông thường |
| [README.md](./chat-be/README.md) | README riêng backend; một số thông tin cổng/Prisma có thể không đồng nhất với code hiện tại |

## 10. Các file sinh tự động và không nên sửa tay

- `chat-fe/node_modules/`, `chat-be/node_modules/`: dependencies npm.
- `chat-fe/dist/`: bundle frontend do Vite build tạo.
- `chat-be/dist/`: JavaScript do TypeScript build tạo.
- `chat-be/src/generated/prisma/`: Prisma Client do `npx prisma generate` tạo.
- `mysql_data`: Docker volume giữ dữ liệu database.

Không sửa trực tiếp file sinh tự động; thay đổi schema trong
[schema.prisma](./chat-be/prisma/schema.prisma), sau đó chạy lại Prisma generate.

## 11. Ghi chú triển khai và vận hành

- `chat-be/README.md` ghi cổng mặc định khác với code; cổng mặc định hiện tại
  trong `src/index.ts` là `8081`.
- Nginx và Vite proxy cấu hình đường dẫn API/Socket.IO; khi đổi port hoặc host,
  cập nhật đồng bộ backend, Vite, Nginx và Compose.
- Socket.IO CORS hiện cho phép hai origin localhost dùng cho Vite. Khi triển
  khai hostname khác, cần cấu hình origin phù hợp.
- `fix-db.js` có thể xóa foreign key trên bảng token. Chỉ dùng để khắc phục một
  tình huống database cụ thể sau khi đã sao lưu và xem nội dung script.
- Chưa thấy thư mục test riêng trong source hiện tại; các script chính để xác
  minh code là `typecheck` và `build`.
