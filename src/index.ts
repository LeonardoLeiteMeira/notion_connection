import express, {Request, Response, NextFunction, RequestHandler} from 'express';
import logMiddleware from './middlewares/logMiddleware';
import authMiddleware from './middlewares/authMiddleware';
import CustomRequest from './types/customRequest';
import userRouter from './modules/userModule';
import authRouter from './modules/authModule';

const port = 3000;
const app = express();

app.use(express.json());
app.use(authMiddleware);
app.use(logMiddleware);

app.use('/auth',authRouter);
app.use('/user',userRouter);


app.get("/health", (req:CustomRequest, res:Response)=>{
    return res.status(200).send({"data":"Heath Check - OK!"});
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})