import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Movie = sequelize.define("movie", {
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
    desc: { // description
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    imgTitle: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    imgSm: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    trailer: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    video: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    limit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.JSON,
        // allowNull: false,
        defaultValue: []
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isSeries: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    actor: {
        type: DataTypes.JSON,
        // allowNull: false,
        defaultValue: []
    }
}, {
    timestamps: false,
});

export default Movie;
