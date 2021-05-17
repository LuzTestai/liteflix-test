import React from 'react'
import './Upcoming.css'
export const Upcoming = ({ upcoming }) => {
  return (
    <div class="upcoming-wrap">
      <h2 class="upcoming-text">Próximamente</h2>
      <div class="row">
        {upcoming.map((movie, index) => (
          <div class="col-3 wrap-img" key={index}>
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
