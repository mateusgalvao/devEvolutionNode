const mongoose = require("mongoose");

connect = () => {
    mongoose.connect("mongodb://localhost:27017/devevolution").then(() => {
        console.log("Banco conectado com sucesso")
    })
    .catch((err)=>{
        console.log("Deu ruim", err)
    })
};

module.exports = {
    connect
};