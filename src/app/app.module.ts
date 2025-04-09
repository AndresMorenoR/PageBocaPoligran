import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // <-- Añadir

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule, // <-- Añadir
    // ...otros imports
  ],
  // ...
})
export class AppModule {}