import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  login:boolean=false;
  constructor(private auth:AuthService, private router:Router, private userService:UserService){}
  ngOnInit(): void {
    this.checkLogin()
  }
  
  checkLogin(){
    if(this.auth.getToken()=='true') {
      this.login=true
    }

    else{
      this.login=false
    }
  }

  logout(){
    this.userService.logout()

  }
}
