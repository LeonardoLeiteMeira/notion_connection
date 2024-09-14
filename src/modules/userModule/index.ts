import { Router, Response } from 'express';
import CustomRequest from '../../types/customRequest';
import { UserRepository } from '../../repository/userRepository';
import { User } from '../../types/models/userEntity';

const userRepository = new UserRepository();

const userRouter = Router();

userRouter.post('/',async (req:CustomRequest, res:Response)=>{
    const userData = req.body as User;
    console.log("Received user: ", userData);
    await userRepository.saveUser(userData);
    return res.status(201).send();
});

userRouter.get('/',async (req:CustomRequest, res:Response)=>{
    const users = await userRepository.getAll();
    return res.status(200).send(users);
})

userRouter.get('/:id', async (req:CustomRequest, res:Response)=>{
    const {id} = req.params;
    const user = await userRepository.getUserById(parseInt(id));
    return res.status(200).send(user);
});

userRouter.get('/root',(req:CustomRequest, resp:Response)=>{
    return resp.status(200).send({"Data":"This is root of User Module"});
});


export default userRouter;