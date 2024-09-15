import { Container } from "inversify";
import { Config } from "..";
import { TYPES } from "./types";

const dependencyContainer = new Container();

dependencyContainer.bind<Config>(TYPES.Config).to(Config).inSingletonScope()

export { dependencyContainer }