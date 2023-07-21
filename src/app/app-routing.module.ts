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
import { ManageComponent } from './admin/manage/manage.component';
import { AddComponent } from './admin/add/add.component';
import { UpdateComponent } from './admin/update/update.component';

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
      {path:'manage',component:ManageComponent},
      {path:'add',component:AddComponent},
      {path:'update',component:UpdateComponent}

] },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }
