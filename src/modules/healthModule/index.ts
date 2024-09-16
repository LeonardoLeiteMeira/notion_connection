import { controller, httpGet, request, response } from "inversify-express-utils";
import CustomRequest from "../../types/customRequest";
import { Response } from 'express';

@controller("/health")
export class HealthController{
    @httpGet('')
    public helthCheck(@request() request:CustomRequest, @response() response:Response){
        return response.status(200).send({"data":"Heath Check - OK!"});
    }

}