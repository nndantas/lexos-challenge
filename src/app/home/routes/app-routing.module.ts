import { ResumoComponent } from '../pages/resumo/resumo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', 
    component: ResumoComponent, 
    data:{ title: 'Home' }
  },
  {
    path: 'consumo',
    loadChildren:  () => import('../pages/consumo/consumo.module').then(m => m.ConsumoModule)
  },
  {
    path: 'documentos',
    loadChildren:  () => import('../pages/documentos/documentos.module').then(m => m.DocumentosModule)
  },
  {
    path: 'funcoes-adm',
    loadChildren:  () => import('../pages/funcoes-adm/funcoes-adm.module').then(m => m.FuncoesAdmModule)
  },
  {
    path: 'pagamento',
    loadChildren:  () => import('../pages/pagamento/pagamento.module').then(m => m.PagamentoModule)
  },
  {
    path: 'plano',
    loadChildren:  () => import('../pages/plano/plano.module').then(m => m.PlanoModule)
  },
  {
    path: 'resumo',
    loadChildren:  () => import('../pages/resumo/resumo.module').then(m => m.ResumoModule)
  },
  {
    path: '',   
    redirectTo: 'resumo' , pathMatch: 'full'
  },
  {
    path: '**',  
    loadChildren:  () => import('../pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
