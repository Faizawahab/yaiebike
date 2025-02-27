import React from "react"


const Navbar = () => {
  return (
    <div>

      <div className=" bg-[#1a1f71] flex justify-between pr-28 h-16 items-center text-white">
        <div className="w-[15vw] p-14 ml-10 ">
          {/* <Link to='/'><img src={logo1} alt="img" /></Link> */}
          E BIKE
        </div>
        <nav className="space-x-10 ml-96">
          <a href="/">Home</a>
          <a href="#service">Service</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        
      </div>
    </div>
  )
}

export default Navbar