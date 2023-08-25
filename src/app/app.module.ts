import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LayoutComponent } from './user/layout/layout.component';
import { HeaderComponent } from './user/layout/header/header.component';
import { FooterComponent } from './user/layout/footer/footer.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './user/contact/contact.component';
import { GalleryComponent } from './user/gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AdminHeaderComponent } from './admin/admin-layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-layout/admin-footer/admin-footer.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ManageTrainerComponent } from './admin/trainer/manage-trainer/manage-trainer.component';
import { AddTrainerComponent } from './admin/trainer/add-trainer/add-trainer.component';
import { UpdateTrainerComponent } from './admin/trainer/update-trainer/update-trainer.component';
import { ManagePackageComponent } from './admin/package/manage-package/manage-package.component';
import { AddPackageComponent } from './admin/package/add-package/add-package.component';
import { UpdatePackageComponent } from './admin/package/update-package/update-package.component';
import{ AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { PackagesComponent } from './user/packages/packages.component';
import { TrainerComponent } from './user/trainer/trainer.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { NgxSpinnerModule } from "ngx-spinner"
import {AngularFireAuthModule} from '@angular/fire/compat/auth'



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    GalleryComponent,
    AdminDashboardComponent,
    ManageUsersComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminLayoutComponent,
    RegisterComponent,
    ProfileComponent,
    ManageTrainerComponent,
    AddTrainerComponent,
    UpdateTrainerComponent,
    ManagePackageComponent,
    AddPackageComponent,
    UpdatePackageComponent,
    PackagesComponent,
    TrainerComponent,
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFirestoreModule,
    NgxSpinnerModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
