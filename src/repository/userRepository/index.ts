import { Repository } from "typeorm";
import { User } from "../../types/models/userEntity";
import { appDataSource } from "../database";

export class UserRepository{
    private database:Repository<User>;

    constructor(){
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