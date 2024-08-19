require('dotenv').config({
    path: (process.env.NODE_ENV === "test") ? ".env.testing" : (process.env.NODE_ENV === "development") ? ".env.dev" : ".env"
})

const logdb = process.env.DB_LOG === 'false' ? false : console.log;

let folderconfseeders = process.env.NODE_ENV === "test" ? 'test' : (process.env.NODE_ENV === "development") ? 'dev' : 'production';
const seederStoragePath = `./src/database/seeders/conf/${folderconfseeders}/seeder.json`;

module.exports =
{

    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: logdb, //indica se é para mostrar ou nao os logs de comandos (Select, insert...)
    seederStorage: "json",
    seederStoragePath: seederStoragePath,
    define: {
        timestamps: true,
        underscored: false,
        freezeTableName: true
    },
}