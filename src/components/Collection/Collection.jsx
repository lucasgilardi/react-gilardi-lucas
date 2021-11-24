import React from 'react'
import './Collection.css';

const Collection = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item carousel-img1 active">
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carousel-title">DAY COLLECTION</h5>
              <p className="carousel-description">Check out our day collection. A 100% office ready!</p>
            </div>
          </div>

          <div className="carousel-item carousel-img2">
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div className="carousel-item carousel-img3">
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div className="carousel-item carousel-img4">
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carousel-title">NIGHT COLLECTION</h5>
              <p className="carousel-description">Check out our night collection. Classic go out outfits!</p>
            </div>
          </div>

          <div className="carousel-item carousel-img5">
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div className="carousel-item carousel-img6">
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default Collection
