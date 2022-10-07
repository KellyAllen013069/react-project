import {Component} from "react";
import './App.css';
import FilmsList from "./components/lifecyclemethods/filmsList";
console.log("in right 2nd place");

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list : ["ready", "set", "GO"],    
            text : "",
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let newArr = [...this.state.list, this.state.text];
        this.setState({list: newArr, text: ""});
    
    }
   

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Here???</h1>
            {/*controlled input*/}
            <form onSubmit={this.onSubmit}>
              <input 
                  value = {this.state.text} 
                  onChange = {(e) => {this.setState({text: e.target.value})}}
              >
              </input>
              <button type="submit">Add</button>
          </form>
            <ul>
            {this.state.list.map((item,idx) => {
              return <li key={idx}>{item}</li>;
              })}
            </ul>
            <FilmsList />
            <hr/>
          </header>
        </div>
      );
    }
  }