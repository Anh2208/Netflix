import ListSchema from "../models/listSchema.js";

export const listSchemaCreate = async (req, res) => {
    const body = req.body;
    console.log("body is", req.body)
    try {
        // const newListSchema = await ListSchema.create({
        //     title: body.title,
        //     type: body.type,
        //     genre: body.genre,
        // })
        const newListSchema = await ListSchema.create(body);
        res.status(200).json({ success: true, message: "create success", data: newListSchema })
    } catch (error) {
        console.log(error)
        res
            .status(500)
            .json({ success: false, message: "Create product Error", error: error });
    }
}