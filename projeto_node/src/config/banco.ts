import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  DataTypes: DataTypes,
};
