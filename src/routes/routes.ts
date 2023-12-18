import logger from "@config/logger";
import { Router, Request, Response } from "express";

const routes : Router = Router();

routes.all("*", (req: Request, res: Response) => {
  console.log(req.originalUrl);
  logger.error(req.originalUrl);
  res.send("Route Not Found!");
});

export default routes;
