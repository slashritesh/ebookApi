import { StatusCodes } from "http-status-codes";

declare global {
    interface Error {
        statusCode? : number;
    }
}

export class notFoundError extends Error{
    constructor(message : string){
        super(message);
        this.name = 'NotFoundMiddleware';
        this.statusCode = StatusCodes.NOT_FOUND
    };
}

export class BadRequestError  extends Error {
    constructor(message : string){
        super(message);
        this.name = 'BadRequestError';
        this.statusCode = StatusCodes.BAD_REQUEST
    }   
}

export class UnauthenticationError extends Error {
    constructor(message : string){
        super(message);
        this.name = 'UnauthenticationError';
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

export class UnauthorizationError extends Error {
    constructor(message : string){
        super(message);
        this.name = 'UnauthorizationError';
        this.statusCode = StatusCodes.FORBIDDEN;
    }
}