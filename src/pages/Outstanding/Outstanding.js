import React from 'react'
import './Outstanding.css'
import svgPlay from '../../assets/svg/play.svg'
import svgPlus from '../../assets/svg/plus.svg'
export const Outstanding = () => {
  return (
    <div className="outstanding-wrap">
      <div class="outstanding-content">
        <div class="row d-flex flex-column align-items-start">
          <div class="col-md-5 col-12">
            <h1 class="original-liteflix">
              Original de <span>Literflix</span>
            </h1>
            <h2 class="title-outstanding">Kids at school</h2>
            <div class="row">
              <div class="col-md-10 col-12 d-flex justify-content-around mt-3">
                <button class="outstanding-btn">
                  <img src={svgPlay} alt="play" />
                  <p>Reproducir</p>
                </button>
                <button class="outstanding-btn">
                  <img src={svgPlus} alt="plus" />
                  <p>Mi Lista</p>
                </button>
              </div>
              <div class="col-2" />
            </div>
            <p class="see-seasson">
              <p> Ver temporada 1</p>
              Lorem ipsum dolor amet chicharrones dreamcatcher hammock bushwick
              hell of, ethical 3 wolf moon celiac neutra mumblecore four dollar
              toast. Slow-carb post-ironic kickstarter synth franzen.
            </p>
          </div>
          <div class="col-7" />
        </div>
      </div>
    </div>
  )
}
