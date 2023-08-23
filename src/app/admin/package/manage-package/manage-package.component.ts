import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AddPackage } from 'src/app/models/add-package/add-package.model';
import { PackageService } from 'src/app/shared/package/package.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-manage-package',
  templateUrl: './manage-package.component.html',
  styleUrls: ['./manage-package.component.css']
})
export class ManagePackageComponent implements OnInit{
  packages:AddPackage[]= []
  constructor(private Package:PackageService){}
  
  ngOnInit(): void {
    this.getAllPackages()    
}

  getAllPackages(){
    this.Package.all().snapshotChanges()
    .pipe(
      map(changes=> changes.map(c => ({id:c.payload.doc.id,...c.payload.doc.data()})))
    )

    .subscribe((res)=>{
      this.packages=res

    })
  }
  delete(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Package.delete(id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    
    
  }

}
