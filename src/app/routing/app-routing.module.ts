import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from '../main/errors/404/error-404.component';
import { LoginComponent } from '../main/authentication/login/login.component';
import { RegisterComponent } from '../main/authentication/register/register.component';
import { ForgotPasswordComponent } from '../main/authentication/forgot-password/forgot-password.component';
import { FaqService } from '../main/faq/faq.service';
import { FaqComponent } from '../main/faq/faq.component';
import { CalendarComponent } from '../main/calendar/calendar.component';
import { CalendarService } from '../main/calendar/calendar.service';
import { ProfileComponent } from '../main/profile/profile.component';
import { ProfileService } from '../main/profile/profile.service';
import { ContactsComponent } from '../main/contacts/contacts.component';
import { ContactsService } from '../main/contacts/contacts.service';
import { AcademyCoursesComponent } from '../main/academy/courses/courses.component';
import { AcademyCoursesService } from '../main/academy/courses.service';
import { ProjectDashboardComponent } from '../main/dashboards/project/project.component';
import { ProjectDashboardAdminComponent } from '../main/dashboardsAdmin/project/project.component';
import { ProjectDashboardService } from '../main/dashboards/project/project.service';
import { ProjectDashboardAdminService } from '../main/dashboardsAdmin/project/project.service';
import { AuthGuard } from '../main/authentication/auth.guards';


const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: ProjectDashboardComponent,
    canActivate: [AuthGuard],
    resolve: {
      data: ProjectDashboardService
    }
  },
  {
    path: 'dashboardsAdmin',
    component: ProjectDashboardAdminComponent,
    canActivate: [AuthGuard],
    resolve: {
      data: ProjectDashboardAdminService
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    resolve: {
      profile: ProfileService
    }
  },
  {
    path: 'reglement',
    component: FaqComponent,
    canActivate: [AuthGuard],
    resolve: {
      faq: FaqService
    }
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    canActivate: [AuthGuard],
    children: [],
    resolve: {
      chat: CalendarService
    }
  },
  {
    path: 'contact',
    component: ContactsComponent,
    canActivate: [AuthGuard],
    resolve: {
      contacts: ContactsService
    }
  },
  {
    path: 'external',
    component: AcademyCoursesComponent,
    canActivate: [AuthGuard],
    resolve: {
      academy: AcademyCoursesService
    }
  },
  {
    path: 'auth',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'forgot',
        component: ForgotPasswordComponent
      }
    ]
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
