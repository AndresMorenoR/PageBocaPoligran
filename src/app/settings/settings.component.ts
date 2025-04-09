import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <h1>Configuración del Sistema</h1>
      <p>Ajustes y preferencias de la aplicación</p>
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
      border-bottom: 2px solid #4caf50;
      padding-bottom: 10px;
    }
  `]
})
export class SettingsComponent {}
