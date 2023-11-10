import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Service } from 'src/app/model/service/service.model';
import { ServiceService } from 'src/app/shared/service/service.service';

@Component({
  selector: 'app-updateservice',
  templateUrl: './updateservice.component.html',
  styleUrls: ['./updateservice.component.css']
})
export class UpdateserviceComponent implements OnInit{
  @Input() categories?: Service

  selectedFiles?: FileList;
  // currentFileUpload?: Notes;
  percentage = 0;

  currentService : Service = {
    serviceName:'',
    status:"Enable",
  }

  constructor(private service : ServiceService,private router : Router,private spinner : NgxSpinnerService,private toastr : ToastrService,private activatedroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.singledata()
  }

  async singledata() {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 3000);
    let snapshot = await this.service.getSingle(this.activatedroute.snapshot.paramMap.get("id")).pipe()
    snapshot.forEach(doc => {
      // console.log("data", doc.data())
      let data = doc.data()
      this.currentService.serviceName = data?.serviceName
      this.currentService.fileName = data?.fileName
      this.currentService.status = data?.status
    })
    // console.log("snapshot", snapshot.data())
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  submit(){
    // this.spinner.show()
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      
      if (file) {
        
        // console.log("New File Uploading")
        const data = {
          serviceName : this.currentService.serviceName,
        }

        this.service.updatepushFileToStorage((this.activatedroute.snapshot.paramMap.get("id")),file,data).subscribe(
          result => {
            if(result==100)
            {
              this.spinner.hide()
              this.toastr.success("Record Inserted")
              this.router.navigateByUrl("/layout/manageservice")
            }
          },
          error => {
            console.log(error);
            this.spinner.hide()
          }
        );
      }
    }
    else{
      // console.log("Keep previous File Uploading")
      const data = {
        serviceName : this.currentService.serviceName,
      }
  
      this.service.update((this.activatedroute.snapshot.paramMap.get("id")),data).then(()=>{
        this.spinner.hide()
        this.toastr.success("Record Updated")
        this.router.navigateByUrl("/layout/manageservice")
      })
    }
}
}
