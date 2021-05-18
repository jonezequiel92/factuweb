import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'login', loadChildren: () => import ('../auth/auth.module').then( x => x.AuthModule )},
  { path: 'products', loadChildren: () => import ('../products/products.module').then( x => x.ProductsModule )},
  { path: 'invoices', loadChildren: () => import ('../invoices/invoices.module').then( x => x.InvoicesModule )},
  { path: 'companies', loadChildren: () => import ('../companies/companies.module').then( x => x.CompaniesModule )},
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
