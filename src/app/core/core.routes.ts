import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: './../home/home.module#HomeModule' },
    { path: 'login', loadChildren: './../login/login.module#LoginModule' },
    { path: 'register', loadChildren: './../register/register.module#RegisterModule' },
    { path: 'edit-profile', loadChildren: './../edit-profile/edit-profile.module#EditProfileModule' },
    { path: 'admin-panel', loadChildren: './../admin-panel/admin-panel.module#AdminPanelModule' },
    { path: 'article/:id', loadChildren: './../article/article.module#ArticleModule' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);
