const express = require("express");
const { dirname } = require("path");
const path = require("path");

const app = express();

const publicFolderPath = path.resolve(__dirname, "./public");
app.use(express.static(publicFolderPath));

app.listen(8000, () => {
  console.log("Servidor corriendo en el puerto 8000");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});
