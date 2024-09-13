import { NextFunction, Response } from "express";
import CustomRequest from "../../types/customRequest";

const logMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  console.log(`Método: ${req.method}, URL: ${req.url}`);
  next(); 
};

export default logMiddleware;