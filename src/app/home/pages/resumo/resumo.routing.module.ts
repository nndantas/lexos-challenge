import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumoComponent } from './resumo.component';

const routes: Routes = [
  {
    path: '', 
    component: ResumoComponent,
    data:{ title:'Resumo' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumoRoutingModule { }
