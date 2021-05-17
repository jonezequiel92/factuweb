import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CompaniesListComponent } from './pages/companies-list/companies-list.component';

@NgModule({
  declarations: [
    CompaniesListComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    SharedModule
  ]
})
export class CompaniesModule { }
