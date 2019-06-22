import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const notesReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_NOTES': 
            return action.notes
        case 'ADD_NOTE':
            return [
                ...state,
                { title: action.title, body: action.body }
            ];
        case 'REMOVE_NOTE':
            return state.filter((note) => note.title !== action.title)
        default:
            return state;
    }
}

const NoteApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('myNotes'));
        if (notes) {
            dispatch({ type: 'POPULATE_NOTES', notes })
        }
    }, []);

    useEffect(() => {
        console.log('useEffect ran');
        document.title = notes.length > 0 ? notes[0].title : 'Default';
        localStorage.setItem('myNotes', JSON.stringify(notes));
    }, [notes]);

    const addNote = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_NOTE', title, body })
        setTitle('');
        setBody('');
    };

    const removeNote = (title) => {
        dispatch({
            type: 'REMOVE_NOTE',
            title
        })
    };

    return (
        <div>
            <h1>Notes</h1>
            {
                notes.map((note) => (
                    <Note key={ note.title }  title={ note.title } body={ note.body } removeNote={ removeNote } />
                ))
            }
            <p>add note</p>
            <form onSubmit={ addNote }>
                <input value={ title } placeholder="Title" onChange={ (e) => setTitle(e.target.value)} />
                <input value={ body } placeholder="Body" onChange={ (e) => setBody(e.target.value)} />
                <button>add note</button>
            </form>
        </div>
    )
}

const Note = ({ title, body, removeNote }) => {
    useEffect(() => {
        console.log('Inside Notes')

        return () => {
            console.log('Cleaning up effect!');
        }
    }, []);

    return (
        <div>
            <h3>{ title }</h3> 
            <p>{ body }</p> 
            <button onClick={ () => removeNote(title) }>delete</button>
        </div>
    );
}

// const App = (props) => {
//     const [count, setCount] = useState(props.count);
//     const [text, setText] = useState('')
//     // OLD METHODS
//     // const increment = () => {
//     //     setCount(count + 1)
//     // }

//     return (
//         <div> 
//             <p>The Current { text || 'count' } is { count }</p>
//             <button onClick={ () => setCount(count - 1) }>-1</button>
//             <button onClick={ () => setCount(props.count) }>reset</button>
//             <button onClick={ () => setCount(count + 1) }>+1</button>
//             <input value={ text } onChange={ (e) => setText(e.target.value) }/>
//         </div>
//     );
// }; 

ReactDOM.render(<NoteApp />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();