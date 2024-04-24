import { Sequelize } from "sequelize";
import ListSchema from "../models/listSchema.js";
import asyncMiddleware from "../middleware/asyncMiddleware.js";
import CustomerError from "../utils/CustomerError.js";
import logger from "../utils/CustomLogger.js";

export const createListSchema = asyncMiddleware(async (req, res, next) => {
    const newListSchema = await ListSchema.create(req.body);
    res.status(201).json({ status: "success", data: { list: newListSchema } })
    logger.info({ message: "Admin create List Schema", url: req.originalUrl, method: req.method, body: req.body, userId: req.user.id })
})

export const getAllListSchema = asyncMiddleware(async (req, res, next) => {
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
    } else {
        list = await ListSchema.findAll({
            raw: true,
            order: Sequelize.literal('RAND()'),
            // limit: 2
        });
    }
    res.status(200).json({ status: "sucess", data: { list: list } });
    logger.info({ message: "Get All List Schema", url: req.originalUrl, method: req.method, body: req.body, userId: req.user.id })
})

export const deleteListSchema = asyncMiddleware(async (req, res, next) => {
    const listSchema = await ListSchema.findByPk(req.params.id);
    if (!listSchema) {
        const error = new CustomerError("Không thể tìm thấy danh sách", 404);
        return next(error);
    } else {
        await listSchema.destroy();
        res.status(200).json({ status: "success", data: null });
        logger.info({ message: "Admin Delete List Schema", url: req.originalUrl, method: req.method, body: req.body, userId: req.user.id })
    }
})