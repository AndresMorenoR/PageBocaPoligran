import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const FORMS_ROUTES: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./form-list/form-list.component').then(m => m.FormListComponent) 
  },
  { 
    path: 'create', 
    loadComponent: () => import('./form-builder/form-builder.component').then(m => m.FormBuilderComponent) 
  },
  { 
    path: 'edit/:id', 
    loadComponent: () => import('./form-builder/form-builder.component').then(m => m.FormBuilderComponent) 
  },
  { 
    path: 'view/:id', 
    loadComponent: () => import('./form-view/form-view.component').then(m => m.FormViewComponent) 
  },
  { 
    path: 'submissions/:id', 
    loadComponent: () => import('./form-submissions/form-submissions.component').then(m => m.FormSubmissionsComponent) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(FORMS_ROUTES)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }