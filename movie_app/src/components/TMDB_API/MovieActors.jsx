import { useEffect } from 'react'
const { API_KEY_TMDB } = require('../../config.json');

/*Ce composant à besoins des props suivant : id = id du film et setData = fonction pour changer la valeur d'un state */
const MovieActors = (props) => {

    useEffect(() => {

        if (!props.id) return
        async function fetchData() {

            const response = await fetch(`http://api.themoviedb.org/3/movie/${props.id}/casts?api_key=${API_KEY_TMDB}`
                , {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGZlMWE3NmE1OTNhMDM3MjkzMDJjZjYwMjFkOTBmNiIsInN1YiI6IjY1Zjg0MjM4MjQyZjk0MDE0YWNiZjdlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5mtu4B_VHotv_hLuQmZMulDs1D9kOsXegXppk36-UbA',
                    },
                })
            const data = await response.json()
            props.setData(data.cast)
        }

        fetchData()

    }, [props.id])



    return (
        <div>

        </div>
    )

}

export default MovieActors