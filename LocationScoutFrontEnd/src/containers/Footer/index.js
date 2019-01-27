import React from "react";
import { Route, Link } from "react-router-dom";
import Backtotop from "../Backtotop/";
import sessionApi from "../../api/SessionApi";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senderName: "Enter Your Name",
      senderEmail: "Enter Your Email Address",
      emailSubject: "",
      emailBody: "Enter Query here...",
      status : ""      
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  sendEmail() {
    sessionApi.sendEmail(this.state)
      .then(response => {
        debugger
        if (response.status == "200") {          
          this.setState({ status: "Email Sent Successfully" });
          this.setState({ senderName: "Enter Your Name" });
          this.setState({ senderEmail: "Enter Your Email Address" });
          this.setState({ emailBody: "Enter Query here..." });
        }
      })
      .catch(error => {
        this.setState({ status: "Email Sent Failed" });
        console.log(error);
      });
  }

  onSubmit(e) {
    debugger
    e.preventDefault();
    this.sendEmail();
  }

  render() {
    return (
      <div id="footer" className="dark">
        {/* Main */}
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-6">
              <h4>Just Shoot</h4>
              <p>
                Justshoot is a marketplace for Shooting locations. Location Owners can enroll, add their shooting locations, manage the availability of locations etc. Location Scouters can search the desired location, find facilities of a location, book the location etc.
              </p>
            </div>
           
            <div className="col-md-6  col-sm-12">
              <h4>Contact Us</h4>
              <div>
              {/* <span>JustShootNow</span> <br />
              <span>Kondapur, Hyderabad</span> <br /> */}
                {/* Phone:  <span>8880746896 </span> <br />
                E-Mail:  <span>justshootnow.info@gmail.com </span> <br />     */}
                <form onSubmit={this.onSubmit}>              
                 <input type="text" class="input-text" name="senderName" id="senderName" value={this.state.senderName} onChange={this.onChange} />                                                                                                        
                 <input class="input-text" type="text" name="senderEmail" id="senderEmail" value={this.state.senderEmail} onChange={this.onChange} />                                                                            
                 <textarea rows="4" cols="50" name="emailBody" value={this.state.emailBody}  onChange={this.onChange} ></textarea>                 
                  {/* <input type="submit"  />    */}
                  <div className="form-group">
                  <input
                    type="submit"
                    class="button border fw margin-top-10"
                    name="sendMail"
                    value="Send Email"
                  />
                </div>                 
                </form>
                <span>{this.state.status}</span>
                {/* <span>
                  {"justshootnow.info@gmail.com "}
                  <a href="#">
                    <span
                      className="__cf_email__"
                      data-cfemail="137c75757a707653766b727e637f763d707c7e"
                    >
                      [justshootnow.info@gmail.com]
                    </span>
                  </a>{" "}
                </span> */}                            
                  {/* <a href="#email-dialog" class="button border with-icon sign-in popup-with-zoom-anim"> Send Email </a><br />  */}

              </div>
              <ul className="social-icons margin-top-20">
                <li>
                  <a className="facebook" href="https://www.facebook.com/justshootnow/?eid=ARCkOX2FoRUqI3tyCdob8efggucK4EDzVoeCq6CHPw2kSAE9tN4y-HJxTvKbyu6X9BBjdJsT4erpI70c">
                    <i className="icon-facebook" />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="icon-twitter" />
                  </a>
                </li>
                <li>
                  <a className="gplus" href="https://plus.google.com/u/2/discover">
                    <i className="icon-gplus" />
                  </a>
                </li>
                <li>
                  <a className="youtube" href="#">
                    <i className="icon-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Copyright */}
          <div className="row">
            <div className="col-md-12">
              <div className="copyrights">
                © 2019 justshootnow. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
