import React from 'react';
import './Banner.css'
import { useEffect } from 'react';
import axios from 'axios';
import {api_key,image_url} from '../../constants/constants';
import { useState } from 'react';

const Banner = () => {
    const [movie, setMovie] = useState();
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`).then((Response)=>{
            setMovie(Response.data.results[2])
        })
    }, []);

  return (
    <div className='banner' style={{backgroundImage : `url(${movie ? image_url+movie.backdrop_path :""})`}}>
            <div className='content' >
                <h2 className='title'>{movie ? movie.title :""}</h2>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>
                    {movie ? movie.overview :""}
                </h1>
            </div>
        <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
