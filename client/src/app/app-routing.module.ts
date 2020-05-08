import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'profile',component: ProfileComponent, canActivate: [AuthGuardService]},
  { path: '**', redirectTo: '' }
];
export const appRoutingModule = RouterModule.forRoot(routes);

