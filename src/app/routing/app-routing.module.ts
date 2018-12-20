import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from '../login/signin/signin.component';
import { LoginComponent } from '../login/login/login.component';
import { ForgotComponent } from '../login/forgot/forgot.component';
import { SignupComponent } from '../login/signup/signup.component';
import { MainComponent } from '../main/main.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfilComponent } from '../profil/profil.component';
import { AbsenceComponent } from '../school-life/absence/absence.component';
import { ReportComponent } from '../report/report.component';
import { PlanningComponent } from '../planning/planning.component';
import { ExternalComponent } from '../external/external.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: []
      },
      {
        path: 'profil',
        component: ProfilComponent,
        children: []
      },
      {
        path: 'school-life/absence',
        component: AbsenceComponent,
        children: []
      },
      {
        path: 'report',
        component: ReportComponent,
        children: []
      },
      {
        path: 'planning',
        component: PlanningComponent,
        children: []
      },
      {
        path: 'external',
        component: ExternalComponent,
        children: []
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      {
        path: 'signin',
        component: SigninComponent,
        children: []
      },
      {
        path: 'forgot',
        component: ForgotComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
