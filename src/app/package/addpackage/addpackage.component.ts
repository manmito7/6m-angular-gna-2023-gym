import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { Package } from 'src/app/model/package/package.model';
import { PackageService } from 'src/app/shared/package/package.service';
import { ServiceService } from 'src/app/shared/service/service.service';

@Component({
  selector: 'app-addpackage',
  templateUrl: './addpackage.component.html',
  styleUrls: ['./addpackage.component.css']
})
export class AddpackageComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUpload?: Package;
  percentage = 0;

  form = {
    serviceName: '',
    packageName: '',
    description: '',
    price: '',
    image: '',
    status:'Enable'
  }

  constructor(private service: ServiceService, private packageService: PackageService, private toastr: ToastrService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
    this.getallcat()
  }

  servicedata: any
  getallcat() {
    {
      this.spinner.show()
      this.service.getAllEnable().snapshotChanges().pipe(
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

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  submit() {
    this.spinner.show()
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new Package(file, this.form.serviceName, this.form.packageName,"Enable",this.form.description,this.form.price);
        this.packageService.pushFileToStorage(this.currentFileUpload).subscribe(
          result => {
            console.log(result)
            this.spinner.hide()
            if (result == 100) {
              this.toastr.success("Package Inserted")
              this.router.navigateByUrl("/layout/managePackage")
              setTimeout(() => {
                window.location.reload()
              }, 3000);
            }
          },
          error => {
            console.log(error);
            this.spinner.hide()
          }
        );
      }
    }
  }

}
