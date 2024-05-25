import asyncMiddleware from "../middleware/asyncMiddleware.js";
import User from "../models/user.js";
import CustomerError from "../utils/CustomerError.js";
import logger from "../utils/CustomLogger.js";
import bcrypt, { hash } from "bcrypt"

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

export const getAllUser = asyncMiddleware(async (req, res, next) => {

    const userList = await User.findAll({
        attributes: [
            'id',
            'email',
            'username',
            'avatar',
            'isAdmin'
        ],
        raw: true
    });

    res.status(200).json({ status: "success", userList: userList });
    logger.info({ message: "get all user", url: req.url, method: req.method, body: req.body, userId: req.user.id })
})

export const updateUser = asyncMiddleware(async (req, res, next) => {
    const { email } = req.params;
    const { password, newpassword } = req.body;

    const foundUser = await User.findOne({ where: { email }, raw: true });

    if (!foundUser) {
        const error = new CustomerError("Không tìm thấy người dùng", 404);
        return next(error);
    }

    if (foundUser.email !== email) {
        const error = new CustomerError("Không có quyền cập nhật người dùng hiện tại", 403);
        return next(error);
    }

    if (password) {
        const result = await bcrypt.compare(password, foundUser.password);
        if (result) {

            const hashPassword = await bcrypt.hash(newpassword, 10);

            await User.update({ password: hashPassword }, { where: { id: foundUser.id } });

        } else {
            const error = new CustomerError("Mật khẩu cập nhật không đúng", 401);
            return next(error);
        }
    } else {
        await User.update(body, { where: { id: foundUser.id } });
    }

    const updatedUser = await User.findByPk(foundUser.id);
    logger.info({ message: "User updapte", url: req.originalUrl, method: req.method, body: req.body, userId: req.user.id })
    res.status(200).json({ status: "success", data: { user: updatedUser } });

});


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