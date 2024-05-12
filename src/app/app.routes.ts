import { Routes } from '@angular/router';
import { TaskListNgrxComponent } from './features/task-list-ngrx/task-list-ngrx.component';

export const routes: Routes = [
    { path: '', component: TaskListNgrxComponent, },
      {
        path: 'list-ngrx',
        loadChildren: () => import('./features/task-list-ngrx/task-list-ngrx.component').then(m => m.TaskListNgrxComponent)
      },      
];
