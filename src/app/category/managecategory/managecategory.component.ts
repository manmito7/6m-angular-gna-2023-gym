import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs';
import { Category } from 'src/app/model/category/category.model';
import { CategoryService } from 'src/app/shared/category/category.service';

@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
  styleUrls: ['./managecategory.component.css']
})
export class ManagecategoryComponent implements OnInit {
  categories?: Category[]

  constructor(private categoryservice: CategoryService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.spinner.show()
    this.categoryservice.getAll().snapshotChanges().pipe(
      map(changes => {
        return changes.map((c: any) => {
          return ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        })
      })
    ).subscribe((resultdata: any) => {
      this.spinner.hide()
      this.categories = resultdata
    })
  }
  EnableDisable(id:any,status:any){
    this.categoryservice.categorystatus(id,status).then((res:any)=>{
      this.getData();
    }).catch((err)=>{
      console.log(err)
    })

  }
}
