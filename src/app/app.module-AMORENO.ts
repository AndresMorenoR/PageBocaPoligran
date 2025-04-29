import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- Añadir
import { FormsRoutingModule } from './forms/forms-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule, // <-- Añadir
    FormsRoutingModule,
    FormsModule,
    
    // ...otros imports
  ],
  // ...
})
export class AppModule {}