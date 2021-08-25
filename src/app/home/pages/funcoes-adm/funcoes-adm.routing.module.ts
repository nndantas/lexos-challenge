import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncoesAdmComponent } from './funcoes-adm.component';

const routes: Routes = [
  {
    path: '', 
    component: FuncoesAdmComponent,
    data:{ title:'Funções Administrativas' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncoesAdmRoutingModule { }
