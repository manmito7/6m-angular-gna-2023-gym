import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AddPackage } from 'src/app/models/add-package/add-package.model';
import { PackageService } from 'src/app/shared/package/package.service';

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
  // delete(id:any){
  //   swal.fire

  // }

}
