//-----------------------------custom error handler
const errorHandler = () => {
    
    if(res.status(400)) {
        res.json({ error: "Resource Not Found" });
    }
}


module.exports = errorHandler;