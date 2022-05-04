const About = () => (
    <>
       <div id="about" className="choose_section">
          <div className="container">
            <div className="col-sm-12">
              <h1 className="choose_text">Why you should <span className="color">choose us</span></h1>
              <p className="lorem_text">Making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover any web sites still</p>
            </div>
          </div>
        </div>
        
        <div className="choose_section_2">
          <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div className="power_full">
                    <div className="icon"><a href="#"><img src="images/power-full-icon.png" /></a></div>
                    <h2 className="powerful_text">Powerful Features</h2>
                    <p className="making_tetx">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
                  </div>
                  <div className="btn_main">
                      <button type="button" className="read_bt"><a href="#">Read More</a></button>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="power">
                    <div className="icon"><a href="#"><img src="images/optimised-icon.png" /></a></div>
                    <h2 className="totaly_text">Totaly Optimised</h2>
                    <p className="making">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
                  </div>
                  <div className="btn_main">
                      <button type="button" className="read_bt"><a href="#">Read More</a></button>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="power">
                    <div className="icon"><a href="#"><img src="images/headfone-icon.png" /></a></div>
                    <h2 className="totaly_text">Worldwide Support</h2>
                    <p className="making">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
                  </div>
                  <div className="btn_main">
                      <button type="button" role="button"  className="read_bt"><a href="#">Read More</a></button>
                  </div>
                </div>
              </div>    		
          </div>
        </div>
        
        <div className="about_main layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="images">
                  <img src="images/img-1.png" style={{maxWidth: '100%'}} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="right_section_main">
                  <h1 className="dolar_tetx"><strong style={{color: '#2ba879'}}>599.00* .com</strong></h1>
                  <h2 className="special_text">Special Offer For Limited Time. 30% Discount On All Hosting Plans</h2>
                  <p className="donec_text">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
                  <div className="right_aero"><img src="images/right-aerow.png" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
);

export default About;