import React, { useContext } from 'react';
// CUSTOM FILES
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({ title, body, removeNote }) => {
    const { dispatch } = useContext(NotesContext);
    const position = useMousePosition();
    
    return (
        <div>
            <h3>{ title }</h3> 
            <p>{ body }</p> 
            <p>{ position.x }, { position.y }</p>
            <button onClick={ () => dispatch({
                type: 'REMOVE_NOTE',
                title
            }) }>delete</button>
        </div>
    );
}

export default Note;