import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./single.css"
import { lang } from "../../lang/lang"



export const SingleList = ({til, setTil}) => {
    const [posts, setPosts] = useState([])
    const { name } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
      isLoading: true,
      data: [],
      isError: false,
    })

    useEffect(() => {
      fetch('https://restcountries.com/v3.1/name/' + name)
    .then(response => response.json())
    .then(json => setPosts(json[0]))
    }, [name]);

    return (
      <div className='container wrap'>
       
        <button className='btn btn-warning' onClick={() => navigate("/")}>{lang[til].back.base}</button>

        {posts.length !== 0 && 
        
        <div className='d-flex align-items-start justify-content-around'>
         <img src={posts.flags.svg} width="500" height="200" alt="" />
         <div className="text-wrap text-center">
            <h2 className='off'>{posts.name.official}</h2>
         <p className='fw-bold parag'>{lang[til].single.region}: <br />{posts.name.common}</p>
         <p className='fw-bold parag'>{lang[til].single.currency}: <br /> `{Object?.keys(posts.currencies)}`</p>
         <p className='fw-bold parag'>{lang[til].single.borders}: <br />{posts?.borders + ", "} </p>
         <p className='fw-bold parag'>{lang[til].single.languages}: <br /> `{Object?.values(posts.languages).join(", ", " ")} `</p>
         <p className='fw-bold parag'>{lang[til].single.subregion}: <br />`{posts.subregion}</p>

         </div>
        </div>
       
        }
      </div>
    )
}
