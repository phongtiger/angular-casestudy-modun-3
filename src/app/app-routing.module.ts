import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';


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
  },
  {
    path : 'edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
