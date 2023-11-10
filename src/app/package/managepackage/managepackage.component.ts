import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs';
import { Package } from 'src/app/model/package/package.model';
import { PackageService } from 'src/app/shared/package/package.service';

@Component({
  selector: 'app-managepackage',
  templateUrl: './managepackage.component.html',
  styleUrls: ['./managepackage.component.css']
})
export class ManagepackageComponent implements OnInit {
  packageData?: Package[]

  constructor(private packageservice: PackageService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.spinner.show()
    this.packageservice.getAll().snapshotChanges().pipe(
      map(changes => {
        return changes.map((c: any) => {
          return ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        })
      })
    ).subscribe((resultdata: any) => {
      this.spinner.hide()
      this.packageData = resultdata
    })
  }
  EnableDisable(id:any,status:any){
    this.packageservice.packagestatus(id,status).then((res:any)=>{
      this.getData();
    }).catch((err)=>{
      console.log(err)
    })

  }
}
