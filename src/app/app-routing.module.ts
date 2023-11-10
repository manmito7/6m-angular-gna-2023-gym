import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { PaymentComponent } from './payment/payment.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddserviceComponent } from './service/addservice/addservice.component';
import { ManageserviceComponent } from './service/manageservice/manageservice.component';
import { UpdateserviceComponent } from './service/updateservice/updateservice.component';
import { AddpackageComponent } from './package/addpackage/addpackage.component';
import { ManagepackageComponent } from './package/managepackage/managepackage.component';
import { UpdatepackageComponent } from './package/updatepackage/updatepackage.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { ManagecategoryComponent } from './category/managecategory/managecategory.component';
import { UpdatecategoryComponent } from './category/updatecategory/updatecategory.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ManageproductComponent } from './product/manageproduct/manageproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { ViewbookingComponent } from './booking/viewbooking/viewbooking.component';
import { PackagesComponent } from './packages/packages.component';
import { ServicesComponent } from './services/services.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddbookingComponent } from './booking/addbooking/addbooking.component';
import { BookingstatusComponent } from './booking/bookingstatus/bookingstatus.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
const routes: Routes = [
  {
    path:'',redirectTo:'/layout/home',pathMatch:'full'
  },
  {
    path:'layout',component:LayoutComponent,
    children:[
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'addservice',component:AddserviceComponent
  },
  {
    path:'manageservice',component:ManageserviceComponent
  },
  {
    path:'updateservice/:id',component:UpdateserviceComponent
  },
  {
    path:'addPackage',component:AddpackageComponent
  },
  {
    path:'managePackage',component:ManagepackageComponent
  },
  {
    path:'updatePackage/:id',component:UpdatepackageComponent
  },
  {
    path:'addcategory',component:AddcategoryComponent
  },
  {
    path:'managecategory',component:ManagecategoryComponent
  },
  {
    path:'updatecategory/:id',component:UpdatecategoryComponent
  },
  {
    path:'addproduct',component:AddproductComponent
  },
  {
    path:'manageproduct',component:ManageproductComponent
  },
  {
    path:'updateproduct/:id',component:UpdateproductComponent
  },
  {
    path:'viewbooking',component:ViewbookingComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'categories',component:CategoriesComponent
  },
  {
    path:'products/:category',component:ProductsComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'packages/:service',component:PackagesComponent
  },
  {
    path: 'addbooking/:service/:package', component:AddbookingComponent
  },
  {
    path: 'bookingstatus', component:BookingstatusComponent
  },
  {
    path: 'viewuser', component:ViewuserComponent
  },
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
