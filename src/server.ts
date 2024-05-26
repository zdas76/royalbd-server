import { Sequelize } from "sequelize";
import app from "./app";
import config from "./config";

// const sequelize = new Sequelize(
//   config.bd_name as string,
//   config.user as string,
//   config.password as string,
//   {
//     host: "103.243.175.226:3306",
//     dialect: "mysql",
//   }
// );

const sequelize = new Sequelize(config.db_url as string);

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
