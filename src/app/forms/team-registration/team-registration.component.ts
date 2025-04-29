import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ReactiveFormsModule, 
  FormBuilder, 
  FormGroup, 
  FormArray, 
  Validators,
  AbstractControl 
} from '@angular/forms';
import { CompetitionService } from '../../shared/services/competition.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-team-registration',
  templateUrl: './team-registration.component.html',
  styleUrls: ['./team-registration.component.css']
})
export class TeamRegistrationComponent {
  registrationForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private competitionService: CompetitionService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      teamName: ['', [Validators.required, Validators.minLength(3)]],
      institution: ['', Validators.required],
      program: ['', Validators.required],
      members: this.fb.array([
        this.createMemberField()
      ], Validators.minLength(1))
    });
  }

  // Helper para crear campos de integrante
  private createMemberField(): AbstractControl {
    return this.fb.control('', [Validators.required, Validators.minLength(2)]);
  }

  get members(): FormArray {
    return this.registrationForm.get('members') as FormArray;
  }

  addMember(): void {
    this.members.push(this.createMemberField());
  }

  removeMember(index: number): void {
    if (this.members.length > 1) {
      this.members.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      this.errorMessage = 'Por favor complete todos los campos requeridos correctamente';
      return;
    }

    try {
      const formData = this.registrationForm.value;
      this.competitionService.registerTeam({
        teamName: formData.teamName,
        institution: formData.institution,
        program: formData.program,
        members: formData.members
      });

      this.successMessage = 'Equipo registrado exitosamente!';
      this.registrationForm.reset();
      this.members.clear();
      this.addMember(); // Asegurar que siempre haya al menos un campo

      // Opcional: Redirigir después de 2 segundos
      setTimeout(() => {
        this.router.navigate(['/problems/results']);
      }, 2000);

    } catch (error) {
      this.errorMessage = 'Error al registrar el equipo. Intente nuevamente.';
      console.error('Registration error:', error);
    }
  }

  // Método para mostrar errores de validación
  getErrorMessage(controlName: string, index?: number): string | null {
    const control = index !== undefined 
      ? this.members.at(index) 
      : this.registrationForm.get(controlName);

    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (control?.hasError('minlength')) {
      return `Mínimo ${control.errors?.['minlength'].requiredLength} caracteres`;
    }
    return null;
  }
}