import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"",
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent    
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:"dashboard",
        component:DashboardComponent
      }
    ]
  }
];

export class AppRoutingModule { } 
