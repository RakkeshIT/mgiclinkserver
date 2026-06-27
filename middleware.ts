import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';

interface JWT_PAYLOAD {
    email: String
    userId: String,
}

interface AuthRequest extends Request {
    user?: JWT_PAYLOAD
}
export const authmiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.auth_token
        if (!token) {
            console.log("Token Unavialable");
            return res.status(401).json({
                message: "Token unavailable",
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as JWT_PAYLOAD;

        console.log("Decoded from Middleware: ", decoded);


        req.user = decoded

        next()
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
}