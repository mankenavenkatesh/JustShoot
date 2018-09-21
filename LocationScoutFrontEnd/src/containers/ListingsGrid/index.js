import React from 'react';
import ListingsTitleBar from '../ListingsTitleBar/';
import ListingsGridContent from '../ListingsGridContent/';

class ListingsGrid extends React.Component {
  render() {
    console.log('Rendering Listings Grid');
    return (        
       <div>            
           <ListingsTitleBar />
           <ListingsGridContent />
       </div>
    );
  }
}

export default ListingsGrid;