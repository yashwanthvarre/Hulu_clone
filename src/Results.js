import React ,{useState,useEffect} from 'react';
import "./Results.css";
import VideoCard from './VideoCard.js';
import axios from './axios';
import Requests from './Requests';

function Results() {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get(Requests.fetchComedeyMovies);
            setMovies(request.data.results);
            return request
        }
        fetchData();
    },[])

    return (
        <div className = "results">

            {movies.map((movie) =>(
                <VideoCard movie = {movie}/>

            ))}
            
        </div>
    )
}

export default Results
