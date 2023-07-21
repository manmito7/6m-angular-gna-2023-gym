import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor() { }
  setData(id:any){
  sessionStorage.setItem("isLogin",'true')
  sessionStorage.setItem('id',id)
}


  getToken(){
    return sessionStorage.getItem("isLogin")
  }



  remove(){

  }


}
