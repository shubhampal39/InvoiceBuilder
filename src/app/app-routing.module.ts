import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InvoiceBuilderModule } from './invoice-builder/invoice-builder.module';

const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
 { path:'invoice-builder',
  loadChildren:()=> InvoiceBuilderModule
  // loadChildren:'app/invoice-builder/invoice-builder.module#InvoiceBuilderRoutingModule'
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
