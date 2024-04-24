
import bcrypt, { hash } from "bcrypt"
import User from "../models/user.js";
import jwt from "jsonwebtoken"
import asyncMiddleware from "../middleware/asyncMiddleware.js";
import CustomerError from "../utils/CustomerError.js";
import logger from "../utils/CustomLogger.js";

export const register = asyncMiddleware(async (req, res, next) => {
    const { username, email, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        const error = new CustomerError("Email không hợp lệ", 400);
        return next(error);
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashPassword
    });

    res.status(200).json({ success: true, data: { user: user } })
    logger.info({ message: "Register", url: req.url, method: req.method, body: req.body })
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
        res.status(200).json({
            message: "Login successful",
            data: {
                user,
                accessToken,
            }
        });
        logger.info({ message: "Login", url: req.url, method: req.method, body: req.body })
    } else {
        const error = new CustomerError("Mật khẩu không đúng", 401);
        return next(error);
    }

})

const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email, username: user.username, isAdmin: user.isAdmin }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "5m",
    });
};
