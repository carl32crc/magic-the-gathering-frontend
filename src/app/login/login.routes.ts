import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const ROUTES: Routes = [
    { path: '', component: LoginComponent }
];

export const APP_ROUTING = RouterModule.forChild(ROUTES);
