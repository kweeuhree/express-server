function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    const start = Date.now();


    res.on('finish', () => {

        const duration = Date.now() - start;

        console.log(`[${new Date().toISOString()}] Response Status: ${res.statusCode} (${duration} ms)`);
    });

    next();
}

module.exports = logger;