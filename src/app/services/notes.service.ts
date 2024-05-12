import { Injectable } from "@angular/core";
import { Note } from '../types/notes.model';
import { delay, of } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class NotesService {
    getNotes(): Note[]{
        return [
            {
                id: 1,
                title: 'Nota 1',
                content: 'Conteúdo da nota 1',
                date: new Date(),
                color: 'yellow',
                pinned: true,
                archived: false,
                deleted: false
            },
            {
                id: 2,
                title: 'Nota 2',
                content: 'Conteúdo da nota 2',
                date: new Date(),
                color: 'blue',
                pinned: false,
                archived: false,
                deleted: false
            },
            {
                id: 3,
                title: 'Nota 3',
                content: 'Conteúdo da nota 3',
                date: new Date(),
                color: 'green',
                pinned: false,
                archived: false,
                deleted: false
            }
        ]
    }
    getNotesApi(){
        return of(this.getNotes())
        .pipe(delay(2000))
    }
    constructor() { }
}