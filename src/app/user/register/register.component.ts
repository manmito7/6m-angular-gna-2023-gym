import { Component } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  userData=new User()
  constructor(private user:UserService){}


submit(){
  this.user.register(this.userData)
}
}
