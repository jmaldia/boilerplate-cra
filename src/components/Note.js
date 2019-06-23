import React, { useContext } from 'react';
// CUSTOM FILES
import NotesContext from '../context/notes-context';



const Note = ({ title, body, removeNote }) => {
    const { dispatch } = useContext(NotesContext);
    
    return (
        <div>
            <h3>{ title }</h3> 
            <p>{ body }</p> 
            <button onClick={ () => dispatch({
                type: 'REMOVE_NOTE',
                title
            }) }>delete</button>
        </div>
    );
}

export default Note;