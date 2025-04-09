import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <!-- Añade aquí elementos globales como headers/footers si los necesitas -->
  `,
  // styles: [] (opcional: añade estilos globales si es necesario)
})
export class AppComponent {}