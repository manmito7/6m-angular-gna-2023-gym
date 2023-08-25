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
  private packageRef : AngularFirestoreCollection<AddPackage>

  constructor(private db:AngularFirestore, private toastr:ToastrService, 
    private spinner:NgxSpinnerService, private router:Router) {
      this.packageRef = db.collection(this.dbPath)
    }

  add(data:any){
    this.spinner.show()
    this.packageRef.add({...data})
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
    return this.db.collection(this.dbPath, ref => ref.where("status","==", true))
  }

  single(id:any){
    return this.packageRef.doc(id).valueChanges()
  }

  update(id:any, data:any){
    this.spinner.show()
    this.packageRef.doc(id).update(data)
    .then((res)=>{
      this.toastr.success("Data Updated","Success")
      this.router.navigateByUrl('/admin/manage-package')
      this.spinner.hide()
    })
    .catch((err)=>{
      this.toastr.error(err,"Try Again")
      this.spinner.hide()
    })
  }


  delete(id:any){
    this.spinner.show()
    this.packageRef.doc(id).delete()
    .then((res)=>{
      this.toastr.success("Document Deleted","Success")
      this.spinner.hide()
    })
    .catch((err)=>{
      this.toastr.error(err,"Try Again")
      this.spinner.hide()

    })
  }
  
}


