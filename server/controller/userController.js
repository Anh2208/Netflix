import asyncMiddleware from "../middleware/asyncMiddleware.js";
import User from "../models/user.js";
import CustomerError from "../utils/CustomerError.js";
import logger from "../utils/CustomLogger.js";

export const getUser = asyncMiddleware(async (req, res, next) => {
    if (req.user.email != req.params.email) {
        const error = new CustomerError("Không tìm thấy người dùng", 404);
        return next(error)
    } else {
        const findUser = await User.findOne({
            where: {
                email: req.params.email
            },
            raw: true
        });
        const { password, ...user } = findUser;
        res.status(200).json({ status: "success", data: { user: user } });
        logger.info({ message: "User get info", url: req.url, method: req.method, body: req.body, userId: req.user.id })
    }
})

export const updateUser = asyncMiddleware(async (req, res, next) => {
    const body = req.body;
    if (req.user.email != req.params.email) {
        const error = new CustomerError("Không có quyền cập nhật người dùng hiện tại", 403);
        return next(error);
    }
    const user = await User.findOne({
        where: {
            email: req.params.email
        },
        raw: true
    });
    if (!user) {
        const error = new CustomerError("Không tìm thấy người dùng", 404);
        return next(error)
    } else {
        await User.update(
            body,
            {
                where: {
                    id: user.id,
                }
            }
        )
        const userUpdate = await User.findByPk(user.id);
        res.status(200).json({ status: "success", data: { user: userUpdate } });
        logger.info({ message: "User Update", url: req.url, method: req.method, body: req.body, userId: req.user.id })
    }
})

export const deleteUser = asyncMiddleware(async (req, res, next) => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
        const error = new CustomerError("Không tìm thấy User", 404);
        return next(error);
    }
    if (user.isAdmin == 1) {
        const error = new CustomerError("Lỗi, không thể xóa user hiện tại", 403);
        return next(error);
    } else {
        await user.destroy();
        res.status(200).json({ status: "success", data: null });
        logger.info({ message: "Delete User", url: req.url, method: req.method, body: req.body, userId: req.user.id })
    }
})