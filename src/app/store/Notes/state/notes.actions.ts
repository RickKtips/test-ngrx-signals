import { createAction, props } from "@ngrx/store";
import { Note } from "../../../types/notes.model";   

const getNotes = createAction('[Notes] Get Notes');
const getNotesSuccess = createAction('[Notes] Get Notes Success', props<{ notes: Note[]}>());
const getNotesError = createAction('[Notes] Get Notes Error', props<{ error: any }>());
const addNote = createAction('[Notes] adicionar nota', props<{note: Note}>());
  
export const NoteActions = {   
    getNotes,
    getNotesSuccess,
    addNote,
    getNotesError
} 