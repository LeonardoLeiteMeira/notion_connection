import { DataSource, Repository } from "typeorm";
import { User } from "../../types/models/userEntity";
import { inject, injectable } from "inversify";
import { AppDataSource } from "../database";
import { TYPES } from "../../config.ts/dependencyInjection/types";

@injectable()
export class UserRepository{
    private database:Repository<User>;

    constructor(@inject(TYPES.AppDataSource) appDataSource:AppDataSource){
        this.database = appDataSource.getRepository(User);
    }

    public async saveUser(user:User):Promise<void>{
        await this.database.save(user);
    }

    public async getAll():Promise<Array<User>>{
        return await this.database.find();
    }

    public async getUserById(userId:number):Promise<User|null>{
        return await this.database.findOneBy({
            id:userId
        });
    }
}