import { sequelize } from "../config/database.js";
import Movie from "../models/movie.js";
import asyncMiddleware from "../middleware/asyncMiddleware.js"
import CustomerError from "../utils/CustomerError.js";
import logger from "../utils/CustomLogger.js";
import path from "path";
import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const upload = async (req, res) => {
    const { fileName, chunkIndex, totalChunks } = req.body;
    const chunk = req.file;
    const chunkFolder = path.join(__dirname, 'uploads', 'chunks');
    if (!fs.existsSync(chunkFolder)) {
        fs.mkdirSync(chunkFolder, { recursive: true });
    }

    const chunkFilename = path.join(chunkFolder, `chunk-${chunkIndex}-${chunk.originalname}`);
    fs.renameSync(chunk.path, chunkFilename);

    if (parseInt(chunkIndex) === parseInt(totalChunks) - 1) {
        // Concatenate chunks into the final file
        // const finalFilePath = path.join(__dirname, 'uploads', `${Date.now()}-${chunk.originalname}`);
        const finalFilePath = path.join(__dirname, 'uploads', `${fileName}`);
        const writeStream = fs.createWriteStream(finalFilePath);

        for (let i = 0; i < totalChunks; i++) {
            const currentChunkPath = path.join(chunkFolder, `chunk-${i}-${chunk.originalname}`);
            const data = fs.readFileSync(currentChunkPath);
            writeStream.write(data);
            fs.unlinkSync(currentChunkPath); // Remove chunk after writing
        }
        writeStream.end();
        res.status(200).json({ message: 'File uploaded successfully' });
    } else {
        res.status(200).json({ message: `Chunk ${chunkIndex} uploaded successfully` });
    }

}

export const getVideo = async (req, res) => {
    const filename = req.params.filename;
    const videoPath = path.join(__dirname, 'uploads', filename);

    // Kiểm tra xem video có tồn tại không
    if (!fs.existsSync(videoPath)) {
        return res.status(404).json({ error: 'Video not found' });
    }

    // Đọc video từ file và gửi lại cho client
    const videoStream = fs.createReadStream(videoPath);
    videoStream.pipe(res);
}

export const createMovie = asyncMiddleware(async (req, res, next) => {
    const findMoive = await Movie.findOne({
        where: {
            title: req.body.title
        },
        raw: true
    });

    if (findMoive) {
        const error = new CustomerError('Title movie exist', 400);
        return next(error);
    }
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

export const getAllMovie = asyncMiddleware(async (req, res, next) => {
    const movieList = await Movie.findAll();

    if (!movieList) {
        const error = new CustomerError('Movie is not found!', 404);
        return next(error);
    }

    res.status(200).json({ status: "success", movieList });
    logger.info({ message: "Get All Movie", url: req.originalUrl, method: req.method, userId: req.user.id })
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
