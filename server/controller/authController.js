
import bcrypt, { hash } from "bcrypt"
import User from "../models/user.js";
import jwt from "jsonwebtoken"
import { raw } from "mysql2";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            res.status(400).json({ success: false, message: "Invalid email address" });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            email,
            password: hashPassword
        });

        res.status(200).json({ success: true, message: "user successfully created", user })
    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error.message,
        })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                email: email,
            },
            raw: true
        });
        if (!user) {
            res.status(404).json({
                message: "incorrect email or password",
            });
            return;
        } else {
            const result = await bcrypt.compare(password, user.password);
            if (result) {
                const accessToken = generateAccessToken(user);
                // res.cookie("accessToken", accessToken, {
                //     httpOnly: true,
                //     expires: accessToken.expiresIn,
                // }).status(200).json({
                //     message: "Login successful",
                //     user,
                //     accessToken,
                // });
                res.status(200).json({
                    message: "Login successful",
                    user,
                    accessToken,
                });
            } else {
                res.status(400).json({ message: "Password incorrect" });
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error.message,
        })
    }
}

const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email, username: user.username, isAdmin: user.isAdmin }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "5m",
    });
};
