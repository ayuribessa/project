import * as mysql from "mysql2/promise";

async function connect() {

    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    const config = {
        //colocar em .env posteriormente
        host: "localhost",
        user: "root",
        password: "senha_root",
        database: "tech_academy",

    }

    const connection = await mysql.createConnection(config);
    console.log("conexão realizada com sucesso");
    global.connection = connection;

};

export { connect }

