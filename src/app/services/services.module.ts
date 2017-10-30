import { EndpointService } from './endpoint.service';
import { NgModule } from '@angular/core';
import { LoginService } from 'app/services/login.service';

@NgModule({
    providers: [
        EndpointService,
        LoginService
    ]
})
export class ServicesModule {}

