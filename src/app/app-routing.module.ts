import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './product/home/home.component';

const routes: Routes = [
  {path: 'product/home', component: HomeComponent},
  {path: 'product', redirectTo: 'product/home', pathMatch: 'full'},
  {path: '', redirectTo: 'product/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }