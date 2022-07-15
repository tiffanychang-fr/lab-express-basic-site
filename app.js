const express = require("express");

// Create an app server
const app = express();

// Get use of static files from public folder
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

// Listener
app.listen("3000", () => {
  console.log("server is running on port 3000");
});
