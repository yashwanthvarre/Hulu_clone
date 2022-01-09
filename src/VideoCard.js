import React from 'react';
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";

const baseUrl = "https://image.tmdb.org/t/p/original/";
function VideoCard({movie}) {
    return (
        <div className="videoCard">
            <img 
            src ={`${baseUrl}${movie.backdrop_path || movie.poster_path}`} 
            />
            <TextTruncate
            line={1}
            truncateText="..." 
            text = {movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p>{movie.vote_count}</p>
        </div>
    )
}

export default VideoCard
