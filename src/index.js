import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {
    // console.log(localStorage.getItem('notes'))
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('myNotes'));
        if (notesData) {
            setNotes(notesData);
        }
    }, []);

    useEffect(() => {
        console.log('useEffect ran');
        document.title = notes.length > 0 ? notes[0].title : 'Default';
        localStorage.setItem('myNotes', JSON.stringify(notes));
    }, [notes]);

    const addNote = (e) => {
        e.preventDefault();
        setNotes([
            ...notes,
            { title, body }
        ]);
        setTitle('');
        setBody('');
    }

    const removeNote = (title) => {
        setNotes(notes.filter((note) => note.title !== title))
    }

    return (
        <div>
            <h1>Notes</h1>
            {
                notes.map((note) => (
                    <div key={ note.title } >
                        <h3>{ note.title }</h3> 
                        <p>{ note.body }</p> 
                        <button onClick={ () => removeNote(note.title) }>delete</button>
                    </div>
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