// MODULES 
import React, { useContext } from 'react';
// CUSTOM FILES
import NotesContext from '../context/notes-context';
// COMPONENTS
import Note from './Note';

const NoteList = () => {
    const { notes } = useContext(NotesContext);

    return notes.map((note) => (
        <Note key={ note.title }  title={ note.title } body={ note.body } />
    ));
};

export default NoteList;