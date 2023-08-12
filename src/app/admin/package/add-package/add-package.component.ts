import { Component } from '@angular/core';
import { AddPackage } from 'src/app/models/add-package/add-package.model';
import { PackageService } from 'src/app/shared/package/package.service';


@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent {
  
  package =new AddPackage()
  constructor(private packService:PackageService){

  }
 
  
  submit(){
  this.package.createdAt=Date.now()
  this.package.status=true
  this.packService.add(this.package)
  }

}
