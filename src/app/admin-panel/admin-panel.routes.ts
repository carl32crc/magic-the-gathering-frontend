import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';

const ROUTES: Routes = [
    { path: '', component: AdminPanelComponent }
];

export const APP_ROUTING = RouterModule.forChild(ROUTES);
