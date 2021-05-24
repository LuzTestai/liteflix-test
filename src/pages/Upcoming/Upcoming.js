import React from 'react'
import './Upcoming.css'
export const Upcoming = ({ upcoming }) => {
  return (
    <div class="wrap-movies">
      <h2 class="upcoming-text">Próximamente</h2>
      <div class="wrap-movies-row">
        {upcoming.map((movie, index) => (
          <div class="col-md-3 col-12 wrap-img" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
