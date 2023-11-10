import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';
import { PaymentComponent } from './payment/payment.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { ManageproductComponent } from './product/manageproduct/manageproduct.component';
import { AddbookingComponent } from './booking/addbooking/addbooking.component';
import { ViewbookingComponent } from './booking/viewbooking/viewbooking.component';
import { BookingstatusComponent } from './booking/bookingstatus/bookingstatus.component';
import { CategoriesComponent } from './categories/categories.component';
import { PackagesComponent } from './packages/packages.component';
import { ViewuserComponent } from './viewuser/viewuser.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    RegisterComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProductsComponent,
    AdminComponent,
    UserComponent,
    CustomerComponent,
    PaymentComponent,
    PrivacyComponent,
    UserpanelComponent,
    PagenotfoundComponent,
    UpdateComponent,
    DashboardComponent,
    AddserviceComponent,
    ManageserviceComponent,
    UpdateserviceComponent,
    AddpackageComponent,
    ManagepackageComponent,
    UpdatepackageComponent,
    AddcategoryComponent,
    ManagecategoryComponent,
    UpdatecategoryComponent,
    AddproductComponent,
    UpdateproductComponent,
    ManageproductComponent,
    AddbookingComponent,
    ViewbookingComponent,
    BookingstatusComponent,
    CategoriesComponent,
    PackagesComponent,
    ViewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
