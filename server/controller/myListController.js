import User_Mylist from "../models/user_myList.js";

export const createMyList = async (req, res) => {
    const body = req.body;
    try {
        if (req.user.id == body.userId) {
            const mylist = await User_Mylist.create({
                userId: body.userId,
                movieId: body.movieId,
            })
            res.status(200).json({ status: "success", data: mylist })
        } else {
            res.status(403).json("You are not allowed to add my list!");
        }
    } catch (error) {
        res.status(500).json({ status: "fail", message: error.message });
    }
}

export const deleteMyList = async (req, res) => {
    const userIdQuery = req.query.userId;
    const myListId = req.query.myListId;
    try {
        if (req.user.id == userIdQuery) {
            const mylist = await User_Mylist.findByPk(myListId);
            if (mylist) {
                await mylist.destroy();
                res.status(200).json({ status: "success", message: "Xóa My List thành công!!!" });
            } else {
                res.status(404).json({ status: "fail", message: "Không thể tìm thấy My List!!!" });
            }
        } else {
            res.status(403).json("You are not allowed to delete this My List!");
        }
    } catch (error) {
        res.status(500).json({ status: "fail", message: error.message });
    }
}