import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile.component';

const ROUTES: Routes = [
    { path: '', component: MyProfileComponent }
];

export const APP_ROUTING = RouterModule.forChild(ROUTES);
