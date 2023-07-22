import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './user/layout/layout.component';
import { HomeComponent } from './user/home/home.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { GalleryComponent } from './user/gallery/gallery.component';
import { BlogComponent } from './user/blog/blog.component';
import { ContactComponent } from './user/contact/contact.component';
import { ScheduleComponent } from './user/schedule/schedule.component';
import { BlogSingleComponent } from './user/blog-single/blog-single.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { userGuard } from './user/guard/user.guard';
import { adminGuard } from './admin/guard/admin.guard';
import { ManageTrainerComponent } from './admin/trainer/manage-trainer/manage-trainer.component';
import { AddTrainerComponent } from './admin/trainer/add-trainer/add-trainer.component';
import { UpdateTrainerComponent } from './admin/trainer/update-trainer/update-trainer.component';
import { ManagePackageComponent } from './admin/package/manage-package/manage-package.component';
import { AddPackageComponent } from './admin/package/add-package/add-package.component';
import { UpdatePackageComponent } from './admin/package/update-package/update-package.component';

const routes: Routes = [
  {path:'', redirectTo:'/user/home', pathMatch:'full'},
  {path:'login', component:LoginComponent},

  {path:'user', component:LayoutComponent,children:[
      {path:'home', component:HomeComponent},
      {path:'about-us', component:AboutUsComponent},
      {path:'gallery', component:GalleryComponent},
      {path:'blog', component:BlogComponent},
      {path:'blog-single', component:BlogSingleComponent},
      {path:'contact', component:ContactComponent},
      {path:'schedule', component:ScheduleComponent},
      {path:'register',component:RegisterComponent},
      {path:'profile',component:ProfileComponent, canActivate:[userGuard]}
    ] },

  {path: 'admin',component:AdminLayoutComponent, canActivate:[adminGuard], children:[

      {path:'dashboard',component:AdminDashboardComponent},
      {path:'manage-users',component:ManageUsersComponent},
      {path:'manage-package',component:ManagePackageComponent},
      {path:'add-package',component:AddPackageComponent},
      {path:'update-package',component:UpdatePackageComponent},
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
