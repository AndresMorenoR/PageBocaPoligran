import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-list',
  standalone: true,  // Añade esto para componentes standalone
  imports: [CommonModule, ReactiveFormsModule],  // Un solo array de imports
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.css'
})
export class FormListComponent {
}
