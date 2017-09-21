import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTING } from './article.routes';
import { ArticleComponent } from './article.component';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING
  ],
  declarations: [ArticleComponent]
})
export class ArticleModule { }
