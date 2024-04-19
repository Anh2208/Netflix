import { Sequelize } from "sequelize";

import mysql from "mysql2/promise";

export const sequelize = new Sequelize("netflix", "root", null, {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});
//, logging: false
export const connect = async () => {
    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: null,
        });

        await connection.query("CREATE DATABASE IF NOT EXISTS `netflix`");

        await connection.end();

        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        await sequelize.sync();
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};