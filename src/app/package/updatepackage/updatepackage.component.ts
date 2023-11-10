import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { Package } from 'src/app/model/package/package.model';
import { PackageService } from 'src/app/shared/package/package.service';
import { ServiceService } from 'src/app/shared/service/service.service';

@Component({
  selector: 'app-updatepackage',
  templateUrl: './updatepackage.component.html',
  styleUrls: ['./updatepackage.component.css']
})
export class UpdatepackageComponent implements OnInit {
  @Input() package?: Package

  selectedFiles?: FileList;
  // currentFileUpload?: Notes;
  percentage = 0;

  currentcPackage : Package = {
    serviceName: '',
    packageName: '',
    description: '',
    price: '',
    status:"Enable",
  }

  constructor(private service : ServiceService,private packageservice : PackageService, private router : Router,private spinner : NgxSpinnerService,private toastr : ToastrService,private activatedroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getallcat()
    this.singledata()
  }

  servicedata: any
  getallcat() {
    {
      this.spinner.show()
      this.service.getAll().snapshotChanges().pipe(
        map(changes => {
          return changes.map((c: any) => {
            return ({ id: c.payload.doc.id, ...c.payload.doc.data() })
          })
        })
      ).subscribe((resultdata: any) => {
        this.spinner.hide()
        this.servicedata = resultdata
      })
    }
  }


  async singledata() {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 3000);
    let snapshot = await this.packageservice.getSingle(this.activatedroute.snapshot.paramMap.get("id")).pipe()
    snapshot.forEach(doc => {
      // console.log("data", doc.data())
      let data = doc.data()
      this.currentcPackage.serviceName = data?.serviceName
      this.currentcPackage.packageName = data?.packageName
      this.currentcPackage.description = data?.description
      this.currentcPackage.price = data?.price
      this.currentcPackage.status = data?.status
    })
    // console.log("snapshot", snapshot.data())
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  submit(){
    this.spinner.show()
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      
      if (file) {
        
        console.log("New File Uploading")
        const data = {
          serviceName : this.currentcPackage.serviceName,
          packageName : this.currentcPackage.packageName,
          description : this.currentcPackage.description,
          price : this.currentcPackage.price,
          status : this.currentcPackage.status,
        }

        this.packageservice.updatepushFileToStorage((this.activatedroute.snapshot.paramMap.get("id")),file,data).subscribe(
          result => {
            if(result==100)
            {
              this.spinner.hide()
              this.toastr.success("Record Updated")
              this.router.navigateByUrl("/layout/managePackage")
              setTimeout(() => {
                window.location.reload()
              }, 3000);
            }
          },
          error => {
            console.log("Error here",error);
            this.spinner.hide()
          }
        );
      }
    }
    else{
      console.log("Keep previous File Uploading")
      const data = {
          serviceName : this.currentcPackage.serviceName,
        packageName : this.currentcPackage.packageName,
          description : this.currentcPackage.description,
          price : this.currentcPackage.price,
          status : this.currentcPackage.status,
      }
  
      this.packageservice.update((this.activatedroute.snapshot.paramMap.get("id")),data).then(()=>{
        this.spinner.hide()
        this.toastr.success("Record Updated")
        this.router.navigateByUrl("/layout/managePackage")
        setTimeout(() => {
          window.location.reload()
        }, 3000);
      })
    }
  }
}
