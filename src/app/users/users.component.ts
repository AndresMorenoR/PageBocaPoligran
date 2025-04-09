import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <h1>Administración de Usuarios</h1>
      <p>Contenido de la página de usuarios irá aquí</p>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: #333;
      border-bottom: 2px solid #0066cc;
      padding-bottom: 10px;
    }
  `]
})
export class UsersComponent {}