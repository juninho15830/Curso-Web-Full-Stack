const express = require("express");//Importa o express

const app = express();//Inicializa o Express

app.get("/message/:id/:user", (request, response) => {
    const { id, user } = request.params;

    response.send(`Mensagem ID: ${id}. Nome do usuário: ${user}.`);
});

app.get("/users", (request, response) => {
    const { page, limit } = request.query;

    response.send(`Página: ${page}. Mostrar: ${limit}`);

})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));