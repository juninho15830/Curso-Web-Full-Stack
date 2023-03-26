const express = require("express");//Importa o express

const app = express();//Inicializa o Express

app.get("/mensage/:id/:user", (request, response) => {
    response.send(`
        Mensagem ID: ${request.params.id}.
        Para o usuário: ${request.params.user}.
    `);
});

app.get("/users", (request, response) => {
    const { page, limit } = request.query;

    response.send(`Página: ${page}. Mostrar: ${limit}`);

})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));