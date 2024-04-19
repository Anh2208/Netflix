import connection from "../utils/connect.js";

export const movieCreate = async (req, res) => {
    try {
        console.log("cac")
        const sql =
            'INSERT INTO `users`(`name`, `age`) VALUES ("Josh", 19), ("Page", 45)';

        connection.query(sql, (err, result, fields) => {
            if (err instanceof Error) {
                console.log(err);
                return;
            }

            console.log(result);
            console.log(fields);
            res.status(200).json({ message: "test successfully" })
        });
    } catch (error) {
        console.log("ERROR", error);
        res
            .status(500)
            .json({ success: false, message: "Lỗi tạo lớp học phần" });
    }
}