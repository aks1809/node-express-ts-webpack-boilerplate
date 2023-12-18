import { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { environment } from "@config/environment";
import logger from "@config/logger";

const allowedDomains = [environment.ALLOWED_DOMAIN];

export default (app: Application) => {
    app.use("*", (req: Request, res: Response, next: NextFunction) => {
        console.log(`Quering route ${req.method} -- ${req.originalUrl}`);
        logger.info(`Quering route ${req.method} -- ${req.originalUrl}`);
        next();
    });
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use(
        cors({
            credentials: true,
            exposedHeaders: ["Authorization"],
            origin: (origin, callback) => {
                if (!origin) return callback(null, true);
                if (allowedDomains.indexOf(origin) === -1) {
                    const msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            },
        })
    );
};
