import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

if (!PORT) {
  console.error("Error: PORT environment variable is not set.");
  process.exit(1);
}

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/time", (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send(`Current server time is: ${currentTime}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
