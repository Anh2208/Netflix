import jwt from "jsonwebtoken";

export const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json("Token is not valid");
            }
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated");
    }
}

export const verifyAdmin = (req, res, next) => {
    verify(req, res, () => {
        if (req.user.isAdmin === 1) {
            next();
        } else {
            return res
                .status(401)
                .json({ success: false, message: "You're not authorize" });
        }
    });
};

export const verifyUser = (req, res, next) => {
    verify(req, res, next, () => {
        if (req.user.email == req.params.email || req.user.isAdmin == 1) {
            next();
        } else {
            res.status(401).json({ success: false, message: "You're not authenticated" });
        }
    })
}