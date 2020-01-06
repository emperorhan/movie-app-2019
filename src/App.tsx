import React from "react";
import axios from "axios";
import Movie from "Movie";
import "./App.css";

interface IMovie {
    id: number;
    year: number;
    title: string;
    summary: string;
    medium_cover_image: string;
    genres: string[];
}
interface IState {
    isLoading: boolean;
    movies: IMovie[];
}

class App extends React.Component<{}, IState> {
    state: IState = {
        isLoading: true,
        movies: []
    };
    getMovieList = async () => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get(
            "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );
        this.setState({ movies, isLoading: false });
    };
    async componentDidMount() {
        this.getMovieList();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__test">loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default App;
