import { Response } from 'express';
import CustomRequest from '../../types/customRequest';
import { UserRepository } from '../../repository/userRepository';
import { User } from '../../types/models/userEntity';
import { TYPES } from '../../config.ts/dependencyInjection/types';
import { inject } from 'inversify';
import { controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";


@controller('/user')
export class UserController{
    constructor(@inject(TYPES.UserRepository) private userRepository:UserRepository){
        console.log("\nCarregando o User controller")
    }

    @httpPost('/')
    public async create(@request() request:CustomRequest, @response() response:Response){
        const userData = request.body as User;
        console.log("Received user: ", userData);
        await this.userRepository.saveUser(userData);
        return response.status(201).send();
    }

    @httpGet('/')
    public async getAll(@request() request:CustomRequest, @response() response:Response){
        const users = await this.userRepository.getAll();
        return response.status(200).send(users);
    }

    @httpGet('/:id')
    public async getById(@request() request:CustomRequest, @response() response:Response){
        const {id} = request.params;
        const user = await this.userRepository.getUserById(parseInt(id));
        return response.status(200).send(user);
    }

    @httpGet('/root')
    public async root(@request() request:CustomRequest, @response() response:Response){
        return response.status(200).send({"Data":"This is root of User Module"});
    }
}
