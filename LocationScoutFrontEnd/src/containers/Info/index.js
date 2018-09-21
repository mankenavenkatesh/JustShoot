import React from 'react';
class Info extends React.Component {
  render() {
    return (        
        <div class="container">

            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <h2 class="headline centered margin-top-80">
                        Plan The Vacation of Your Dreams 
                        <span class="margin-top-25">Explore some of the best tips from around the world from our partners and friends.  Discover some of the most popular listings in Sydney.</span>
                    </h2>
                </div>
            </div>

            <div class="row icons-container">                
                <div class="col-md-4">
                    <div class="icon-box-2 with-line">
                        <i class="im im-icon-Map2"></i>
                        <h3>Find Interesting Place</h3>
                        <p>Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis.</p>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <div class="icon-box-2 with-line">
                        <i class="im im-icon-Mail-withAtSign"></i>
                        <h3>Contact a Few Owners</h3>
                        <p>Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum metus nullam viverra porta purus.</p>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="icon-box-2">
                        <i class="im im-icon-Checked-User"></i>
                        <h3>Make a Reservation</h3>
                        <p>Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin feugiat pharetra consectetur.</p>
                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default Info;