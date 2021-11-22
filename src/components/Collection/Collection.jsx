import React from 'react'
import './Collection.css';

const Collection = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://res.cloudinary.com/dgsapxeyx/image/upload/v1637519341/dcollection1_bdmaii.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carousel-title">DAY COLLECTION</h5>
              <p className="carousel-description">Check out our day collection. A 100% office ready!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dgsapxeyx/image/upload/v1637519341/dcollection2_raet7b.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dgsapxeyx/image/upload/v1637519341/dcollection3_mbplii.jpg" className="d-block w-100" alt="..."/>
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
