import React from "react";
import "./Movie.css";

interface IMovieProps {
    id: number;
    year: number;
    title: string;
    summary: string;
    poster: string;
    genres: string[];
}

function Movie(props: IMovieProps) {
    return (
        <div className="movie">
            <img src={props.poster} alt={props.title} title={props.title} />
            <div className="movie__data">
                <h3 className="movie__title">{props.title}</h3>
                <h5 className="movie__year">{props.year}</h5>
                <ul className="movie__genres">
                    {props.genres.map((genre, index) => (
                        <li key={index} className="genres__genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                <p className="movie__summary">{props.summary.slice(0, 180)}...</p>
            </div>
        </div>
    );
}

export default Movie;
