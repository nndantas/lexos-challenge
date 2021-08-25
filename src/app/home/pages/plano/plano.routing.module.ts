import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanoComponent } from './plano.component';

const routes: Routes = [
  {
    path: '', 
    component: PlanoComponent,
    data:{ title:'Plano' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanoRoutingModule { }
