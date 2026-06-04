const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;
const root = path.join(__dirname, "public");

app.use(express.static(root));

app.get("/", (_req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

app.get("/subject/:id", (_req, res) => {
  res.sendFile(path.join(root, "subject.html"));
});

const redirects = {
  "/techvid": "https://drive.google.com/file/d/1V-ri09YNvxm8E05PpzD2ovfP_89gYeHp/view?usp=drive_link",
  "/mockupvid":
    "https://drive.google.com/file/d/1GlI5VmEvL9yc8LUWYeyeaCVUeFM1q5dq/view?usp=sharing",
  "/video": "https://drive.google.com/file/d/1eVM2RFplAu-gDe1Laeg3VhegaA0udYoq/view?usp=sharing",
};

for (const [route, url] of Object.entries(redirects)) {
  app.get(route, (_req, res) => res.redirect(302, url));
}

app.listen(PORT, () => {
  console.log(`The Eye website → http://localhost:${PORT}`);
});
