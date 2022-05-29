import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LogoHighlifeComponent } from './components/logo-highlife/logo-highlife.component';
import { ProfileStudentComponent } from './views/profile-student/profile-student.component';
import { ProfileCoachComponent } from './views/profile-coach/profile-coach.component';
import { HomeComponent } from './views/home/home.component'
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MatCardModule } from "@angular/material/card";
import { ProfileDescriptionComponent } from './components/profile-description/profile-description.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatTableModule } from "@angular/material/table";
import { MatGridListModule } from "@angular/material/grid-list";

import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LogoHighlifeComponent,
    ProfileStudentComponent,
    ProfileCoachComponent,
    HomeComponent,
    SideBarComponent,
    ProfileDescriptionComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
