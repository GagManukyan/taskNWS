import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import './displayerPhotos.css';

function DisplayerPhotos() {
  const photoCategoriId = useSelector(state => state.categoriId)
  const photos = useSelector(state=> state.photos)
  const dispatch = useDispatch()
  const [amount,setAmount] = useState(1)
  useEffect(()=> {
    if (photoCategoriId !== null) {
      fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${photoCategoriId}`)
      .then(resolve=>resolve.json())
      .then(data => dispatch({
        type:"loadPhotos",
        payload:{
         photos:data
        }
    }))
    }
   },[photoCategoriId])
  useEffect(()=> {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${amount}&category_ids=${photoCategoriId}`)
      .then(resolve=>resolve.json())
      .then(data => data.map((e)=>{
        return dispatch({
          type:"getMorePhotos",
          payload:{
           photo:e
          }
      })
      }))
  },[amount])
  return (  
    <div>
      <div className="displayerPhotos">
      {photos.length >0 &&photos.map((e,i)=>{
        return <img key={i} className='img' src={e.url}/>
      })}
      </div>
      <button className='butt' onClick={()=>{setAmount(prev=>prev+1)}}>More</button>
    </div>
  );
}

export default DisplayerPhotos;
