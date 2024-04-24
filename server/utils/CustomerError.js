class CustomerError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';

        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor); // xác định dòng lỗi xảy ra trong quá trình chạy chương trình
    }
}

export default CustomerError;