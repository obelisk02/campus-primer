import { BasicResponse } from './types/index';
import { IHelloController } from './interfaces';
import { LogSuccess } from '../utils/loggers';

export class HelloController implements IHelloController {

    public async getMessage(name?: string | undefined): Promise<BasicResponse> {
        LogSuccess('[/api/Goodbye] Get request');
        let date: Date = new Date();
        return{
            message: `Goodbye ${name || "anon"}`,
            Date: `${date}`
        }
    }
    
}