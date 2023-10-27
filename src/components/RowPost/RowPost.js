import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY, imgUrl} from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [movies,setMovies] = useState([])
    const [urlId,setUrlId] = useState()
    useEffect(()=>{
        axios.get(props.url).then(response=>{
            console.log('data',response.data);
            setMovies(response.data.results)
        }).catch(err=>{
          console.log('eeeeerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',err);
            // alert('Network error')
        })
    },[])
    console.log('movies',movies);

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
//when we are click the image - pass a id
    const handleMovie = (id)=>{
      console.log(id);
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data);

        if(response.data.results.length !== 0){
          setUrlId(response.data.results[0])
          // the trilers are in the 0th element
        }else{
          console.log('array empty');
        }
      })

    }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>

            <img onClick={()=> handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imgUrl + obj.backdrop_path}`} alt="poster" />

        )}
        
      </div>
      
      {urlId &&  <Youtube opts={opts} videoId={urlId.key} />}
    </div>
    //we have urlId here so when we are click only that time go to there  so in that way there is value
    //we didn't click there is no value (urlId) that time we don't want to show this.
  )
}

export default RowPost
