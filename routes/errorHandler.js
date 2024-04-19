//-----------------------------custom error handler
const errorHandler = (err, req, res, next) => {
    if (res.statusCode === 400) {
        res.status(400).json({ error: "Resource Not Found" });
    } else {
        next(); // Call next() to pass the error to the next error-handling middleware
    }
};

module.exports = errorHandler;
