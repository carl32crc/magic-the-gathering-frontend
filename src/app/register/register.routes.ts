import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

const ROUTES: Routes = [
    { path: '', component: RegisterComponent }
];

export const APP_ROUTING = RouterModule.forChild(ROUTES);
