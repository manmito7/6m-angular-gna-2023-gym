import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { Product } from 'src/app/model/product/product.model';
import { CategoryService } from 'src/app/shared/category/category.service';
import { ProductService } from 'src/app/shared/product/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUpload?: Product;
  percentage = 0;

  form = {
    categoryName: '',
    productName: '',
    description: '',
    price: '',
    image: '',
    status:'Enable'
  }

  constructor(private categoryservice: CategoryService, private productService: ProductService, private toastr: ToastrService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
    this.getallcat()
  }

  categorydata: any
  getallcat() {
    {
      this.spinner.show()
      this.categoryservice.getAllEnable().snapshotChanges().pipe(
        map(changes => {
          return changes.map((c: any) => {
            return ({ id: c.payload.doc.id, ...c.payload.doc.data() })
          })
        })
      ).subscribe((resultdata: any) => {
        this.spinner.hide()
        this.categorydata = resultdata
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
        this.currentFileUpload = new Product(file, this.form.categoryName, this.form.productName,"Enable",this.form.description,this.form.price);
        this.productService.pushFileToStorage(this.currentFileUpload).subscribe(
          result => {
            console.log(result)
            this.spinner.hide()
            if (result == 100) {
              this.toastr.success("Product Inserted")
              this.router.navigateByUrl("/layout/manageproduct")
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
