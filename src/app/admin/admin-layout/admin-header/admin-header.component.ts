import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  constructor(private auth:AuthService, private router:Router){}
  logout(){
    this.auth.remove()
    this.router.navigateByUrl('/login')

  }


}
