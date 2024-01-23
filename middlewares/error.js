class ErrorHandler extends Error{

    constructor(message,statusCode){
        super(message);
        this.statusCode= statusCode;
    }
}

export const errorMiddleware = (err, req, res, next)=>{

    err.message = err.message || "Internal Server Error";
    err.message = err.message || 500;

    console.log()
    return res.status(404).json({
        success: false,
        message: err.message,
    })
}

export default ErrorHandler;