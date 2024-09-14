import * as dotenv from 'dotenv';
dotenv.config();

export class Config{
    private static instance:Config|undefined;

    public dbHost:string = process.env.DB_HOST || "localhost";
    public dbPort:number = parseInt(process.env.DB_PORT || "5432");
    public dbUsername:string|undefined = process.env.DB_USER;
    public dbPassword:string|undefined = process.env.DB_PASSWORD;
    public database:string|undefined = process.env.DB;

    public appPort:number = parseInt(process.env.PORT || "3000");

    private constructor (){}

    static getInstance():Config{
        if(this.instance===undefined){
            this.instance = new Config();
        }
        return this.instance;
    }
}