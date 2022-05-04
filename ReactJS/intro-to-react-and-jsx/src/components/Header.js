const Header = () => (
    <>
     <header id="home"className="section">
        <div className="header_main">
             
             <div className="header">
                <div className="container">
                   <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                         <div className="full">
                            <div className="center-desk">
                               <div className="logo"><a href="#home"><img src="images/logo.png" style={{maxWidth: '100%'}} /></a> 
                               </div>
                            </div>
                         </div>
                      </div>
                      <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                         <div className="menu-area">
                            <div className="limit-box">
                               <nav className="main-menu">
                                  <ul className="menu-area-main">
                                     <li><a href="#home">Home</a></li>
                                     <li><a href="#about">About</a></li>
                                     <li><a href="#service">Service</a></li>
                                     <li><a href="#testimonial">Testimonial</a></li>
                                     <li><a href="#contact">Contact Us</a></li>
                                  </ul>
                               </nav>
                            </div>
                         </div>
                     </div>
                   </div>
                </div>
             </div>
             
          <section >
            <div className="bannen_inner">
                <div className="container">
                    <div className="row marginii">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="taital_main">
                            
                          </div>
                            <h1 className="web_text"><strong>Unlimited Web Hosting</strong></h1>
                            <p className="donec_text">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. 
                               Aenean dignissim pellentesque felis.Donec nec justo
                               eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                             <a className="get_bg" href="#" role="button">Get Started</a>
                             <a className="btn btn-lg btn-dark" href="about.html" role="button">Contact Us</a>
                        </div>
                     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                     <div className="img-box">
                        <figure><img src="images/woofer.png" alt="img" style={{maxWidth: '100%'}}/></figure>
                     </div>
                </div>
               </div>
               <div className="emaim-bt">
                 <div className="col-md-9 margin-0">
                <div className="input-group mb-3 margin-top-20">
                    <input type="text" className="form-control" placeholder="Enter domain name here" />
                <div className="input-group-append">
                    <button className="search_bt" type="Subscribe"><a href="#">Search</a></button>  
                </div>
                </div>           
            </div>
           </div>
         </div>
        </div>
        </section>
        </div>
      </header>
    </>
);

export default Header;