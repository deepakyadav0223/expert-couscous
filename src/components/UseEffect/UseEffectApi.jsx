import React, { useEffect, useState } from 'react'
import '../button.css'

const UseEffectApi = () => {
    let localstorage= JSON.parse(localStorage.getItem("liked"));
    var data ;
    if(localstorage === null ||localstorage === undefined) data = {}
    else data = localstorage
    const [liked, setliked] = useState(data);
    const [photos, setphotos] = useState([]);
    const getPhotos = async () => {
        const res = await fetch("https://api.nasa.gov/planetary/apod?count=21&api_key=pmkgcgkzck3CnogJrYNzsVpG0tZzjWgiw2Dbba1p");

        const data = await res.json();
        //console.log(data);
        setphotos(data);
        //localStorage.setItem("liked", data);
    }

    useEffect(() => {
        getPhotos();

    }, [])

    const liking = (e) => {
        let a ={};
         
         if(e.target.value in  liked){
            const copyOfObject = { ...liked }
            delete copyOfObject[e.target.value]
            
            setliked({
              ...copyOfObject
            })
            localStorage.setItem("liked" , JSON.stringify(liked))
            return;
         }
         a[e.target.value] = "true";
        setliked({
            ...liked ,
            ...a

        })
        
        localStorage.setItem("liked" , JSON.stringify(liked))
        

    }
   // console.log(liked)
    localStorage.setItem("liked" , JSON.stringify(liked))

    return (
        <>
            {
                photos.map((index) => {
                    return (
                        <div key={index.title}>
                            <div className="card mb-3 container my-4" style={{ backgroundColor: '#F0F0F0' }} key={index.title}>
                                <img src={index.hdurl} className="card-img-top" alt='' />
                                <div className="card-body">
                                    <h5 className="card-title">{index.title}  - {index.date} </h5>
                                    <p className="card-text">{index.explanation}</p>
                                    <button style={{ border: 'none' }} type="button" value= {index.title} className="button" onClick={liking}>
                                    {index.title in  liked  ? "UnLike 👎" : "Like 👍"}
                                        </button>

                                </div>
                            </div>
                            </div>
                            )
            }
            )
        }



                        </>
                    )
                }

export default UseEffectApi
