import { SharedModule } from '../../../shared.module';
import { FuncoesAdmRoutingModule } from './funcoes-adm.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncoesAdmComponent } from './funcoes-adm.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FuncoesAdmRoutingModule,
    SharedModule
  ],
  declarations: [
    FuncoesAdmComponent
  ],
  exports: [
    SharedModule
  ]
})
export class FuncoesAdmModule { }
