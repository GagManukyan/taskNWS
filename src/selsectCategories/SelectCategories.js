import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './selectCategories.css';

function SelectCategories() {
 const dispatch = useDispatch()
 const [selectOptions,setSelectOptions] = useState([])
 const [selectValue,setSelectValue] = useState()

 useEffect(()=> {
  fetch("https://api.thecatapi.com/v1/categories")
    .then(resolve=>resolve.json())
    .then(data =>setSelectOptions(data))
 } ,[])
 useEffect(()=>{
  if (selectValue !== undefined) {
    if (selectValue === "noCat") {
      dispatch({
        type:"changeCategori",
        payload:{
          id:0
        }
    })
    }else{
      for (let i = 0; i < selectOptions.length; i++) {
        if (selectOptions[i].name===selectValue) {
          dispatch({
              type:"changeCategori",
              payload:{
                id:selectOptions[i].id
              }
          })
        }
      }
    }
  }
},[selectValue])

  return (
    <div className="selectCategories">
        <h5 className='textSelect'>Categories</h5>
        <select onChange={(e) => {setSelectValue(e.target.value)}} name="" id="">
            <option id='0' value="noCat">no category</option>
            {selectOptions.map((e)=> {
              return <option id={e.id+""} key={e.id}>{e.name}</option>
            })}
        </select>
       
    </div>
  );
}

export default SelectCategories;
