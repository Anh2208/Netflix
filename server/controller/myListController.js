import asyncMiddleware from "../middleware/asyncMiddleware.js";
import User_Mylist from "../models/user_myList.js";
import CustomerError from "../utils/CustomerError.js";
import logger from "../utils/CustomLogger.js";

export const createMyList = asyncMiddleware(async (req, res, next) => {
    const body = req.body;
    if (req.user.id != body.userId) {
        const error = new CustomerError("Bạn không được phép thêm phim vào danh sách", 403);
        return next(error);
    } else {
        const list = await User_Mylist.findOne({
            where: {
                userId: body.userId,
                movieId: body.movieId,
            }
        });
        if (list) {
            const error = new CustomerError("Phim đã tồn tại trong My List", 400);
            return next(error);
        } else {
            const myList = await User_Mylist.create({
                userId: body.userId,
                movieId: body.movieId,
            });
            res.status(200).json({ status: "success", data: { myList: myList } });
            logger.info({ message: "User add movie to My List", url: req.originalUrl, method: req.method, body: req.body, userId: req.user.id })
        }

    }
})

export const deleteMyList = asyncMiddleware(async (req, res, next) => {
    const userIdQuery = req.query.userId;
    const myListId = req.query.myListId;
    if (req.user.id != userIdQuery) {
        const error = new CustomerError("Bạn không được phép xóa phim khỏi danh sách", 403);
        return next(error);
    }
    const myList = await User_Mylist.findByPk(myListId);
    await myList.destroy();
    res.status(200).json({ status: "success", message: "Xóa My List thành công!!!" });
    logger.info({ message: "deleteMyList", url: req.originalUrl, method: req.method, body: req.body, userId: req.user.id })
})