import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/services';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  
  constructor(private loginService:LoginService) { }
  
  ngOnInit(): void {
    this.loginService.login('codart', '123456');
  }
}
