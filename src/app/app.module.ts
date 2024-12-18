import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HomeComponent } from './product/home/home.component';
import { HttpClient } from "@angular/common/http";
import { ProductModule } from "./product/product.module";

const routes: Routes = [
  // Define your routes here
];

@NgModule({
declarations: [
    // AppComponent
],
imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HomeComponent,
    AppComponent,
    ProductModule
    // HttpClientModule
],
providers: [],
//   bootstrap: [AppComponent]
})
export class AppModule { }
