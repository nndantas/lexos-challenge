import { SharedModule } from '../../../shared.module';
import { PageNotFoundRoutingModule } from './page-not-found.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    PageNotFoundRoutingModule,
    SharedModule
  ],
  declarations: [
  ],
  exports: [
    SharedModule
  ]
})
export class PageNotFoundModule { }
