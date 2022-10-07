import {useState} from "react";
import './App.css';
import FilmsList from "./components/hooks/filmsList";

function App(props) {
   let [list, setList] = useState(["ready", "set", "GO"]);
   let [text, setText] = useState("");


    function onSumbit(e) {
        e.preventDefault();

        let newItems = [...list, text];
        setList(newItems);
        setText("");
    }


    return (
        <div className="App">
            <header className="App-header">
            <h1>Hooks Exercise</h1>
            {/*controlled input*/}
            <form onSubmit={onSumbit}>
                <input 
                    value = {text} 
                    onChange = {(e) => setText(e.target.value)}
                >
                </input>
                <button type="submit">Add</button>
            </form>
            <ul>
            {list.map((item,idx) => {
                return <li key={idx}>{item}</li>;
                })}
            </ul>
            <FilmsList />
            <hr/>
            </header>
        </div>
    );
}
export default App;