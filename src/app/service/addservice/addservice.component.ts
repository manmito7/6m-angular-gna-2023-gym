import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Service } from 'src/app/model/service/service.model';
import { ServiceService } from 'src/app/shared/service/service.service';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUpload?: Service;
  percentage = 0;

  form = {
    serviceName: '',
    fileName: '',
  }

  constructor(private service: ServiceService, private toastr: ToastrService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  submit() {
    // this.spinner.show()
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new Service(file, this.form.serviceName, "Enable");
        this.service.pushFileToStorage(this.currentFileUpload).subscribe(
          result => {
            console.log(result)
            if (result == 100) {
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
  }
}
