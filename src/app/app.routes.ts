import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      { 
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      { 
        path: 'users', 
        loadComponent: () => import('./users/users.component').then(m => m.UsersComponent) 
      },
      { 
        path: 'problems',
        loadComponent: () => import('./problems/problems.component').then(m => m.ProblemsComponent)
      },
      { 
        path: 'settings',
        loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent)
      }
      // ... otras rutas con loadComponent
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];