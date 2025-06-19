import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

if (!PORT) {
  console.error("Error: PORT environment variable is not set.");
  process.exit(1);
}

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
