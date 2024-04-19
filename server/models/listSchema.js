import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const ListSchema = sequelize.define("listSchema", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    context: {
        type: DataTypes.JSON,
        allowNull: true,
    }
}, {
    timestamps: true,
})

export default ListSchema