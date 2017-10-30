import { NgModule } from '@angular/core';

import { ProductManagementComponent } from './product-management.component';
import { ProductManagementRoutingModule } from './product-management-routing.module';

@NgModule({
  imports: [
    ProductManagementRoutingModule,
  ],
  declarations: [ ProductManagementComponent ]
})
export class ProductManagementModule { }
