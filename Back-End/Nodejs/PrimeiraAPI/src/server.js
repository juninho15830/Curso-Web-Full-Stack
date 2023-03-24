const express = require("express");//Importa o express

const app = express();//Inicializa o Express

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));