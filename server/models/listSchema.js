import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const ListSchema = sequelize.define("listSchema", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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