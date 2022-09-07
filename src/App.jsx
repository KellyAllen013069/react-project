import {Component} from "react";
import './App.css';

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
            <h1>Hey Y'all</h1>
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
          </header>
        </div>
      );
    }
  }