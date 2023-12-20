import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { HomeComponent } from './views/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, type Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { UploadComponent } from './views/upload/upload.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { HttpClientModule } from "@angular/common/http";
import { DocumentsComponent } from './views/documents/documents.component';
// import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMenuComponent,
    UserMenuComponent,
    HomeComponent,
    LandingComponent,
    UploadComponent,
    SideBarComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }