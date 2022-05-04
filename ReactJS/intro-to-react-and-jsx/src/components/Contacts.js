const Contacts = () => (
    <>
    <div id="contact" className="contact_section">
          <div className="container">
            <div className="col-sm-12">
              <h1 className="choose_text">Request A Call  Back</h1>
              <p className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
            </div>
          </div>
        </div>
        <div className="contact_section_2">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="input_main">
                           <div className="container">
                              <form action="/action_page.php">
                                <div className="form-group">
                                  <input type="text" className="email-bt" placeholder="Name" name="Name" />
                                </div>
                                <div className="form-group">
                                  <input type="text" className="email-bt" placeholder="Email" name="Email" />
                                </div>
                                <div className="form-group">
                                  <input type="text" className="email-bt" placeholder="Phone" name="Email" />
                                </div>
                                    <div className="form-group">
                                      <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="text"></textarea>
                                    </div>
                                </form>
                              
                           </div> 
                           <div className="send_btn">
                            <button type="button" className="main_bt"><a href="#">Send</a></button>
                           </div>                   
                        </div>
              </div>
              <div className="col-md-6">
                <div className="section_right">
                  <img src="images/img-2.png" style={{maxWidth: '100%'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
);

export default Contacts