import React from 'react';

const Note = ({ title, body, removeNote }) => {
    return (
        <div>
            <h3>{ title }</h3> 
            <p>{ body }</p> 
            <button onClick={ () => removeNote(title) }>delete</button>
        </div>
    );
}

export default Note;