import { BasicResponse } from './types/index';
import { IHelloController } from './interfaces';
import { LogSuccess } from '../utils/loggers';

export class HelloController implements IHelloController {

    public async getMessage(name?: string | undefined): Promise<BasicResponse> {
        LogSuccess('[/api/hello] Get request');

        return{
            message: `Hello ${name || "world"}`
        }
    }
    
}