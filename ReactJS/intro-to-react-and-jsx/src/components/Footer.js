const Footer = () => (
    <>
    <div className="contact_section_3">
          <div className="container">
            <div className="contact_taital">
              <div className="row web">
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="map_main">
                    <img src="images/map-icon.png" />
                    <span className="londan_text">London 145 United Kingdom</span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="map_main">
                    <img src="images/phone-icon.png" />
                    <span className="londan_text">+7586656566</span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="map_main">
                    <img src="images/email-icon.png" />
                    <span className="londan_text">demo@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact_product">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-2">
                  <div className="footer-logo"><img src="images/footer-logo.png" style={{maxWidth: '100%'}} /></div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <h1 className="useful_text">USEFUL LINK</h1>
                <div className="menu">
                  <ul>
                    <li><a href="#home"><img src="images/bulit-icon.png" style={{paddingRight: '10px'}} />Home</a></li>
                    <li><a href="#about"><img src="images/bulit-icon.png" style={{paddingRight: '10px'}} />About</a></li>
                    <li><a href="#service"><img src="images/bulit-icon.png" style={{paddingRight: '10px'}} />Services</a></li>
                    <li><a href="#contact"><img src="images/bulit-icon.png" style={{paddingRight: '10px'}} />Contact Us</a></li>
                  </ul>
                </div>	
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <h1 className="useful_text">PRODUCT</h1>
                  <div className="menu multi_column_menu">
                     <ul>
                      <li className="footer_menu"><a href="#"><img src="images/bulit-icon.png" className="footer_menu" />Webhosting</a></li>
                      <li className="footer_menu"><a href="#"><img src="images/bulit-icon.png" className="footer_menu" />Reseler Hosting</a></li>
                      <li className="footer_menu"><a href="#"><img src="images/bulit-icon.png" className="footer_menu" />VPS Hosting</a></li>
                      <li className="footer_menu"><a href="#"><img src="images/bulit-icon.png" className="footer_menu" />Wordpress Hosting</a></li>
                      <li className="footer_menu"><a href="#"><img src="images/bulit-icon.png" className="footer_menu" />Dedicated hosting</a></li>
                      <li className="footer_menu"><a href="#"><img src="images/bulit-icon.png" className="footer_menu" />Windows</a></li>
                     </ul>
                    </div>
                    <div className="input-group mb-3 margin-top-30">
                               <input type="text" className="form-control" placeholder="Enter you email" />
                               <div className="input-group-append">
                                  <button className="subsrcibe_bt" type="Subscribe"><a href="#">SUBSCRIBE</a></button>  
                               </div>
                            </div>
                </div>
              </div>
            </div>
            <div className="icon_main">
              <div className="row">
                <div className="col-sm-12">
                  <div className="menu_text">
                    <ul>
                       <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                       <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                       <li><a href="#"><img src="images/in-icon.png" /></a></li>
                       <li><a href="#"><img src="images/google-icon.png" /></a></li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    <div className="copyright_main">
        <div className="container">
        <p className="copy_text">© 2018 All Rights Reserved. <a href="https://html.design">Free Website Templates</a></p>
        </div>
    </div>
    
    </>
);

export default Footer;