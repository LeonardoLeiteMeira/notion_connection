import { Router, Response } from 'express';
import CustomRequest from '../../types/customRequest';


const userRouter = Router();

userRouter.get('/root',(req:CustomRequest, resp:Response)=>{
    return resp.status(200).send({"Data":"This is root of User Module"});
});


export default userRouter;