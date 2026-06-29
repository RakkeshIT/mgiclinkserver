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
        console.log("=== AUTH DEBUG ===");
        console.log("Request URL:", req.originalUrl);
        console.log("Method:", req.method);
        console.log("Headers:", JSON.stringify(req.headers, null, 2));
        console.log("Raw Cookie Header:", req.headers.cookie);
        console.log("Parsed Cookies:", req.cookies);
        console.log("JWT_SECRET exists:", !!process.env.JWT_SECRET);
        
        const token = req.cookies?.auth_token;
        console.log("Token from cookies:", token ? "FOUND" : "MISSING");
        
        if (!token) {
            return res.status(401).json({
                message: "Token unavailable",
                debug: {
                    hasCookieHeader: !!req.headers.cookie,
                    hasParsedCookies: !!req.cookies,
                    cookieNames: req.cookies ? Object.keys(req.cookies) : []
                }
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