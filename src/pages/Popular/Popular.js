import React from 'react'
import './Popular.css'
export const Popular = ({ popular }) => {
  return (
    <div class="popular-wrap">
      <h2 class="popular-text">Populares en Liteflix</h2>
      <div class="row">
        {popular.map((movie, index) => (
          <div class="col-3 wrap-img" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
