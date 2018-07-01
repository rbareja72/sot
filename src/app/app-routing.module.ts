import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {QaComponent} from "./qa/qa.component";

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'qa', component: QaComponent, children:[
      {path: '', component: QaComponent},
      {path: ':q', component: QaComponent},
    ]},

  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
