import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: '**', component: NotfoundComponent, title: 'not found' },
];
