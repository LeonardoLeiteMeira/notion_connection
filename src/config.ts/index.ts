import * as dotenv from 'dotenv';
import { injectable } from 'inversify';
dotenv.config();

@injectable()
export class Config{
    public dbHost:string;
    public dbPort:number;
    public dbUsername:string|undefined;
    public dbPassword:string|undefined;
    public database:string|undefined;

    public appPort:number;

    constructor (){
        this.dbHost = process.env.DB_HOST || "localhost";
        this.dbPort = parseInt(process.env.DB_PORT || "5432");
        this.dbUsername = process.env.DB_USER;
        this.dbPassword = process.env.DB_PASSWORD;
        this.database = process.env.DB;
        this.appPort = parseInt(process.env.PORT || "3000");
    }
}