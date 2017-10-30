import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { ArticlesComponent } from './articles/articles.component';
import { SliderComponent } from './slider/slider.component';
import { UsersComponent } from './users/users.component';

const ROUTES: Routes = [
    {
        path: '',
        component: AdminPanelComponent,
        children: [
            { path: '', redirectTo: 'slider', pathMatch: 'full' },
            { path: 'slider', component: SliderComponent },
            { path: 'articles', component: ArticlesComponent },
            { path: 'users', component: UsersComponent }
        ]
    }
];

export const APP_ROUTING = RouterModule.forChild(ROUTES);
