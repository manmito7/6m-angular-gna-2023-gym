import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from '../shared/package/package.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserauthService } from '../shared/userauth/userauth.service';
import { Package } from '../model/package/package.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  serviceName: any
  constructor(private activatedroute: ActivatedRoute, private service: PackageService, private spinner: NgxSpinnerService, private userauth: UserauthService, private router: Router) { }

  ngOnInit(): void {
    this.serviceName = this.activatedroute.snapshot.paramMap.get("service")
    this.getData()
    this.getuserdata()
  }

  packages?: Package[]
  getData() {
    this.spinner.show()
    this.service.getPackageByService(this.serviceName).snapshotChanges().pipe(
      map(changes => {
        return changes.map((c: any) => {
          return ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        })
      })
    ).subscribe((resultdata: any) => {
      this.spinner.hide()
      this.packages = resultdata
    })
  }

  isloggedIn: any = false
  userdata: any
  getuserdata() {
    this.userauth.getUserByUid(localStorage.getItem('uid')).snapshotChanges().pipe(
      map(changes => {
        return changes.map((c: any) => {
          return ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        })
      })
    ).subscribe((resultdata: any) => {
      this.userdata = resultdata[0]
      this.isloggedIn = localStorage.getItem("isauthenticated")
    })
  }

}
