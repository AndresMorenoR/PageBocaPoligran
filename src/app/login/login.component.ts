import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router'; // Importa Router

@Component({
  standalone: true, // ✅ Componente standalone
  imports: [
    CommonModule,
    ReactiveFormsModule, // ✅ Módulo necesario para formGroup
  ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router // Inyecta Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;
    
    // Credenciales hardcodeadas para prueba
    if (email === 'admin@boca.com' && password === 'admin123') {
      // 1. Guardar token de autenticación
      localStorage.setItem('authToken', 'token-simulado');
      
      // 2. Redirigir al dashboard
      console.log('Navegando a dashboard...');
      this.router.navigate(['/dashboard'])
      .then(success => console.log('Navegación exitosa:', success))
      .catch(err => console.error('Error navegando:', err));
      setTimeout(() => window.location.reload(), 100);
      
      // 3. Opcional: Recargar la aplicación
      // window.location.reload();
    } else {
      alert('Credenciales incorrectas. Use admin@boca.com / admin123');
    }
  }
}