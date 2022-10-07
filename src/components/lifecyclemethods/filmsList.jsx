
import {Component} from "react";

class FilmsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            isLoading: true,
        };
    }

    getFilms(){
        fetch(" https://ghibliapi.herokuapp.com/films")
        .then(console.log((res) => res.json))
        .then((res) => res.json())
        .then((films) => this.setState({list: films}))
        .catch((err) => console.log(err));
    }

componentDidMount(){
    this.getFilms();
}

    render() {
        if (!this.state.isLoading) {
            return <p>Loading...</p>
        }

        return (
            <ul>
                {this.state.list.map((film) => (
                <li key={film.id}>{film.title}</li>
            ))}
        </ul>
        );
    }
}

export default FilmsList;