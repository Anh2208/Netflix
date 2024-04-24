import CustomerError from "../utils/CustomerError.js";
import logger from "../utils/CustomLogger.js";

const devErrors = (res, error) => {
    res.status(error.statusCode).json({
        statusCode: error.statusCode,
        message: error.message,
        stackTrace: error.stack,
        error: error
    });
}

const prodErrors = (req, res, error) => {
    if (error.isOperational) {
        logger.log({
            level: "info",
            message: error.message,
            url: req.url,
            method: req.method,
            body: req.body
        });
        res.status(error.statusCode).json({
            status: error.statusCode,
            message: error.message
        });
    } else {
        logger.log({
            level: "error",
            message: error.message,
            url: req.url,
            method: req.method,
            body: req.body
        });
        res.status(500).json({
            status: "error",
            message: "Something went wrong! please try again later"
        });
    }
}

const castErrorHandler = (err) => {
    let msg;
    if (err.path !== undefined && err.value !== undefined) {
        msg = `Invalid value for ${err.path}: ${err.value}!`;
    } else {
        msg = "Invalid value!";
    }
    const level = err.statusCode >= 400 && err.statusCode < 500 ? 'info' : 'error';

    logger.log({
        level: level,
        message: err.message,
        url: req.url,
        method: req.method,
        body: req.body
    });
    return new CustomerError(msg, 400);
}


const duplicateKeyErrorHandler = (err, req) => {
    const field = err.errors[0].path; // Lấy ra tên trường gây ra lỗi
    const value = err.errors[0].value; // Lấy ra giá trị của trường gây ra lỗi
    const msg = `There is already a record with ${field} = ${value}. Please use another value!`;
    const level = err.statusCode >= 400 && err.statusCode < 500 ? 'info' : 'error';
    logger.log({
        level: level,
        message: err.message,
        url: req.url,
        method: req.method,
        body: req.body
    });
    return new CustomerError(msg, 400);
}

const foreignKeyConstraintErrorHandler = (err) => {
    const field = err.fields.join(', '); // Lấy ra các trường gây ra lỗi
    const msg = `Foreign key constraint error on field(s): ${field}`;
    const level = err.statusCode >= 400 && err.statusCode < 500 ? 'info' : 'error';

    logger.log({
        level: level,
        message: err.message,
        url: req.url,
        method: req.method,
        body: req.body
    });
    return new CustomerError(msg, 400);
}

const validationErrorHandler = (err) => {
    const errors = err.errors.map(error => error.message);
    const errorMessages = errors.join('. ');
    const msg = `Invalid input data: ${errorMessages}`;

    return new CustomerError(msg, 400);
}

const errorController = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || "error";

    if (process.env.NODE_ENV == "development") {
        devErrors(res, error);
    } else if (process.env.NODE_ENV === 'production') {
        if (error.name === "TypeError") error = castErrorHandler(error);
        if (error.name === "SequelizeUniqueConstraintError") error = duplicateKeyErrorHandler(error, req);
        if (error.name === "SequelizeForeignKeyConstraintError") error = foreignKeyConstraintErrorHandler(error, req);
        if (error.name === "ValidationError") error = validationErrorHandler(error, req);

        prodErrors(req, res, error);
    }
}

export default errorController;