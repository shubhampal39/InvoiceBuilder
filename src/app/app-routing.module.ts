import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InvoiceBuilderModule } from './invoice-builder/invoice-builder.module';

const routes: Routes = [
 { path:'invoice-builder',
  loadChildren:()=> InvoiceBuilderModule
},
{
  path:'**',
  redirectTo:'/invoice-builder'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
