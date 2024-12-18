import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    // HomeComponent,
    // CreateComponent
  ],
  imports: [
    CommonModule,
    // ProductRoutingModule
  ]
})
export class ProductModule { }
