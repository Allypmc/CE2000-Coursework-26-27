const express = require("express");
const path = require("path");

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files (CSS/JS/images)
app.use(express.static(__dirname));

// Route for home page
app.get("/", (req, res) => {
  res.render("index");
});

// Start server
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
        