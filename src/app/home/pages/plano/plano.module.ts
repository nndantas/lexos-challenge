import { SharedModule } from '../../../shared.module';
import { PlanoRoutingModule } from './plano.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanoComponent } from './plano.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    PlanoRoutingModule,
    SharedModule
  ],
  declarations: [
    PlanoComponent
  ],
  exports: [
    SharedModule
  ]
})
export class PlanoModule { }
