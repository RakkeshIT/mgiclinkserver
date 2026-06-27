import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';

interface JWT_PAYLOAD {
    email: string
    userId: string,
}

interface AuthRequest extends Request {
    user?: JWT_PAYLOAD
}
export const authmiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies?.auth_token
        if (!token) {
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

        return next()
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
}