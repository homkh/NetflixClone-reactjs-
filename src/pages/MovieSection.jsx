import style from './moviesection.module.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import sideLog from '../assets/sideLog.png';
import { useEffect, useState } from 'react';
import { ACCESS_KEY } from '../config/constant';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import favImg from '../assets/faviconList.png'
import { useDispatch } from 'react-redux';
import { storeId } from '../store/userSlice';

function MovieSection() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [data1, setData] = useState([]);
  // localStorage.setItem('Mov_id', getId);
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${ACCESS_KEY}`);
      setData(await response.data.results);
      console.log(data1);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  // function for the routhing pages with it's movie id
  const routh = (id) => {
    // <Link to = '/movie_details' />
    navigate(`/moviesec/${id}`)
  }
  //  function for re-direct to the fav pages
  const navtoFavpage = () => {
    navigate(`/moviesec/favPage`)
  }
  //  function for store data into store
  const addFav = (id) => {
    dispatch(storeId(id));
    alert("Successfully added to favorites list!")
  }
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.overlay}>
          <div className={style.logoSec}>
            <NavLink to='/'><img className={style.logo} src={logo} alt="my_logo" /></NavLink>
          </div>
          <div className={style.textSec}>
            <img src={sideLog} alt="side_logo" />
            <h1>STRANGER <br />THINGS</h1>
            <h5>#1 in the Tv Shows Today</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda provident. Lorem ipsum dolor sit.</p>
            <span>
              <button className={style.bt1} type="button">Play</button> <button className={style.bt2} type="button">+ Follow</button>
            </span>
          </div>
          <div className={style.favbutton}>
            {/* <NavLink to='favPag'><button type="button">fav movie list</button> </NavLink> */}
            <button onClick={navtoFavpage}>fav movie list <img src={favImg} alt="List_image" /></button>
          </div>
        </div>
      </div>
      <div className={style.watchMovie}>
        <p>Top Pick For You...</p>
        <div className={style.moviePost}>
          {
            data1.map((item) => {

              return (
                <div key={item.id} className={style.posterSec} >
                  <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="movie_poster" onClick={() => routh(item.id)} />
                  <h4>{item.title}</h4>
                  <p>Release Date : {item.release_date}</p>
                  <p>MTB Rating : {item.vote_average}</p>
                  <p>Language : {item.original_language}</p>
                  <p>{(item.overview).slice(0, 200)}....</p>
                  {/* <button type = 'button' onClick={() => addFav(item.id)}>+ Add to fav</button> */}
                  <button
                    type='button'
                    onClick={() => addFav({
                      id: item.id,
                      title: item.title,
                      mtb_rating: item.vote_average,
                      poster_path: item.poster_path,
                      release_date: item.release_date,
                      original_language: item.original_language,
                      overview: item.overview
                    })}
                  >
                    + Add to fav
                  </button>
                  {/* <button type = 'button' onClick={()=>dispatch(storeId(item.id))}>+ Add to fav</button> */}
                </div>
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default MovieSection
