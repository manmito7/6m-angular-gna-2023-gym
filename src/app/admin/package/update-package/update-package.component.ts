import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddPackage } from 'src/app/models/add-package/add-package.model';
import { PackageService } from 'src/app/shared/package/package.service';

@Component({
  selector: 'app-update-package',
  templateUrl: './update-package.component.html',
  styleUrls: ['./update-package.component.css']
})
export class UpdatePackageComponent implements OnInit{
  id:any
  package:any=new AddPackage()
  constructor(private packageService:PackageService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    this.getSinglePackage()
  }

  getSinglePackage(){
    this.packageService.single(this.id).subscribe((res)=>{
      this.package=res
    })
  }
 
  submit(){
    this.packageService.update(this.id, this.package)
  }
}
