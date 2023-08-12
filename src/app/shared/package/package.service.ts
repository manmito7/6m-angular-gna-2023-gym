import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection }  from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import {AddPackage} from 'src/app/models/add-package/add-package.model';
@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private dbPath = '/packages'

  constructor(private db:AngularFirestore, private toastr:ToastrService, private spinner:NgxSpinnerService,
    private router:Router) {}

  add(data:any){
    this.spinner.show()
    this.db.collection(this.dbPath).add({...data})
    .then((res:any)=>{
      this.toastr.success("Package Added")
      this.spinner.hide()
      this.router.navigateByUrl('/admin/manage-package')
     
 
    })
    .catch((err:any)=>{
      this.toastr.error(err,"Error Occured")
      this.spinner.hide()
   
    })
  }

  all():AngularFirestoreCollection<AddPackage>{
    return this.db.collection(this.dbPath)
  }

  // delete(id:any){
  //   this.spinner.show()
  //   this.db.collection(this.dbPath).doc(id).delete()
  //   .then((res)=>{
  //     this.toastr.success("Document Delted","Success")
  //     this.spinner.hide()
  
  //   })
  
  
  // }
  
}


