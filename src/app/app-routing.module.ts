import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';


const routes: Routes = [
  {
  path: 'blog/:id',
  component: DetailComponent
  },
  {
  path : 'home',
    component: ListComponent
  },
  {
    path : 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
