import style from './movieDetail.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { ACCESS_KEY } from '../config/constant';
import axios from 'axios';
function MovieDetailpage() {
    const [data2, setData2] = useState([]);
    console.log(data2);
    const { id } = useParams();
    const fetchApi = async () => {
        try {
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${ACCESS_KEY}`);
            const fetchData = await result.data;
            setData2(fetchData);
        } catch (error) {
            console.log("Fetching error", error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, [id]);

    return (
        <>
            {(
                <div key={data2.id} className={style.container}>
                    <div className={style.card}>
                        <img src={`https://image.tmdb.org/t/p/original/${data2.backdrop_path}`} alt="" />
                        <p>{data2.tagline}</p>
                        <p>{data2.overview}</p>
                        <p>Budget: {data2.budget?data2.budget:20034}</p>
                        <p>Popularity: {data2.popularity}</p>
                        <p>Relese Data: {data2.release_date}</p>
                        <p>Revenue: {data2.revenu ? data2.revenue: 7000}</p>
                        <p>Status: {data2.status}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default MovieDetailpage
