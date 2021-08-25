import { SharedModule } from '../../../shared.module';
import { PagamentoRoutingModule } from './pagamento.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoComponent } from './pagamento.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    PagamentoRoutingModule,
    SharedModule
  ],
  declarations: [
    PagamentoComponent
  ],
  exports: [
    SharedModule
  ]
})
export class PagamentoModule { }
