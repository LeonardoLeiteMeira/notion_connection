import { NextFunction, Response } from "express";
import CustomRequest from "../../types/customRequest";

const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  console.log('\nMiddleware de autenticação\n');
  
  const isAuthenticated = true;

  if (isAuthenticated) {
    next(); 
  } else {
    res.status(401).send('Não autenticado');
  }
};

export default authMiddleware;
