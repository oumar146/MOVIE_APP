import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import MovieDetails from '../components/TMDB_API/MovieDetails';
import '../styles/pageMovie.css'


const Detail = (props) => {

    const movie = props.movieDetails

    return (<div>
        {movie &&
            <div className='horizontal-alignment content movie-page-container'>
                {/***Affichage de l'image du film*/}
                <img
                    src={`https://image.tmdb.org/t/p//w300/${movie.poster_path}`}
                    alt={`${movie.title}`}
                />
                <div >
                    {/***Affichage du nom */}
                    <h2 className='movie-title'>{movie.name ? movie.name : movie.title}</h2>
                    <div className='notation-and-date'>
                        {/***Affichage de la date de sortie */}
                        <span>
                            {movie.release_date && movie.release_date.substr(0, 4)}
                        </span>
                        {/***Affichage de la note moyenne*/}
                        <strong>
                            {movie.vote_average &&
                                (Number.isInteger(
                                    parseFloat(Math.round(movie.vote_average * 10) / 10)
                                )
                                    ? `${parseFloat(Math.round(movie.vote_average * 10) / 10)}.0`
                                    : parseFloat(Math.round(movie.vote_average * 10) / 10))}
                        </strong>
                    </div>
                    {/***Affichage du/des genre(s) */}
                    {movie.genres && Array.isArray(movie.genres) &&
                        <p>{movie.genres.map((genre) => genre.name).join(', ')}</p>}


                    {/***Affichage du résumé */}
                    <p className='overview'>
                        {movie.overview && movie.overview}
                    </p>
                </div>
            </div>}
    </div>)
}


const PageMovie = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({})
    const [backgroundImageStyle, setBackgroundImageStyle] = useState({})


    useEffect(() => {
        movieDetails &&
            setBackgroundImageStyle({
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), #181818), url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
                height: '100vh',
            })

    }, [movieDetails])


    return (
        <div id='movie-page' style={backgroundImageStyle}>
            <Header />
            <MovieDetails id={movieId} setData={setMovieDetails} />
            <Detail movieDetails={movieDetails} />
        </div>
    );
}



export default PageMovie;



