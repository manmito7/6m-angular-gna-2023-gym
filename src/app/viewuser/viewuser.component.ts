import { Component, OnInit } from '@angular/core';
import { User } from '../model/user/user.model';
import { UserauthService } from '../shared/userauth/userauth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  packageData?: User[]

  constructor(private packageservice: UserauthService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.spinner.show()
    this.packageservice.getAllUser().snapshotChanges().pipe(
      map(changes => {
        return changes.map((c: any) => {
          return ({ id: c.payload.doc.id, ...c.payload.doc.data() })as User;
        }).filter((employee: User) => employee.userType === 'Customer');
        })
    ).subscribe((resultdata: any) => {
      this.spinner.hide()
      this.packageData = resultdata
    })
  }

}
