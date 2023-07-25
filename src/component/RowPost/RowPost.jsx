import React from 'react';
import './RowPost.css';
import { useEffect } from 'react';
import axios from 'axios';
import {api_key, image_url} from '../../constants/constants';
import { useState } from 'react';
import Youtube from 'react-youtube';

const RowPost = (props) => {

  const [movie, setMovie] = useState([]);
  const [url_Id , setUrl_Id] = useState('')

  useEffect(() => {
    axios.get(props.url).then(Response=>{
      setMovie(Response.data.results)
    }).catch(error=>{
      alert('Network error')
    })
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie =(id)=>{
    console.log(id)
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`).then(Response=>{
      if (Response.data.results.length !== 0) {
        setUrl_Id(Response.data.results[0])
      }else{
      console.log("Trailer not available");
      }
    })
  }

  return (
    <div className='row'>
      <h2 className='postTitle'>{props.title}</h2>
      <div className='posters'>

        {movie.map((movie)=>
        <img onClick={()=>handleMovie(movie.id)} src={`${image_url+movie.backdrop_path}`} className={props.isSmall ? 'smallPoster' : 'poster'} alt="poster" />
        )}

      </div>
      {url_Id && <Youtube opts={opts} videoId={url_Id.key}/>}
      
    </div>
  );
}

export default RowPost;
