import http from "node:http";
import express from "express";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js";
import chatRouter from "./routes/chat.js";
import { registerSocketHandlers } from "./controllers/socket.controller.js";

const app = express();
const port = Number(process.env.PORT ?? 8081);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be an integer between 1 and 65535");
}

app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/auth", authRouter);
app.use("/chat", chatRouter);

app.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});

// Khởi tạo HTTP Server kết hợp Socket.IO
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Kích hoạt Socket.IO Controller
registerSocketHandlers(io);

httpServer.listen(port, () => {
  console.log(`Chat backend with Socket.IO listening on http://localhost:${port}`);
});
