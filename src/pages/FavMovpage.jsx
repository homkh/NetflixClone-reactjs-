import style from './favMovpage.module.css'
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
function FavMovpage() {
    const movieId = useSelector((state) => state.movie.movie_id)
    return (
        <>
            <div className={style.bgContainer}>
                <div className={style.logoSec}>
                    <NavLink to='/'><img className={style.logo} src={logo} alt="my_logo" /></NavLink>
                </div>
                <h4> Welcome to you Fav page! </h4>
                <span>
                    <div>
                        <p>Here are your favriouts</p>
                        <p>Movies list:</p>
                    </div>
                </span>
                <br />
                <br />
                {/* <div key={getId.id} className={style.posterSec} >
                    <img src={`https://image.tmdb.org/t/p/w500/${getId.poster_path}`} alt="movie_poster" />
                    <h4>{getId.title}</h4>
                    <p>Release Date : {getId.release_date}</p>
                    <p>MTB Rating : {getId.vote_average}</p>
                    <p>Language : {getId.original_language}</p>
                    <p>{(getId.overview)}....</p>
                </div> */}

                {/* <div className={style.card}>
                    < div className={style.posterSec} >
                        <img src={`https://image.tmdb.org/t/p/original/${numbers[3]}`} alt="movie_poster" />
                        <h4>{numbers[1]}</h4>
                        <p>Release Date : {numbers[4]}</p>
                        <p>MTB Rating : {numbers[2]}</p>
                        <p>Language : {numbers[5]}</p>
                        <p>{(numbers[6])}....</p>
                    </div>
                </div> */}

                <div className={style.movieContainer}>
                    {
                        movieId.length > 0 ?
                            movieId.map((numbers, index) => (
                                <div className={style.card} key={index}>
                                    <div className={style.posterSec} key={index}>
                                        <img src={`https://image.tmdb.org/t/p/original/${numbers.poster_path}`} alt="movie_poster" />
                                        <h4>{numbers.title}</h4>
                                        <p>Release Date: {numbers.release_date}</p>
                                        <p>MTB Rating: {numbers.mtb_rating}</p>
                                        <p>Language: {numbers.original_language}</p>
                                        <p>{numbers.overview}....</p>
                                    </div>
                                </div>
                            )) : 'You have not selectd any fav movies Yet....'
                    }
                </div>

            </div>
        </>
    )
}

export default FavMovpage
