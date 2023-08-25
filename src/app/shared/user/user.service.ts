import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: AngularFireAuth,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private authService:AuthService,
    private router:Router) { }

  register(data: any) {
    this.spinner.show()
    this.auth.createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        this.toastr.success("Account created", "Success")
        this.spinner.hide()

      })

      .catch((err) => {
        this.toastr.error(err, "Try Again")
        this.spinner.hide()
        this.router.navigateByUrl('/login')
      })

  }

  login(data: any) {
    this.spinner.show()
    this.auth.signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        this.toastr.success("Login Successfull", "Success")
        this.spinner.hide()
        this.router.navigateByUrl('/user/home')
        this.authService.setData(data.email)

      })
      .catch((err) => {
        this.toastr.error(err, "Try Again")
        this.spinner.hide()
      })

  }

  logout() {
    this.auth.signOut()
    .then((res)=>{
      this.authService.remove()
      this.router.navigateByUrl('/login')
      this.toastr.success("Logged Out", "Success")
      this.spinner.hide()

    })

    .catch((err)=>{
      this.toastr.error(err, "Try Again")
      this.spinner.hide()
    })

  }
}
