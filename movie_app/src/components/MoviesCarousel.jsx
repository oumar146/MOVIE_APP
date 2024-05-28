import Slider from "react-slick";
import '../styles/moviesCarousel.css'
const MoviesCarousel = (props) => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 500,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    centerMode: false,
                },
            },
            {
                breakpoint: 922,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    };
    return (
        <div>
            {props.moviesList.length > 0 && (
                <div>
                    <div >
                        {props.title && <h4 className="carousel-title">{props.title}</h4>}
                    </div>
                    <Slider {...settings} className="carousel">
                        {props.moviesList.map((movie) => (movie.poster_path &&
                            <div key={movie.id} className="movie-card">
                                <img
                                    src={`https://image.tmdb.org/t/p//w300/${movie.poster_path}`}
                                    alt=""
                                    title=""
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
        </div>
    );
}

export default MoviesCarousel;