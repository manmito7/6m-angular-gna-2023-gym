import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs';
import { Service } from 'src/app/model/service/service.model';
import { ServiceService } from 'src/app/shared/service/service.service';

@Component({
  selector: 'app-manageservice',
  templateUrl: './manageservice.component.html',
  styleUrls: ['./manageservice.component.css']
})
export class ManageserviceComponent implements OnInit {
  services?: Service[]

  constructor(private service: ServiceService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.spinner.show()
    this.service.getAll().snapshotChanges().pipe(
      map(changes => {
        return changes.map((c: any) => {
          return ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        })
      })
    ).subscribe((resultdata: any) => {
      this.spinner.hide()
      this.services = resultdata
    })
  }
  EnableDisable(id:any,status:any){
    this.service.servicestatus(id,status).then((res:any)=>{
      this.getData();
    }).catch((err)=>{
      console.log(err)
    })

  }
}
