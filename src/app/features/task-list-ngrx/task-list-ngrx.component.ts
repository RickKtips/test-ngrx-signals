import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Note } from '../../types/notes.model';
import { NotesService } from '../../services/notes.service';
import { Store } from '@ngrx/store';
import { NoteActions } from '../../store/Notes/state/notes.actions';
import { notesSelectors } from '../../store/Notes/state/notes.selectors';
import { CommonModule } from '@angular/common';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-list-ngrx',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './task-list-ngrx.component.html',
  styleUrl: './task-list-ngrx.component.scss'
})
export class TaskListNgrxComponent implements OnInit {
  title = 'List Ngrx';
  notasService = inject(NotesService);
  store = inject(Store); 
  notes$ = this.store.select(notesSelectors);

  private formBuilderService = inject(NonNullableFormBuilder);
  protected form = this.formBuilderService.group({ 
    title: [''],
    content: ['', Validators.required],
    date:[now()]
  });

  ngOnInit(): void{ 
    this.store.dispatch(NoteActions.getNotes());
  }
  
  addNota(){
    const note: Note = {
      id: 0,
      title: this.form.value.title,
      content: this.form.value.content || '', 
      date: this.form.value.date 
    }
    this.store.dispatch(NoteActions.addNote({ note }));
    this.form.reset(); 
  }  
}

function now(): any {
  const date = new Date();
  const formattedDate = date.toLocaleDateString()
  return formattedDate;
}

