import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <h1>Resultado de la competencia</h1>
      <p>Contenido de la resultado y clasificación de los equipos</p>
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
      border-bottom: 2px solid #ff5722;
      padding-bottom: 10px;
    }
  `]
})
export class ProblemsComponent {}
