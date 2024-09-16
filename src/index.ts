import "reflect-metadata";
import express from 'express';
import logMiddleware from './middlewares/logMiddleware';
import authMiddleware from './middlewares/authMiddleware';
import { Config } from './config.ts';
import { DependencyContainer } from "./config.ts/dependencyInjection/inversify.config";
import { InversifyExpressServer } from "inversify-express-utils";

console.log("\nentrou na main")
const config = new Config();
const initializeServer = async ()=>{
    console.log("\nReady to use! ✅\n");
}

const shutDownServer = async () => {
    console.log("\nShutting server down...");
    console.log("\nFinished!👋\n");
    process.exit(0);
}

(async ()=>{
    try{
        let server = new InversifyExpressServer(DependencyContainer);

        server.setConfig(async (app) => {
            app.use(express.json());
            app.use(authMiddleware);
            app.use(logMiddleware);

            await initializeServer();
        });

        let app = server.build();

        app.listen(config.appPort, async ()=>{
            console.log(`\nServer is running on port ${config.appPort}`);
        });

        process.on('SIGINT',shutDownServer);
        process.on('SIGTERM',shutDownServer);

    }catch(err){
        console.error(err);
        process.exit(1);
    }   
})();
