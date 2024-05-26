import { DataTypes, Sequelize } from "sequelize";
import { UserModel } from "./category.interfact";

const UserModel = Sequelize.define<UserModel>("Cetagory", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  name: {
    type: DataTypes.STRING,
  },
});
