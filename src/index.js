// MODULES
import React from 'react';
import ReactDOM from 'react-dom';
// CUSTOM FILES
import * as serviceWorker from './serviceWorker';
// COMPONENTS
import NoteApp from './components/NoteApp';

ReactDOM.render(<NoteApp />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



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