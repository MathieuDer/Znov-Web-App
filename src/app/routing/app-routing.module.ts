import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from '../components/login/signin/signin.component';
import { LoginComponent } from '../components/login/login/login.component';
import { ForgotComponent } from '../components/login/forgot/forgot.component';
import { SignupComponent } from '../components/login/signup/signup.component';
import { MainComponent } from '../components/main/main.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ProfilComponent } from '../components/profil/profil.component';
import { AbsenceComponent } from '../components/school-life/absence/absence.component';
import { ReportComponent } from '../components/report/report.component';
import { PlanningComponent } from '../components/planning/planning.component';
import { ExternalComponent } from '../components/external/external.component';
import { AuthGuard } from '../guards/auth.guards';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [],
        canActivate: [AuthGuard]
      },
      {
        path: 'profil',
        component: ProfilComponent,
        children: [],
        canActivate: [AuthGuard]
      },
      {
        path: 'school-life/absence',
        component: AbsenceComponent,
        children: [],
        canActivate: [AuthGuard]
      },
      {
        path: 'report',
        component: ReportComponent,
        children: [],
        canActivate: [AuthGuard]
      },
      {
        path: 'planning',
        component: PlanningComponent,
        children: [],
        canActivate: [AuthGuard]
      },
      {
        path: 'external',
        component: ExternalComponent,
        children: [],
        canActivate: [AuthGuard]
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
