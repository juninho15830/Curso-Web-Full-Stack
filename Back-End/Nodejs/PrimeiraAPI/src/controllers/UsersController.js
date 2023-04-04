const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite") 

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body;

        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if (checkUserExists) {
            throw new AppError("Este e-mail já está em uso.");
        }

        const hashedPassword = await hash(password, 8); //8 é o fator de complexidade da criptografia

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [ name, email, hashedPassword])

        return response.status(201).json();
    }

    /*
    * index - GET para listar vários registros.
    * show - GET para exibir um registro específico.
    * create - POST para criar um registro.
    * update - PUT para atualizar o registro.
    * delete - DELETE para remover um registro.
    */
}

module.exports = UsersController;