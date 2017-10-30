import { Injectable } from "@angular/core";

@Injectable()
export class EndpointService {
    endpoint:string = 'http://localhost:3000';

    get login() {
        return this.endpoint + '/login';
    }
}