import { EndpointService } from './endpoint.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
    constructor(private endpoint:EndpointService, private http: HttpClient) {}

    login(username: string, password: string) {
        this.http.post(this.endpoint.login, {username, password}).subscribe(result=>{
            console.log(result);
        });
    }
}