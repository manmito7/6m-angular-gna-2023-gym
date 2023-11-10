import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category/category.model';
import { CategoryService } from '../shared/category/category.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories?: Category[]

  constructor(private categoryservice: CategoryService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.spinner.show()
    this.categoryservice.getAllEnable().snapshotChanges().pipe(
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
}
