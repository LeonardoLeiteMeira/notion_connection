import { NextFunction, Response } from "express";
import CustomRequest from "../../types/customRequest";

const logMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  console.log(`\nMétodo: ${req.method}, URL: ${req.url}\n`);
  next(); 
};

export default logMiddleware;