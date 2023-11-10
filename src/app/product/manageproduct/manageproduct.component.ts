import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs';
import { Product } from 'src/app/model/product/product.model';
import { ProductService } from 'src/app/shared/product/product.service';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {
  productData?: Product[]

  constructor(private productservice: ProductService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.spinner.show()
    this.productservice.getAll().snapshotChanges().pipe(
      map(changes => {
        return changes.map((c: any) => {
          return ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        })
      })
    ).subscribe((resultdata: any) => {
      this.spinner.hide()
      this.productData = resultdata
    })
  }
  EnableDisable(id:any,status:any){
    this.productservice.productstatus(id,status).then((res:any)=>{
      this.getData();
    }).catch((err)=>{
      console.log(err)
    })

  }
}
