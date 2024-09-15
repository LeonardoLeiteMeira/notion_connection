import express, { Response, Application } from 'express';
import { Server } from 'http';
import logMiddleware from './middlewares/logMiddleware';
import authMiddleware from './middlewares/authMiddleware';
import CustomRequest from './types/customRequest';
import userRouter from './modules/userModule';
import authRouter from './modules/authModule';
import { initializeDB } from './repository/database';
import { Config } from './config.ts';
import "reflect-metadata";
import DependencyManager from './config.ts/dependencyInjection';


var server:Server;

const initializeServer = async ()=>{
    initializeDB();
    console.log("Ready to use! ✅\n");
}

const shutDownServer = async () => {
    console.log("\nShutting server down...");
    server.close(()=>{
        console.log("Finished!👋\n");
    });
}

const config = DependencyManager.container.get<Config>(DependencyManager.types.Config);
const app = express();

app.use(express.json());
app.use(authMiddleware);
app.use(logMiddleware);

app.use('/auth',authRouter);
app.use('/user',userRouter);

app.get("/health", (req:CustomRequest, res:Response)=>{
    return res.status(200).send({"data":"Heath Check - OK!"});
});

server = app.listen(config.appPort, async ()=>{
    console.log(`Server is running on port ${config.appPort}`);
    await initializeServer();
});

process.on('SIGINT',shutDownServer);
process.on('SIGTERM',shutDownServer);