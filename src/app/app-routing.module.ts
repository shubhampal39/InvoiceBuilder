import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceBuilderModule } from './invoice-builder/invoice-builder.module';

const routes: Routes = [{
  path : 'invoice-builder',
  loadChildren:()=>InvoiceBuilderModule
  // loadChildren: 'app/invoice-builder/invoice-builder.module#InvoiceBuilderModule'
},{
  path : '**',
  redirectTo: 'invoice-builder'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
