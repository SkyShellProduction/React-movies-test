import React, {Component} from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
const API_KEY = process.env.REACT_APP_API_KEY;
export default class Main extends Component {
    state = {
        movies: [],
        loading: true,
    }
    componentDidMount() {
        this.showMovies();
    }
    showMovies = (str = 'matrix', type = '') => {
        const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str ? str : 'matrix'}&type=${type !== 'all' ? type : ''}`;
        this.setState({loading: true})
        fetch(url)
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            this.setState({movies: res.Search, loading: false})
        })
    }
    render() {
        const {movies} = this.state;
        return (
            <main className="main content container">
                <Search handleSearch={this.showMovies}/>
                {!this.state.loading ? <Movies movies={movies} /> : <Preloader />}
            </main>
        )
    }
}