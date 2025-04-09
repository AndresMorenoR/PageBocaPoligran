import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  selector: 'app-dashboard',
  template: `
    <div class="dashboard-container">
      <h1>Bienvenido al app BOCA Politecnico Grancolombiano</h1>
      <nav>
        <ul>
          <li><a routerLink="/forms">Formularios</a></li>
          <li><a routerLink="/settings">Configuración</a></li>
        </ul>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 20px;
    }
    nav ul {
      display: flex;
      gap: 20px;
      list-style: none;
      padding: 0;
    }
  `]
})
export class DashboardComponent {
  // Lógica del dashboard aquí
}