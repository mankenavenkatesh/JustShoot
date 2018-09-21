import React from 'react';
import ShootingLocationContent from '../ShootingLocationContent';
import ShootingLocationImageSlider from '../ShootingLocationImageSlider';

class ShootingLocationPage extends React.Component {
  render() {
    console.log('Rendering Listings Grid');
    return (        
       <div>            
           <ShootingLocationImageSlider />
           <ShootingLocationContent />           
       </div>
    );
  }
}

export default ShootingLocationPage;