import React from 'react'
import './MovieDestaque.css'

export default function MovieDestaque({name,overview,img,nota,popularidade}) {
    return (
        <div className='apresentação' style={{
          backgroundSize:"cover",
          backgroundPosition:"center",
          backgroundImage:`url(https://image.tmdb.org/t/p/original${img})`
        }}>
          <div className='gradiente-vertical'>
            <div className='gradiente-horizontal'>
                  <div className='dados'>
                    <h1>{name}</h1>
                        <div className='notas'>
                          <strong className='media'>{nota}</strong>
                          <strong>{popularidade}</strong>
                        </div>
                  <p>{overview}</p>
                    <div className='btn'>
                     <a href={`https://www.youtube.com/results?search_query=${name}`}> Assistir</a>
                     <a href={`https://www.youtube.com/results?search_query=${name}`} className='lista'> Minha Lista</a>
                    </div>
                  </div>
                 
            </div>
          </div>
         
        </div>
    )
}
