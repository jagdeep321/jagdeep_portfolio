import jagdeep from"./jagdeep.jpg";
import Image from "next/image";
// "use client"

const Hero = ()=>{
    return(
 
  <div id="home">
    <div className="bigname">
      <h1 className="namejagdeep">Hi, I'm Jagdeep <br /> Jindal</h1>
      <h1 className="skill">I'm a Full Stack Developer </h1>
      <div className="mainbuttons">
        <a className="hire" href="#hire">Hire Me</a>
        <a className="view" href="#view">View work</a>

      </div>
    </div>

    <div className="mainimage">
      <Image className="bigimage" src={jagdeep} alt="" />
    </div>
  </div>

    )
}
export default Hero