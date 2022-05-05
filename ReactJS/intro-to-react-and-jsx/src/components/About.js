import AboutCard from "./AboutCard";

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

                <AboutCard  
                title="Powerful Features"
                description="making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still "
                imageUrl="images/power-full-icon.png"
                isMark={true}
                />
                <AboutCard  
                title="Totaly Optimised"
                description="making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still "
                imageUrl="images/optimised-icon.png"
                isMark={false}

                />
                <AboutCard  
                title="Worldwide Support"
                description="making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still "
                imageUrl="images/headfone-icon.png"
                isMark={false}

                />
                
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

