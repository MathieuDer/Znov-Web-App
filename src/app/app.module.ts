import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routing/app-routing.module';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login/login.component';
import { SigninComponent } from './components/login/signin/signin.component';
import { ForgotComponent } from './components/login/forgot/forgot.component';
import { SignupComponent } from './components/login/signup/signup.component';
import { LogoComponent } from './components/login/logo/logo.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ProfilComponent } from './components/profil/profil.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AbsenceComponent } from './components/school-life/absence/absence.component';
import { ClassComponent } from './components/school-life/class/class.component';
import { ReportComponent } from './components/report/report.component';
import { PlanningComponent } from './components/planning/planning.component';
import { ExternalComponent } from './components/external/external.component';

import { ValidateService } from './services/validate/validate.service';
import { AuthService } from './services/auth/auth.service';
import { ProfilService } from './services/profil/profil.service';
import { AuthGuard } from './guards/auth.guards';

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
    MatListModule,
    HttpClientModule,
  ],
  providers: [ValidateService, AuthService, ProfilService, AuthGuard],
  bootstrap: [MainComponent]
})
export class AppModule { }
