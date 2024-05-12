import { IAppState } from "../../app.state";

export const notesSelectors = 
(appState: IAppState) => appState.notes.notes;