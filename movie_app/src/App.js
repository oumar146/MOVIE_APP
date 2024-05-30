import Home from './pages/Home';
import PageMovie from './pages/MoviePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global/app.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie-page/:movieId" element={<PageMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
