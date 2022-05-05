const AboutCard = ({
  imageUrl,
  title,
  description,
  isMark
}) => {

  return (
    <div className="col-sm-4">
      <div className={isMark ? "power_full" : "power"}>
        <div className="icon"><a href="#"><img src={imageUrl} /></a></div>
        <h2 className={isMark ? "powerful_text" : "totaly_text"}>{title}</h2>
        <p className={isMark ? "making_tetx" : "making"}>{description}</p>
      </div>
      <div className="btn_main">
        <button type="button" className="read_bt"><a href="#">Read More</a></button>
      </div>
    </div>
  )
};


export default AboutCard;
