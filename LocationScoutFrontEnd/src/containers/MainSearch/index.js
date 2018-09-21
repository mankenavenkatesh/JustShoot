import { Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

class MainSearch extends Component {
  render() {    
    return (
                 

        <div class="main-search-container" data-background-image="images/main-search-background-01.jpg">
            <div class="main-search-inner">
        
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Just Shoot</h2>
                            <h4>Explore Shooting Locations, Costumes, Equipments </h4>
        
                            <div class="main-search-input">
        
                                <div class="main-search-input-item location">
                                    <input type="text" placeholder="Location" value=""/>
                                    <a href="#"><i class="fa fa-dot-circle-o"></i></a>
                                </div>

                                <div class="main-search-input-item">
                                    {/* <input type="text" placeholder="What are you looking for?" value="" /> */}
                                    <select data-placeholder="Listings" class="chosen-select" >
                                        <option>Listings</option>	
                                        <option>Shooting Locations</option>	
                                        <option>Costumes</option>
                                        <option>Equipments</option>                                        
                                    </select>
                                </div>                                    
        
                                <div class="main-search-input-item">
                                    <select data-placeholder="All Categories" class="chosen-select" >
                                        <option>All Categories</option>	
                                        <option>Shops</option>
                                        <option>Hotels</option>
                                        <option>Restaurants</option>
                                        <option>Fitness</option>
                                        <option>Events</option>
                                    </select>
                                </div>
                                {/* <a href="listings-grid-with-sidebar-1.html">Search</a> */}
                                <button class="button" onclick="window.location.href='listings-grid-with-sidebar-1.html'">Search</button>
                                
				                    {/* <a href="listings-grid-with-sidebar-1.html" class="button border margin-top-10">Search</a> */}
			                    
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
        
 

    );
  }
}

export default MainSearch;
