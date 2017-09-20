import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: './../home/home.module#HomeModule' },
    { path: 'login', loadChildren: './../login/login.module#LoginModule' },
    { path: 'register', loadChildren: './../register/register.module#RegisterModule' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);
