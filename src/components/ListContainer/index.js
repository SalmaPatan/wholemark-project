import {useState, useContext, useEffect } from "react"
import context from '../PostContext/postContext'

const ListContainer=()=>{
    const{posts,setPosts}=useContext(context)
    const{filmsUrl,setFilms}=useContext(context)
    


    useEffect(()=>{
        
        const fetchedData=async()=>{
            const response=await fetch("https://swapi.dev/api/people/1")
            const data=await response.json()
            setPosts(data)
            console.log(data)
            // once we have data we access data.films and call each url and use setfilm method to set film
            {data.films.map(async(film)=>{
                const response=await fetch(film)
                const data=await response.json()
                // for every iteration adding response data into filmsUrl
                filmsUrl.push(data)
                setFilms([...filmsUrl])
            })}
           
        }
        fetchedData();
    },[setFilms,setPosts])

    return(
        <>
        <li>{posts.name}</li>
        <li>{posts.height}</li>
        <li>{posts.mass}</li>
        {posts?.films?.map((film)=>
        <li>{film}</li>)}
        <ul>
            {filmsUrl?.map((film)=><li>{film.title}</li>)}
        </ul>
        </>
        
    )
}
export default ListContainer