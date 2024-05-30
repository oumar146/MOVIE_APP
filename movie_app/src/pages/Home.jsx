import React, { useState } from 'react';
import Header from '../components/Header';
<<<<<<< HEAD
import Banner from '../components/Banner';
import Movies from '../components/TMDB_API/Movies';
import MoviesCarousel from '../components/MoviesCarousel';
import '../styles/pages/home.css'

const ClassicMoviesCarousel = () => {
    const [classicMovies, setClassicMovies] = useState([]);

    return (
        <div>
            <Movies url='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' setData={setClassicMovies} />
            {classicMovies.length > 0 && <MoviesCarousel title='Classiques' moviesList={classicMovies} />}
        </div>
    );


}
const PopularMoviesCarousel = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    return (
        <div>
            <Movies url='https://api.themoviedb.org/3/trending/movie/day?language=en-US' setData={setPopularMovies} />
            {popularMovies.length > 0 && <MoviesCarousel title='Populaires' moviesList={popularMovies} />}
        </div>
    );


}

const TopRatedMoviesCarousel = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    return (
        <div>
            <Movies url='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1' setData={setTopRatedMovies} />
            {topRatedMovies.length > 0 && <MoviesCarousel title='Meilleures notes' moviesList={topRatedMovies} />}
        </div>
    );

}

const Home = () => {

    return (
        <div>
            <Banner>
                <Header />
            </Banner>
            <main className='home-carousels'>
                <ClassicMoviesCarousel />
                <TopRatedMoviesCarousel />
                <PopularMoviesCarousel />
            </main>

=======
import MovieByGenre from '../components/TMDB_API/MovieByGenre';
import MovieGenres from '../components/TMDB_API/MovieGenres';

function Home() {
    const [test, setTest] = useState([])
    return (
        <div>
            <Header />
            <MovieByGenre id='12' setData={setTest} />
>>>>>>> fetaure/TMDB-API
        </div>
    );
}

export default Home;
