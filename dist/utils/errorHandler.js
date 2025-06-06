"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
exports.handleError = handleError;
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.name = 'AppError';
    }
}
exports.AppError = AppError;
function handleError(error) {
    if (error instanceof AppError) {
        console.error(`AppError: ${error.message} (Status: ${error.statusCode || 'N/A'})`);
    }
    else if (error instanceof Error) {
        console.error(`General Error: ${error.message}`);
    }
    else {
        console.error("An unknown error occurred:", error);
    }
}
