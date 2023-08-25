import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './user/layout/layout.component';
import { HomeComponent } from './user/home/home.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { GalleryComponent } from './user/gallery/gallery.component';
import { ContactComponent } from './user/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ManageTrainerComponent } from './admin/trainer/manage-trainer/manage-trainer.component';
import { AddTrainerComponent } from './admin/trainer/add-trainer/add-trainer.component';
import { UpdateTrainerComponent } from './admin/trainer/update-trainer/update-trainer.component';
import { ManagePackageComponent } from './admin/package/manage-package/manage-package.component';
import { AddPackageComponent } from './admin/package/add-package/add-package.component';
import { UpdatePackageComponent } from './admin/package/update-package/update-package.component';
import { PackagesComponent } from './user/packages/packages.component';
import { TrainerComponent } from './user/trainer/trainer.component';
import { environment } from 'src/environments/environment';
import { AddPackage } from './models/add-package/add-package.model';

const routes: Routes = [
  {path:'', redirectTo:'/user/home', pathMatch:'full'},
  {path:'login', component:LoginComponent},

  {path:'user', component:LayoutComponent,children:[
      {path:'home', component:HomeComponent},
      {path:'about-us', component:AboutUsComponent},
      {path:'packages', component:PackagesComponent},
      {path:'trainer',component:TrainerComponent},
      {path:'gallery', component:GalleryComponent},
      {path:'contact', component:ContactComponent},
      {path:'register',component:RegisterComponent},
      {path:'profile',component:ProfileComponent}
    ] },

  {path: 'admin',component:AdminLayoutComponent, children:[

      {path:'dashboard',component:AdminDashboardComponent},
      {path:'manage-users',component:ManageUsersComponent},
      {path:'manage-package',component:ManagePackageComponent},
      {path:'add-package',component:AddPackageComponent},
      {path:'update-package/:id',component:UpdatePackageComponent},
      {path:'manage-trainer',component:ManageTrainerComponent},
      {path:'add-trainer',component:AddTrainerComponent},
      {path:'update-trainer',component:UpdateTrainerComponent}

] },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }
