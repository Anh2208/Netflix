import User from "../models/user.js";

export const getUser = async (req, res) => {
    try {
        if (req.user.email == req.params.email) {
            const findUser = await User.findByPk(req.params.email, { raw: true });
            const { password, isAdmin, ...userDetail } = findUser;
            res.status(200).json({ success: true, message: "Get user successfully", user: userDetail });
        } else {
            res.status(404).json({ success: false, message: "Can't find user" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error.message,
        })
    }
}

export const updateUser = async (req, res) => {
    const body = req.body;
    try {
        if (req.user.id == req.params.id) {
            const user = await User.findByPk(req.params.id);
            if (user) {
                await User.update(
                    body,
                    {
                        where: {
                            id: req.params.id,
                        }
                    }
                )
                const userUpdate = await User.findByPk(req.params.id);
                res.status(200).json({ status: "success", message: "Cập nhật thông tin thành công", dataL: userUpdate });
            } else {
                res.status(404).json({ status: "fail", message: "Không có quyền cập nhật thông tin" });
            }
        } else {
            res.status(403).json("You are not allowed to delete this My List!");
        }
    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error.message,
        })
    }
}