import { Component } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  userData=new User()


submit(){
  console.log(this.userData);
}
}
