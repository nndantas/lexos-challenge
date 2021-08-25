import { ResumoComponent } from './resumo.component';
import { SharedModule } from '../../../shared.module';
import { ResumoRoutingModule } from './resumo.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ResumoRoutingModule,
    SharedModule
  ],
  declarations: [
    ResumoComponent
  ],
  exports: [
    SharedModule
  ]
})
export class ResumoModule { }
