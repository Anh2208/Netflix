import { where } from "sequelize";
import Movie from "../models/movie.js";

export const createMoive = async (req, res) => {
    const body = req.body;
    try {
        const movie = await Movie.findOne({
            where: {
                title: req.body.title,
            }
        });
        if (movie) {
            res.status(409).json({ message: "Tiêu đề movie đã tồn tại!!!" })
        } else {
            const newMovie = await Movie.create(body);
            res.status(200).json({ status: "success", data: newMovie });
        }
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message })
    }
}

export const updateMovie = async (req, res) => {
    const body = req.body;
    try {
        await Movie.update(
            body,
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        const updateMovie = await Movie.findByPk(req.params.id);
        res.status(200).json({ status: "success", data: updateMovie });
    } catch (error) {
        res.status(500).json({ status: "fail", message: error.message });
    }
}

export const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByPk(req.params.id)
        if (movie) {
            await movie.destroy();
            res.status(200).json({ status: "success", message: "Xóa movie thành công!!!" });
            return;
        }
        res.status(404).json({ status: "fail", message: "Không tìm thấy movie" });
    } catch (error) {
        res.status(500).json({ status: "fail", message: error.message });
    }
}