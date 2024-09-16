import "reflect-metadata";
import express, { Response } from 'express';
import logMiddleware from './middlewares/logMiddleware';
import authMiddleware from './middlewares/authMiddleware';
import CustomRequest from './types/customRequest';
import { Config } from './config.ts';
import { DependencyContainer } from "./config.ts/dependencyInjection/inversify.config";
import { InversifyExpressServer } from "inversify-express-utils";

const config = new Config();
const initializeServer = async ()=>{
    console.log("\nReady to use! ✅\n");
}

const shutDownServer = async () => {
    console.log("\nShutting server down...");
    console.log("\nFinished!👋\n");
    process.exit(0);
}

let server = new InversifyExpressServer(DependencyContainer);

server.setConfig(async (app) => {
    await initializeServer();
});

let app = server.build();
app.use(express.json());
app.use(authMiddleware);
app.use(logMiddleware);

app.get("/health", (req:CustomRequest, res:Response)=>{
    return res.status(200).send({"data":"Heath Check - OK!"});
});

app.listen(config.appPort, async ()=>{
    console.log(`\nServer is running on port ${config.appPort}`);
});

process.on('SIGINT',shutDownServer);
process.on('SIGTERM',shutDownServer);