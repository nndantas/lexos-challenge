import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumoComponent } from './consumo.component';

const routes: Routes = [
  {
    path: '', 
    component: ConsumoComponent,
    data:{ title:'Consumo' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumoRoutingModule { }
