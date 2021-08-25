import { SharedModule } from '../../../shared.module';
import { DocumentosRoutingModule } from './documentos.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentosComponent } from './documentos.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    DocumentosRoutingModule,
    SharedModule
  ],
  declarations: [
    DocumentosComponent
  ],
  exports: [
    SharedModule
  ]
})
export class DocumentosModule { }
