const path = require("path");//padroniza a navegação entre pastas independete do sistema operacional.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")//Aqui colocamos o caminho do nosso db.
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")//Aqui colocamos o caminho da nossa migration, que é responsavel pelo versionamento do nosso banco.
    },
    useNullAsDefault: true
  },
};