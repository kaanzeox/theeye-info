const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;
const root = __dirname;

app.use(express.static(root));

app.get("/", (_req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

app.get("/subject/:id", (_req, res) => {
  res.sendFile(path.join(root, "subject.html"));
});

app.listen(PORT, () => {
  console.log(`The Eye website → http://localhost:${PORT}`);
});
