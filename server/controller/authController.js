
import bcrypt, { hash } from "bcrypt"
import User from "../models/user.js";
import jwt from "jsonwebtoken"
import asyncMiddleware from "../middleware/asyncMiddleware.js";
import CustomerError from "../utils/CustomerError.js";
import logger from "../utils/CustomLogger.js";

let refreshTokens = [];

export const register = asyncMiddleware(async (req, res, next) => {
    const { username, email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        const error = new CustomerError("Email không hợp lệ", 400);
        return next(error);
    }

    const existUser = await User.findOne({
        where: {
            email
        }
    })
    if (existUser) {
        res.status(403).json({ success: false, message: "Lỗi email đã tồn tại" })
        logger.info({ message: "Register", url: req.url, method: req.method, body: req.body })
    }
    else {
        const hashPassword = await bcrypt.hash(password, 10);
        await User.create({
            username,
            email,
            password: hashPassword
        });

        res.status(200).json({ success: true })
        logger.info({ message: "Register", url: req.url, method: req.method, body: req.body })
    }
})

export const login = asyncMiddleware(async (req, res, next) => {

    const { email, password } = req.body;
    const user = await User.findOne({
        where: {
            email,
        },
        raw: true
    })
    if (!user) {
        const error = new CustomerError("Thông tin email hoặc mật khẩu không đúng", 401);
        return next(error);
    }
    const result = await bcrypt.compare(password, user.password);
    if (result) {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        refreshTokens.push(refreshToken);
        const { password, id, ...rest } = user;

        // Trả về token trong cookie
        res.cookie('accessToken', accessToken, { httpOnly: false });
        res.cookie('refreshToken', refreshToken, { httpOnly: false });

        res.status(200).json({
            email: user.email,
            username: user.username,
            profilePic: user.profilePic,
            avatar: user.avatar,
            isAdmin: user.isAdmin,
            accessToken,
            refreshToken,
        });
        logger.info({ message: "Login", url: req.url, method: req.method, body: req.body })
    } else {
        const error = new CustomerError("Mật khẩu không đúng", 401);

        return next(error);
    }
})

export const logout = (req, res) => {

    refreshTokens = refreshTokens.filter(token => token !== req.body.token)

    res.clearCookie('accessToken');
    res.clearCookie("refreshToken");

    res.sendStatus(204)
}
export const refresh = (req, res) => {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
        logger.info({ message: "refreshToken", url: req.url, method: req.method, body: req.body })
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        err && logger.info({ message: "refreshToken", url: req.url, method: req.method, body: req.body })
        refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        refreshTokens.push(newRefreshToken);

        // res.status(200).json({
        //     accessToken: newAccessToken,
        //     refreshToken: newRefreshToken,
        // });

        // Trả về token trong cookie
        res.cookie('accessToken', newAccessToken, { httpOnly: false });
        res.cookie('refreshToken', newRefreshToken, { httpOnly: false });
        res.status(200).json({ message: "Token refreshed successfully" });
    });
}

const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email, username: user.username, isAdmin: user.isAdmin }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "30m",
    });
};

const generateRefreshToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email, username: user.username, isAdmin: user.isAdmin }, process.env.REFRESH_TOKEN_SECRET);
};

