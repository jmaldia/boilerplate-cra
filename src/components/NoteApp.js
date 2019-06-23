// MODULES
import React, { useEffect, useReducer } from 'react';
// CUSTOM FILES
import notesReducer from '../reducers/notes';
import NotesContext from '../context/notes-context';
// COMPONENTS
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';

const NoteApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, []);

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('myNotes'));
        if (notes) {
            dispatch({ type: 'POPULATE_NOTES', notes })
        }
    }, []);

    useEffect(() => {
        document.title = notes.length > 0 ? notes[0].title : 'Default';
        localStorage.setItem('myNotes', JSON.stringify(notes));
    }, [notes]);

    return (
        <NotesContext.Provider value={ { notes, dispatch } }>
            <h1>Notes</h1>
            <NoteList />
            <p>add note</p>
            <AddNoteForm />
        </NotesContext.Provider>
    )
}

export default NoteApp;