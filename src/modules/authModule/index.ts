import { Router, Response } from 'express';
import CustomRequest from '../../types/customRequest';


const authRouter = Router();

authRouter.get('/',(req:CustomRequest, resp:Response)=>{
    return resp.status(200).send({"Data":"This is root of Auth Module"});
});


export default authRouter;