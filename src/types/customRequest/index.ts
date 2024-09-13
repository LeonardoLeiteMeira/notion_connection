import { Request } from 'express';

interface CustomRequest extends Request {
    customData?: string;
}

export default CustomRequest;