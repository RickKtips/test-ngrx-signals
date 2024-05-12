import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { NoteActions } from "./notes.actions";
import { NotesService } from "../../../services/notes.service";

export const searchNoteEffect = createEffect(
    (actions$ = inject(Actions), noteService = inject(NotesService)) =>{
        return actions$.pipe(
            ofType(NoteActions.getNotes),
            tap(()=> console.log('Efeito disparado')),
            switchMap(() =>  noteService.getNotesApi()
                .pipe(
                    map((notes) => {
                        return NoteActions.getNotesSuccess({notes});
                    }),
                    catchError((error) => {
                        return of(NoteActions.getNotesError({error}));
                    })
                )
            )
        )
    }, { functional: true } 
);