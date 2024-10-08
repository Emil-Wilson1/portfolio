import { Routes } from '@angular/router';
import { InformationComponent } from './components/featuress/information/information.component';
import { ContactComponent } from './components/featuress/contact/contact.component';
import { MainComponent } from './components/featuress/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'info', component: InformationComponent },
  { path: 'contact', component: ContactComponent },
];
