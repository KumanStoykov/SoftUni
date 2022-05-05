const AboutCard = ({
    imageUrl,
    title,
    description,
}) => (
    <div className="col-sm-4">
        <div className="power_full">
        <div className="icon"><a href="#"><img src={imageUrl} /></a></div>
        <h2 className="powerful_text">{title}</h2>
        <p className="making_tetx">{description}</p>
        </div>
        <div className="btn_main">
            <button type="button" className="read_bt"><a href="#">Read More</a></button>
        </div>
    </div>
);


export default AboutCard;

{/* <div className="col-sm-4">
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
                </div> */}