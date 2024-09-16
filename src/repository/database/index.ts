import { DataSource, EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { User } from "../../types/models/userEntity"
import { Config } from "../../config.ts";
import { inject, injectable } from "inversify";
import { TYPES } from "../../config.ts/dependencyInjection/types";

@injectable()
export class AppDataSource extends DataSource{

  private static isLoaded:boolean = false;

  constructor() {
    console.log("\nInit AppDataSource");
    const config = new Config();
    super({
        type: "postgres",
        host: config.dbHost,
        port: config.dbPort,
        username: config.dbUsername,
        password: config.dbPassword,
        database: config.database,
        entities: [User],
        synchronize: true,
        logging: true,
      });
  }


  public async loadRepository<Entity extends ObjectLiteral>(target: EntityTarget<Entity>): Promise<Repository<Entity>>{
    if(!AppDataSource.isLoaded){
      await super.initialize();
      AppDataSource.isLoaded = true;
    }
    return super.getRepository(target);
  }
}
