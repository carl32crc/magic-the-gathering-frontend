import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forChild(ROUTES);
