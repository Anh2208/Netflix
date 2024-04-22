import { Sequelize } from "sequelize";
import ListSchema from "../models/listSchema.js";

export const listSchemaCreate = async (req, res) => {
    const body = req.body;
    try {

        const newListSchema = await ListSchema.create(body);
        res.status(200).json({ success: true, message: "create success", data: newListSchema })
    } catch (error) {
        console.log(error)
        res
            .status(500)
            .json({ success: false, message: error.message });
    }
}

export const getAllListSchema = async (req, res) => {
    try {
        const typeQuery = req.query.type;
        const genreQuery = req.query.genre;
        let list = [];
        if (typeQuery) {
            if (genreQuery) {
                list = await ListSchema.findAll({
                    where: {
                        type: typeQuery,
                        genre: genreQuery
                    },
                    raw: true,
                    order: Sequelize.literal('RAND()'),
                    // limit: 2
                });
            } else {
                list = await ListSchema.findAll({
                    where: {
                        type: typeQuery
                    },
                    raw: true,
                    order: Sequelize.literal('RAND()'),
                    // limit: 2
                });
            }
        }
        else {
            list = await ListSchema.findAll({
                raw: true,
                order: Sequelize.literal('RAND()'),
                // limit: 2
            });
        }
        res.status(200).json({ status: "sucess", list: list });
    } catch (error) {
        res.status(500).json({ status: "fail", message: error.message });
    }
}

export const listSchemaDelete = async (req, res) => {
    try {
        const listChema = await ListSchema.findByPk(req.params.title);
        console.log(listChema)
        if (!listChema) {
            res.status(404).json({ status: "fail", message: "ListSchema with that title is not found!" });
            return;
        }
        await listChema.destroy();
        res.status(200).json({ status: "sucess", message: null });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message })
    }
}