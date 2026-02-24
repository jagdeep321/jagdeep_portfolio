// "use client"
import { Anchor, Stack } from "@mantine/core";
import jagdeep from "./jagdeep.jpg";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { IoMenu, IoClose, IoHome, IoPerson, IoCodeSlash, IoBriefcase, IoFolderOpen, IoConstruct, IoCall, IoBook } from "react-icons/io5";
const Navbar = ()=>{

   const isMd = useMediaQuery('(max-width: 600px)');
  const [showMenu, setShowMenu] = useState(true)
    return(

      <>
 <div className="box">
    <div className="dp">
      <Image className="jagdeep" src={jagdeep} alt="" />
    </div>
    <h1 className="navname">Jagdeep Jindal</h1>


        {isMd ? showMenu ? <IoMenu size={40}  onClick={() => setShowMenu(false)} color={"white"}  /> : <IoClose size={40}  onClick={() => setShowMenu(true)} color="white" style={{zIndex:123}} /> :   <div className="navbar">
      {/* <a className="homenav" href="#home">Home</a>
      <a className="link" href="#about">About</a>
      <a className="link" href="#skills">Skills</a>
      <a className="link" href="#experience">Experience</a>
      <a className="link" href="#work">Work</a>
      <a className="link" href="#services">Services</a>
      <a className="link" href="#contact">Contact</a>
      <a className="link" href="#blogs">Blogs</a> */}


      <Anchor className="homenav" href="#home">Home</Anchor>
      <Anchor className="link" href="#about">About</Anchor>
      <Anchor className="link" href="#skills">Skills</Anchor>
      <Anchor className="link" href="#experience">Experience</Anchor>
      <Anchor className="link" href="#work">Work</Anchor>
      <Anchor className="link" href="#services">Services</Anchor>
      <Anchor className="link" href="#contact">Contact</Anchor>
      <Anchor className="link" href="#blogs">Blogs</Anchor>
    </div>

}
  {/* {isMd && !showMenu &&   <Stack w={"100%"} bg={"#1b2737"} c={"white"} mih={"100vh"} gap={20} style={{position:"absolute", top:"0", }} >
      <Anchor className="homenav" href="#home">Home</Anchor>
      <Anchor className="link" href="#about">About</Anchor>
      <Anchor className="link" href="#skills">Skills</Anchor>
      <Anchor className="link" href="#experience">Experience</Anchor>
      <Anchor className="link" href="#work">Work</Anchor>
      <Anchor className="link" href="#services">Services</Anchor>
      <Anchor className="link" href="#contact">Contact</Anchor>
      <Anchor className="link" href="#blogs">Blogs</Anchor>
      </Stack>} */}


     {isMd && !showMenu && (
  <Stack
    w="100%"
    mih="100vh"
    justify="center"
    align="center"
    gap={28}
    px="xl"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      background: "linear-gradient(135deg, #141e30, #243b55)",
      backdropFilter: "blur(8px)",
      // zIndex: 1000,
    }}
  >
    <Anchor href="#home" underline="never" fw={600} size="xl" c="white"
      onClick={() => setShowMenu(true)}
      style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <IoHome size={20} /> Home
    </Anchor>

    <Anchor href="#about" underline="never" fw={500} size="lg" c="gray.2"
      onClick={() => setShowMenu(true)}
      style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <IoPerson size={20} /> About
    </Anchor>

    <Anchor href="#skills" underline="never" fw={500} size="lg" c="gray.2"
      onClick={() => setShowMenu(true)}
      style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <IoCodeSlash size={20} /> Skills
    </Anchor>

    <Anchor href="#experience" underline="never" fw={500} size="lg" c="gray.2"
      onClick={() => setShowMenu(true)}
      style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <IoBriefcase size={20} /> Experience
    </Anchor>

    <Anchor href="#work" underline="never" fw={500} size="lg" c="gray.2"
      onClick={() => setShowMenu(true)}
      style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <IoFolderOpen size={20} /> Work
    </Anchor>

    <Anchor href="#services" underline="never" fw={500} size="lg" c="gray.2"
      onClick={() => setShowMenu(true)}
      style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <IoConstruct size={20} /> Services
    </Anchor>

    <Anchor href="#contact" underline="never" fw={500} size="lg" c="gray.2"
      onClick={() => setShowMenu(true)}
      style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <IoCall size={20} /> Contact
    </Anchor>

    <Anchor href="#blogs" underline="never" fw={500} size="lg" c="gray.2"
      onClick={() => setShowMenu(true)}
      style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <IoBook size={20} /> Blogs
    </Anchor>
  </Stack>
)}






  </div>
  </>
    )
}
export default Navbar