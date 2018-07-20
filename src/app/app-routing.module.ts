import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BetComponent } from './bet/bet.component';
import { AuthGuard } from './auth.guard';
import { AddmoneyComponent } from './addmoney/addmoney.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'bet',
    component: BetComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'addmoney',
    component: AddmoneyComponent,
    canActivate: [ AuthGuard ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
