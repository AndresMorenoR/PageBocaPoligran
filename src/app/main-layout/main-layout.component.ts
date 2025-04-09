import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';


@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, ReactiveFormsModule],
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  constructor(private router: Router,
    private authService: AuthService 
  ) {}

  logout() {
    // 1. Limpiar datos de sesión (ejemplo)
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');

    // 2. Redirigir al login
    this.router.navigate(['/login']);
    this.authService.logout();

    // 3. (Opcional) Recargar la aplicación para limpiar estado
    // window.location.reload();
  }
}
