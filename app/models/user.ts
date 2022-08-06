"use strict";

import { DataTypes, Sequelize } from "sequelize";

function User(sequelize: Sequelize) {
  const user = sequelize.define(
    "Users",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "Users",
    }
  );
  return user;
}

export default User;
