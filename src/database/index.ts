import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "uxflix_development",
  username: "uxflix",
  password: "uxflix",
  define: {
    underscored: true, //sequelize converte de snake_case para camelCase direto no db
  },
});
