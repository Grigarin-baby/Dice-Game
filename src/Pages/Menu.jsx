  import React from "react";
  import dice from "../assets/dices 1.jpg";
  import { Link } from "react-router-dom";
  function Menu({Change}) {
    return (
      <div className="w-full min-h-screen flex justify-center  items-center  bg-white py-10">
        <div className="w-9/12  bg-white my-10   flex flex-col md:flex-row md:justify-center items-center">
          <div className="w-[200px]  ">
            <img className="w-full " src={dice} alt="Dice" />
          </div>
          <div className=" ">
            <div className=" w-full  pt-5 flex items-center flex-col">
              <h1 className=" text-black  font-bold mb-2 text-5xl">DICE GAME</h1>
              <Link to={"/Home"}>
              <button className="text-center  bg-black text-white border-2 border-black hover:bg-white hover:text-black  transition duration-300" >Play Now </button>
              </Link>
            </div>
        
          </div>
        </div>
      </div>
    );
  }

  export default Menu;
