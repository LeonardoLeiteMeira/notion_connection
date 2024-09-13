import { NextFunction, Response } from "express";
import CustomRequest from "../../types/customRequest";

const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  console.log('Middleware de autenticação');
  
  const isAuthenticated = true;

  if (isAuthenticated) {
    next(); 
  } else {
    res.status(401).send('Não autenticado');
  }
};

export default authMiddleware;
