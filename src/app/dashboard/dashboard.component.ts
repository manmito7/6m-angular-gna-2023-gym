import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category/category.service';
import { ProductService } from '../shared/product/product.service';
import { ServiceService } from '../shared/service/service.service';
import { UserauthService } from '../shared/userauth/userauth.service';
import { BookingsService } from '../shared/bookings/bookings.service';
import { PackageService } from '../shared/package/package.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalCategories: number = 0;
  totalProducts: number = 0;
  totalServices: number = 0;
  totalPackages: number = 0;
  totalUsers: number = 0;
  totalBookings: number = 0;
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private service: ServiceService,
    private packages: PackageService,
    private user: UserauthService,
    private booking: BookingsService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.categoryService.getAll().snapshotChanges().subscribe((categories) => {
      this.totalCategories = categories.length;
    });
    this.productService.getAll().snapshotChanges().subscribe((categories) => {
      this.totalProducts = categories.length;
    });

    this.productService.getAll().snapshotChanges().subscribe((products) => {
      this.totalProducts = products.length;
    });

    this.service.getAll().snapshotChanges().subscribe((service) => {
      this.totalServices = service.length;
    });
    this.packages.getAll().snapshotChanges().subscribe((ppackages) => {
      this.totalPackages = ppackages.length;
    });
    this.user.getAllUser().snapshotChanges().subscribe((users) => {
      this.totalUsers = users.length;
    });
    this.booking.getAll().snapshotChanges().subscribe((bookings) => {
      this.totalBookings = bookings.length;
    });


  }
}
