import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product/product.model';
import { ProductService } from '../shared/product/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserauthService } from '../shared/userauth/userauth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categoryName: any
  constructor(private activatedroute: ActivatedRoute, private service: ProductService, private spinner: NgxSpinnerService, private userauth: UserauthService, private router: Router) { }

  ngOnInit(): void {
    this.categoryName = this.activatedroute.snapshot.paramMap.get("category")
    this.getData()
    this.getuserdata()
  }

  products?: Product[]
  getData() {
    this.spinner.show()
    this.service.getProductByCategory(this.categoryName).snapshotChanges().pipe(
      map(changes => {
        return changes.map((c: any) => {
          return ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        })
      })
    ).subscribe((resultdata: any) => {
      this.spinner.hide()
      this.products = resultdata
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
