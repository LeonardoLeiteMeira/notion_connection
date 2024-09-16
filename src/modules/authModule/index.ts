import { Response } from "express";
import CustomRequest from "../../types/customRequest";
import { controller, httpGet, request, response } from "inversify-express-utils";

@controller('/auth')
export class AuthController{
    public constructor(){}

    @httpGet('/')
    public index(@request() request:CustomRequest, @response() response:Response){
        return response.status(200).send({"Data":"This is root of Auth Module - Modified"});
    }
}