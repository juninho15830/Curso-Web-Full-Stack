const express = require("express");//Importa o express

const app = express();//Inicializa o Express
app.use(express.json());

app.post("/users", (request, response) => {
    const { name, email, password } = request.body;

    response.json({ name, email, password });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));