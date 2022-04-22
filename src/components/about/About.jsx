import "./about.css"
import fed from "../../img/fed.png"
/**import Award from "../../img/award.png";**/

const about = () => {
  return (
    <div className="a">
      <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={fed} alt="" 
            className="a-img"
            />
          </div>
      </div>
      <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
          Always exploring...</p>
          <p className="a-des">
            I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first. I have 3 years of
            Experience in UI and Graphic design - conceptualizing and crafting digital products and substantial experience in solution selling and new
            business development.</p>
        {/* <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
        <div className="a-award-text">
            <h4 className="a-award-title"> International Design</h4>
            <p className="a-award-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur tempore tempora nisi rem unde blanditiis cumque omnis ab quae?</p> 
        </div>
        </div> */}
      </div>
    </div>
  )
}

export default about
