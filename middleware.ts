import { jwtVerify } from 'jose';
import { Request, Response, NextFunction } from 'express';

interface JWT_PAYLOAD {
    email: string
    userId: string,
}

interface AuthRequest extends Request {
    user?: JWT_PAYLOAD
}
export const authmiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies?.auth_token

        if (!token) {
            return res.status(401).json({
                message: "Token unavailable",
            });
        }
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET missing in production!");
            return res.status(500).json({ message: "Server config error" });
        }

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        
        const { payload } = await jwtVerify(token, secret, {
            algorithms: ['HS256'] // specify your algorithm
        });

        const decoded: JWT_PAYLOAD = {
            email: payload.email as string,
            userId: payload.userId as string
        };


        console.log("Decoded from Middleware: ", decoded);


        req.user = decoded

        return next()
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
}