// MODULES
import React, { useEffect, useReducer } from 'react';
// CUSTOM FILES
import notesReducer from '../reducers/notes';
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

    const removeNote = (title) => {
        dispatch({
            type: 'REMOVE_NOTE',
            title
        })
    };

    return (
        <div>
            <h1>Notes</h1>
            <NoteList notes={ notes } removeNote={ removeNote } />
            <p>add note</p>
            <AddNoteForm dispatch={ dispatch }/>
        </div>
    )
}

export default NoteApp;