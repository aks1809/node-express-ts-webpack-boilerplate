import express from "express";

export default (app: express.Application) => {
  app.use("*", (req, res, next) => {
    console.log(`Quering route ${req.method} -- ${req.originalUrl}`);
    next();
  });
};
