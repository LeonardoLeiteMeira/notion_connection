import { DataSource, EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { User } from "../../types/models/userEntity"
import { Config } from "../../config.ts";
import { inject, injectable } from "inversify";
import { TYPES } from "../../config.ts/dependencyInjection/types";

@injectable()
class AppDataSource extends DataSource{

  private static appDataSource:AppDataSource|null = null;

  constructor() {
    console.log("\nInit AppDataSource");
    if(AppDataSource.appDataSource === null){
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
  }

  public static getInstance(){
    if(AppDataSource.appDataSource === null){
      AppDataSource.appDataSource = new AppDataSource();
    }
    return AppDataSource.appDataSource;
  }
}


(async ()=>{
  const appDataSource = AppDataSource.getInstance();
  await appDataSource.initialize();
})();

export { AppDataSource };
