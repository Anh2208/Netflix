import { sequelize } from "../config/database.js";
import Movie from "../models/movie.js";
import asyncMiddleware from "../middleware/asyncMiddleware.js"
import CustomerError from "../utils/CustomerError.js";
import logger from "../utils/CustomLogger.js";

export const createMoive = asyncMiddleware(async (req, res, next) => {
    const movie = await Movie.create(req.body);
    res.status(201).json({ status: "success", data: movie });
    logger.info({ message: "Admin create Movie", url: req.originalUrl, method: req.method, body: req.body, userId: req.user.id })
})

export const updateMovie = async (req, res, next) => {
    try {
        const movie = await Movie.findByPk(req.params.id);
        if (!movie) {
            const error = new CustomerError('Movie with that ID is not found!', 404);
            return next(error);
        }
        await Movie.update(
            req.body,
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        const updatedMovie = await Movie.findByPk(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                movie: updatedMovie
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        });
    }
}

export const deleteMovie = asyncMiddleware(async (req, res, next) => {
    const movie = await Movie.findByPk(req.params.id)
    if (!movie) {
        const error = new CustomerError("Không thể tìm Movie với ID này", 404);
        return next(error);
    }
    await movie.destroy();
    res.status(200).json({ status: 'success', data: null });
    logger.info({ message: "Admin delete Movie", url: req.originalUrl, method: req.method, body: req.body, userId: req.user.id })
})

export const getMovieById = asyncMiddleware(async (req, res, next) => {
    const movie = await Movie.findByPk(req.params.id);

    if (!movie) {
        const error = new CustomerError('Movie with that ID is not found!', 404);
        return next(error);
    }

    res.status(200).json({ status: "success", data: { movie } });
    logger.info({ message: "getMovieById", url: req.originalUrl, method: req.method, body: req.body, userId: req.user.id })
})

export const getMovieByTitle = asyncMiddleware(async (req, res, next) => {
    const listMovie = await Movie.findAll({
        where: {
            title: req.query.title,
        },
        raw: true
    });
    res.status(200).json({ status: "success", data: { listMovie } })
    logger.info({ message: "getMovieByTitle", url: req.originalUrl, method: req.method, body: req.body, userId: req.user.id })
})

export const getMovieRandom = asyncMiddleware(async (req, res, next) => {
    const type = req.query.type;
    let condition = {};
    if (type == "Movie") {
        condition = { isSeries: false };
    } else {
        condition = { isSeries: true };
    }
    const movies = await Movie.findAll({
        where: condition,
        order: sequelize.random(),
        limit: 1
    });
    res.status(200).json({ status: "success", data: movies });
    logger.info({ message: "getMovieRandom", url: req.originalUrl, method: req.method, body: req.body, userId: req.user.id })
})