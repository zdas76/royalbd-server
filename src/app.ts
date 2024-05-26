import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Mrinal World!");
});

export default app;
