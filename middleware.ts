import { jwtVerify } from 'jose';
import { Request, Response, NextFunction } from 'express';

interface JWT_PAYLOAD {
    email: string;
    userId: string;
}

interface AuthRequest extends Request {
    user?: JWT_PAYLOAD;
}

export const authmiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        console.log("=== AUTH DEBUG ===");
        console.log("Request URL:", req.originalUrl);
        console.log("Method:", req.method);
        
        // ✅ READ FROM AUTHORIZATION HEADER
        const authHeader = req.headers.authorization;
        const token = authHeader?.startsWith('Bearer ') 
            ? authHeader.split(' ')[1] 
            : null;
        
        console.log("Auth Header:", authHeader ? "FOUND" : "MISSING");
        console.log("Token extracted:", token ? "FOUND" : "MISSING");
        
        // Fallback to cookie (optional)
        const cookieToken = req.cookies?.auth_token;
        console.log("Cookie token:", cookieToken ? "FOUND" : "MISSING");
        
        // Use header token or cookie token
        const finalToken = token || cookieToken;
        
        if (!finalToken) {
            return res.status(401).json({
                message: "Token unavailable",
                debug: {
                    hasAuthHeader: !!authHeader,
                    hasCookie: !!cookieToken
                }
            });
        }
        
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET missing in production!");
            return res.status(500).json({ message: "Server config error" });
        }

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        
        const { payload } = await jwtVerify(finalToken, secret, {
            algorithms: ['HS256']
        });

        const decoded: JWT_PAYLOAD = {
            email: payload.email as string,
            userId: payload.userId as string
        };

        console.log("Decoded from Middleware:", decoded);

        req.user = decoded;
        return next();
        
    } catch (error) {
        console.error("Auth error:", error);
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
};