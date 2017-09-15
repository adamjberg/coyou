import * as express from 'express';
import * as jwt from 'jsonwebtoken';

export function TokenMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (req.cookies.token) {
        const decoded = jwt.decode(req.cookies.token) as { user: string };
        if (decoded) {
            req.user = decoded.user;
        }
    }
}