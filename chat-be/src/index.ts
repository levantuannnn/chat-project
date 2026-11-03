import express from "express";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();
const port = Number(process.env.PORT ?? 3000);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be an integer between 1 and 65535");
}
app.use(cookieParser());
app.use(express.json());
app.use("/auth", authRouter);

app.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Chat backend listening on http://localhost:${port}`);
});
