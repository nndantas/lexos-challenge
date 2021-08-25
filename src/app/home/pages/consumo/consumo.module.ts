import { SharedModule } from '../../../shared.module';
import { ConsumoRoutingModule } from './consumo.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumoComponent } from './consumo.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ConsumoRoutingModule,
    SharedModule
  ],
  declarations: [
    ConsumoComponent
  ],
  exports: [
    SharedModule
  ]
})
export class ConsumoModule { }
