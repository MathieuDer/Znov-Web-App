import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login/login.component';
import { SigninComponent } from './login/signin/signin.component';
import { ForgotComponent } from './login/forgot/forgot.component';
import { SignupComponent } from './login/signup/signup.component';
import { LogoComponent } from './login/logo/logo.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ProfilComponent } from './profil/profil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AbsenceComponent } from './school-life/absence/absence.component';
import { ClassComponent } from './school-life/class/class.component';
import { ReportComponent } from './report/report.component';
import { PlanningComponent } from './planning/planning.component';
import { ExternalComponent } from './external/external.component';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    SigninComponent,
    ForgotComponent,
    SignupComponent,
    LogoComponent,
    MainNavComponent,
    ProfilComponent,
    DashboardComponent,
    AbsenceComponent,
    ClassComponent,
    ReportComponent,
    PlanningComponent,
    ExternalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
