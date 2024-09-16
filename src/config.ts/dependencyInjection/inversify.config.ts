import { Container } from "inversify";
import { Config } from "..";
import { TYPES } from "./types";
import { UserRepository } from "../../repository/userRepository";
import { AppDataSource } from "../../repository/database";
import '../../modules/authModule/index';
import '../../modules/userModule/index';

const DependencyContainer = new Container({ skipBaseClassChecks: true });

DependencyContainer.bind<Config>(TYPES.Config).to(Config).inSingletonScope();
DependencyContainer.bind<UserRepository>(TYPES.UserRepository).to(UserRepository);

DependencyContainer.bind<AppDataSource>(TYPES.AppDataSource).to(AppDataSource).inSingletonScope();

export { DependencyContainer }