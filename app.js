const express = require("express");
const app = express();
const PORT = 4500;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("calculator");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
