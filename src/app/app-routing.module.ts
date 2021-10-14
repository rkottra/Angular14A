import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { Tabla1Component } from './tabla1/tabla1.component';

const routes: Routes = [
  {
    path: 'tabla',
    component: Tabla1Component 
  },
  {
    path: '**',
    component: HelloComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
