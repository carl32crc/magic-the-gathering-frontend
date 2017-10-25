import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile.component';

const ROUTES: Routes = [
    { path: '', component: EditProfileComponent }
];

export const APP_ROUTING = RouterModule.forChild(ROUTES);
