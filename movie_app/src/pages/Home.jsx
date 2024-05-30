import React, { useState } from 'react';
import Header from '../components/Header';
import MovieByGenre from '../components/TMDB_API/MovieByGenre';
import MovieGenres from '../components/TMDB_API/MovieGenres';

function Home() {
    const [test, setTest] = useState([])
    return (
        <div>
            <Header />
            <MovieByGenre id='12' setData={setTest} />
        </div>
    );
}

export default Home;
