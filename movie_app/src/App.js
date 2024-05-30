import Home from './pages/Home';
import PageMovie from './pages/MoviePage';
import MoviesByGenres from './pages/MoviesByGenres';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie-page/:movieId" element={<PageMovie />} />
        <Route
          path="/movie-by-genre/:genreName/:genreId"
          element={<MoviesByGenres />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
