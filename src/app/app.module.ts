import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { CalendarModule as AngularCalendarModule, DateAdapter } from 'angular-calendar';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatIconModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatExpansionModule, MatDatepickerModule, MatDialogModule, MatSlideToggleModule, MatToolbarModule, MatTooltipModule, MatDividerModule, MatTabsModule, MatMenuModule, MatRippleModule, MatTableModule, MatSelectModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule, FuseConfirmDialogModule, FuseWidgetModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { FakeDbService } from 'app/fake-db/fake-db.service';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { Error404Component } from './main/errors/404/error-404.component';
import { LoginComponent } from './main/authentication/login/login.component';
import { RegisterComponent } from './main/authentication/register/register.component';
import { ForgotPasswordComponent } from './main/authentication/forgot-password/forgot-password.component';
import { FaqComponent } from './main/faq/faq.component';
import { FaqService } from './main/faq/faq.service';
import { CalendarComponent } from './main/calendar/calendar.component';
import { CalendarEventFormDialogComponent } from './main/calendar/event-form/event-form.component';
import { CalendarService } from './main/calendar/calendar.service';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ColorPickerModule } from 'ngx-color-picker';
import { ProfileComponent } from './main/profile/profile.component';
import { ProfileAboutComponent } from './main/profile/tabs/about/about.component';
import { ProfileService } from './main/profile/profile.service';
import { ContactsComponent } from './main/contacts/contacts.component';
import { ContactsContactListComponent } from './main/contacts/contact-list/contact-list.component';
import { ContactsSelectedBarComponent } from './main/contacts/selected-bar/selected-bar.component';
import { ContactsMainSidebarComponent } from './main/contacts/sidebars/main/main.component';
import { ContactsContactFormDialogComponent } from './main/contacts/contact-form/contact-form.component';
import { ContactsService } from './main/contacts/contacts.service';
import { AcademyCoursesService } from './main/academy/courses.service';
import { AcademyCoursesComponent } from './main/academy/courses/courses.component';
import { ProjectDashboardComponent } from './main/dashboards/project/project.component';
import { ProjectDashboardService } from './main/dashboards/project/project.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
    declarations: [
        AppComponent,
        Error404Component,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        FaqComponent,
        CalendarComponent,
        CalendarEventFormDialogComponent,
        ProfileComponent,
        ProfileAboutComponent,
        ContactsComponent,
        ContactsContactListComponent,
        ContactsSelectedBarComponent,
        ContactsMainSidebarComponent,
        ContactsContactFormDialogComponent,
        AcademyCoursesComponent,
        ProjectDashboardComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatCheckboxModule,
        MatExpansionModule,
        MatButtonModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatTooltipModule,
        MatDividerModule,
        MatTabsModule,
        MatMenuModule,
        MatRippleModule,
        MatTableModule,
        MatSelectModule,

        AngularCalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        FuseConfirmDialogModule,
        FuseWidgetModule,

        // App modules
        LayoutModule,
        SampleModule,
        ColorPickerModule,
        NgxChartsModule,
    ],
    providers: [
        FaqService,
        CalendarService,
        ProfileService,
        ContactsService,
        AcademyCoursesService,
        ProjectDashboardService
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        CalendarEventFormDialogComponent,
        ContactsContactFormDialogComponent
    ]
})
export class AppModule {
}
