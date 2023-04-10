const path = require("path");//padroniza a navegação entre pastas independete do sistema operacional.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")//Aqui colocamos o caminho do nosso db.
    },
    useNullAsDeFault: true
  },
};