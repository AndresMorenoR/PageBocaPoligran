import { Routes } from '@angular/router';
import { FormListComponent } from './form-list/form-list.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormViewComponent } from './form-view/form-view.component';
import { FormSubmissionsComponent } from './form-submissions/form-submissions.component';


export const FORMS_ROUTES: Routes = [
    { 
      path: '', 
      loadComponent: () => import('./form-list/form-list.component').then(m => m.FormListComponent) 
    },
    { 
      path: 'builder', 
      loadComponent: () => import('./form-builder/form-builder.component').then(m => m.FormBuilderComponent) 
    },
    { 
      path: 'view', 
      loadComponent: () => import('./form-view/form-view.component').then(m => m.FormViewComponent) 
    },
    { 
      path: 'submissions', 
      loadComponent: () => import('./form-submissions/form-submissions.component').then(m => m.FormSubmissionsComponent) 
    },
    { 
      path: 'team-registration', 
      loadComponent: () => import('./team-registration/team-registration.component').then(m =>m.TeamRegistrationComponent)
    },
    { 
      path: 'tests-registration', 
      loadComponent: () => import ('./test-registration/test-registration.component').then(m =>m.TestRegistrationComponent)
    },
    { 
      path: '', 
      redirectTo: 'team-registration', 
      pathMatch: 'full' 
    }
  ];

