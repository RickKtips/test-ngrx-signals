import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "./app.state";
import { NoteReducer } from "./Notes/state/notes.reducer";

export const appReducers: ActionReducerMap<IAppState> = {
    notes: NoteReducer
}