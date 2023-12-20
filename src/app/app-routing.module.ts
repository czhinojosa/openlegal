import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
// Import other components as needed


import { LandingComponent } from './views/landing/landing.component';
import { UploadComponent } from './views/upload/upload.component';
import { DocumentsComponent } from './views/documents/documents.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // Define other routes
  // { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'documents', component: DocumentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
