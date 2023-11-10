import { Component,OnInit } from '@angular/core';
import { UserauthService } from '../shared/userauth/userauth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    contact: '',
    address: '',
    status: '',
  }

  constructor(private authservice: UserauthService, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  submit() {
    this.authservice.SignUp(this.form)
  }
}
