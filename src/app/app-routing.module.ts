import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './main/sample/sample.component';
import { Error404Component } from './main/errors/404/error-404.component';
import { LoginComponent } from './main/authentication/login/login.component';
import { RegisterComponent } from './main/authentication/register/register.component';
import { ForgotPasswordComponent } from './main/authentication/forgot-password/forgot-password.component';
import { FaqService } from './main/faq/faq.service';
import { FaqComponent } from './main/faq/faq.component';
import { CalendarComponent } from './main/calendar/calendar.component';
import { CalendarService } from './main/calendar/calendar.service';
import { ProfileComponent } from './main/profile/profile.component';
import { ProfileService } from './main/profile/profile.service';
import { ContactsComponent } from './main/contacts/contacts.component';
import { ContactsService } from './main/contacts/contacts.service';
import { AcademyCoursesComponent } from './main/academy/courses/courses.component';
import { AcademyCoursesService } from './main/academy/courses.service';
import { ProjectDashboardComponent } from './main/dashboards/project/project.component';
import { ProjectDashboardService } from './main/dashboards/project/project.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot', component: ForgotPasswordComponent },
    ]
  },
  {
    path     : 'dashboard',
    component: ProjectDashboardComponent,
    resolve  : {
        data: ProjectDashboardService
    }
},
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: {
      profile: ProfileService
    }
  },
  {
    path: 'faq',
    component: FaqComponent,
    resolve: {
      faq: FaqService
    }
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    children: [],
    resolve: {
      chat: CalendarService
    }
  },
  {
    path: 'contact',
    component: ContactsComponent,
    resolve: {
      contacts: ContactsService
    }
  },
  {
    path: 'external',
    component: AcademyCoursesComponent,
    resolve: {
      academy: AcademyCoursesService
    }
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
