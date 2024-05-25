import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import User from "./user.js";
import Movie from "./movie.js";

const User_Mylist = sequelize.define("user_mylist", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: "id"
        },
        onDelete: true,
    },
    movieId: {
        type: DataTypes.UUID,
        references: {
            model: Movie,
            key: "id"
        }
    }
})

export default User_Mylist