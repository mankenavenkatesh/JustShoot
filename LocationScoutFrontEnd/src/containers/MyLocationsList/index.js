
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {deleteLocation} from './../../actions/shootingLocationActions';

    class MyLocationsList extends React.Component {
        constructor(props){
             super(props);  
             console.log("In My Locations List");           
             console.log(this.props.myLocations);
        }

        render(){            
            var myLocationsList = this.props.myLocations.map(function(location){
                        return <li key={location.id}><div class="list-box-listing">
                        <div class="list-box-listing-img"><a href="#"><img src="/images/listing-item-01.jpg" alt="" /></a></div>
                        <div class="list-box-listing-content">
                            <div class="inner">
                                <h3><a href={location.id}>{location.locationName}</a></h3>
                                <span>964 School Street, New York</span>
                                <div class="star-rating" data-rating="3.5">
                                    <div class="rating-counter">(12 reviews)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div class="buttons-to-right">
                        <Link to= {'/dashboard/editLocation/'+location.id} class="button gray"><i class="sl sl-icon-note"></i> Edit</Link>                                                
                        {/* <a href="#" class="button gray"><i class="sl sl-icon-close"></i> Delete</a> */}
                        <div onClick={() => deleteLocation(location.locationOwner.id, location.id)} class="button gray"><i class="sl sl-icon-close"></i>Delete</div>
                    </div></li>;
                      })

            const emptyMessage = (<p>There are no games yet in your collection.</p>);
            // const myLocationsList = (<div className="ui four cards">hyiu</div>);
            
            return (
            <div>
                {this.props.myLocations.length == 0 ? emptyMessage : myLocationsList}
                
            </div>
            );
        }
    }
// export default MyLocationsList;
export default connect(null, {deleteLocation})(MyLocationsList);
