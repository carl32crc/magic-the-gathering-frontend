import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel.component';

const ROUTES: Routes = [
    { path: '', component: UserPanelComponent }
];

export const APP_ROUTING = RouterModule.forChild(ROUTES);
