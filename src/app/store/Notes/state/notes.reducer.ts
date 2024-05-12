import { create } from "domain";
import { Note } from "../../../types/notes.model";
import { NoteActions } from "./notes.actions";
import { createReducer, on } from "@ngrx/store";

enum NoteStatus{
    loading = 'loading',
    pending = 'pending',
    error = 'error',
    success = 'success'
}
export interface NotesState {
    notes: Note[];
    error: '' | null;
    status: NoteStatus; 
}

const initialState: NotesState = {
    notes: [],
    error: '',
    status: NoteStatus.pending
}

export const NoteReducer = createReducer(
initialState,
on(NoteActions.getNotes, (stateInitial) => {  
    return {
        ...stateInitial,
        status: NoteStatus.loading  
    }
 } ),
 on(NoteActions.getNotesSuccess, (stateInitial, { notes }) => {
    return {
        ...stateInitial,
        notes: notes,
        status: NoteStatus.success
   }
 }
),
on(NoteActions.addNote, (stateInitial, { note } ) => {
    const maxId = Math.max(...stateInitial.notes.map(n => n.id));
    const newNote = { id: maxId + 1, title:note.title, date:note.date, content: note.content};
    return {
        ...stateInitial,
        notes: [...stateInitial.notes, newNote],
        status: NoteStatus.success
   }
}
)

);