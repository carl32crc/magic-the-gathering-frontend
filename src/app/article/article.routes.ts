import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article.component';

const ROUTES: Routes = [
    { path: '', component: ArticleComponent }
];

export const APP_ROUTING = RouterModule.forChild(ROUTES);
