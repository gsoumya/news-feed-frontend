import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsModule } from './news/news.module';

const routes: Routes = [{
  path: '',
  pathMatch:'full',
  redirectTo: 'news'
  
},
{
  path: 'news',
  loadChildren: ()=>import('./news/news.module').then(mod => mod.NewsModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
