//import express
const express = require("express");

//buat object express
const app = express();

//menggunakan middleware
app.use(express.json());

//definisikan route
const router = require("./routes/api");
app.use(router);


//Definisikan port
app.listen(3000, () => {
    console.log("Server running at https://localhost:3000");
});