import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

// "use client"

const Experience = ()=>{
    return(
   <div id="experience">
      <div className="experienceme">
        <h1 className="prof">💼 Professional Experience</h1>
      </div>

      <div className="experiencebottom">
        <div className="same experiencecart1">
          <div className="parentcart1">
            <h1 className="childcart1">Software Developer</h1>
            <div>
              <i className=" location fas fa-map-marker-alt"><FaMapMarkerAlt /></i>
              <label className="ksj">KSJ At Sirsa</label>
            </div>
            <div>
              <i className=" calender	far fa-calendar-alt"> <FaRegCalendarAlt /></i>
              <label className="present">FEB 2025 - PRESENT</label>
            </div>
          </div>
        </div>

        <div className="same experiencecart2">
          <div className="parentcart1">
            <h1 className="childcart1">Software Developer</h1>
            <div>
              <i className=" location fas fa-map-marker-alt"><FaMapMarkerAlt /> </i>
              <label className="ksj">PIP Trade, Delhi</label>
            </div>
            <div>
              <i className=" calender	far fa-calendar-alt"> <FaRegCalendarAlt /></i>
              <label className="present">FEB 2024 - FEB 2025</label>
            </div>
          </div>

        </div>
        <div className="same experiencecart3">

          <div className="parentcart1">
            <h1 className="childcart1">MERN STACK DEVELOPER</h1>
            <div>
              <i className=" location fas fa-map-marker-alt"> <FaMapMarkerAlt /> </i>
              <label className="ksj">Northline, Hyderabad</label>
            </div>
            <div>
              <i className=" calender	far fa-calendar-alt"><FaRegCalendarAlt /></i>
              <label className="present">AUG 2023 - FEB 2024</label>
            </div>
          </div>

        </div>
        <h1 className="education">🎓 Education</h1>
        <div className="same educationcart1">
          <div className="parentcart1">
            <h1 className="childcart1">METRICULATION</h1>
            <div>
              <i className=" location fas fa-map-marker-alt"> <FaMapMarkerAlt /></i>
              <label className="school">VIDYA BHARTI, MANSA</label>
            </div>
            <div>
              <i className=" calender	far fa-calendar-alt"><FaRegCalendarAlt /></i>
              <label className="period">APRIL 2019 - JULY 2020</label>
            </div>
          </div>
        </div>
        <div className="same educationcart2">

          <div className="parentcart1">
            <h1 className="childcart1">SENIOR SECONDARY</h1>
            <div>
              <i className=" location fas fa-map-marker-alt"> <FaMapMarkerAlt /></i>
              <label className="school">VIDYA BHARTI, MANSA</label>
            </div>
            <div>
              <i className=" calender	far fa-calendar-alt"><FaRegCalendarAlt /></i>
              <label className="period">APRIL 2021 - JULY 2022</label>
            </div>
          </div>

        </div>
        <div className="same educationcart3">
          <div className="parentcart1">
            <h1 className="childcart1">COMPUTER APPLICATIONS</h1>
            <div>
              <i className=" location fas fa-map-marker-alt"><FaMapMarkerAlt /></i>
              <label className="school">PUNJABI UNIVERSITY</label>
            </div>
            <div>
              <i className=" calender	far fa-calendar-alt"><FaRegCalendarAlt /></i>
              <label className="period">JULY 2023 - JULY 2026</label>
            </div>
          </div>


        </div>
      </div>
    </div>

    )
}
export default Experience