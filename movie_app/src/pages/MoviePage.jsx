import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import MovieDetails from '../components/TMDB_API/MovieDetails';

function PageMovie() {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({})
    return (
        <div >
            <Header />
            <MovieDetails id={movieId} setData={setMovieDetails} />

        </div>
    );
}

export default PageMovie;



