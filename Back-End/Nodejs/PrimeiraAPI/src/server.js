const express = require("express");//Importa o express

const routes = require("./routes")

const app = express();//Inicializa o Express
app.use(express.json());

app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));