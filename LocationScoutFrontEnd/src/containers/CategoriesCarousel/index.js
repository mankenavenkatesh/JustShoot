import { Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

class CategoriesCarousel extends Component {
  render() {    
    return (           
        <div class="fullwidth-carousel-container margin-top-25">
            <div class="fullwidth-slick-carousel category-carousel">
        
                <div class="fw-carousel-item">
        
                    <div class="category-box-container half">
                        <a href="listings-half-screen-map-grid-1.html" class="category-box" data-background-image="images/category-box-01.jpg">
                            <div class="category-box-content">
                                <h3>Hotels</h3>
                                <span>64 listings</span>
                            </div>
                            <span class="category-box-btn">Browse</span>
                        </a>
                    </div>
        
                    <div class="category-box-container half">
                        <a href="listings-half-screen-map-grid-1.html" class="category-box" data-background-image="images/category-box-02.jpg">
                            <div class="category-box-content">
                                <h3>Shops</h3>
                                <span>14 listings</span>
                            </div>
                            <span class="category-box-btn">Browse</span>
                        </a>
                    </div>
                </div>
        
                <div class="fw-carousel-item">
                    <div class="category-box-container">
                        <a href="listings-half-screen-map-grid-1.html" class="category-box" data-background-image="images/category-box-03.jpg">
                            <div class="category-box-content">
                                <h3>Events</h3>
                                <span>67 listings</span>
                            </div>
                            <span class="category-box-btn">Browse</span>
                        </a>
                    </div>
                </div>
        
                <div class="fw-carousel-item">
                    <div class="category-box-container">
                        <a href="listings-half-screen-map-grid-1.html" class="category-box" data-background-image="images/category-box-04.jpg">
                            <div class="category-box-content">
                                <h3>Fitness</h3>
                                <span>27 listings</span>
                            </div>
                            <span class="category-box-btn">Browse</span>
                        </a>
                    </div>
                </div>
        
                <div class="fw-carousel-item">
                    <div class="category-box-container">
                        <a href="listings-half-screen-map-list.html" class="category-box" data-background-image="images/category-box-05.jpg">
                            <div class="category-box-content">
                                <h3>Nightlife</h3>
                                <span>22 listings</span>
                            </div>
                            <span class="category-box-btn">Browse</span>
                        </a>
                    </div>
                </div>
                        
                <div class="fw-carousel-item">
                    <div class="category-box-container">
                        <a href="listings-half-screen-map-list.html" class="category-box" data-background-image="images/category-box-06.jpg">
                            <div class="category-box-content">
                                <h3>Eat & Drink</h3>
                                <span>130 listings</span>
                            </div>
                            <span class="category-box-btn">Browse</span>
                        </a>
                    </div>
                </div>
        
            </div>
        </div>
    );
  }
}

export default CategoriesCarousel;
