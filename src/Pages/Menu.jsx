import React from "react";
import dice from "../assets/dices 1.jpg";
import { Link } from "react-router-dom";
function Menu({Change}) {
  return (
    <div className="w-screen h-screen flex justify-center  items-center  bg-white py-10">
      <div className="w-9/12 h-3/4 bg-white my-10 flex justify-between">
        <div className="w-1/2 h-5/6">
          <img className="w-full h-full" src={dice} alt="Dice" />
        </div>
        <div className="bg- flex-1 ">
          <div className="h-full w-full  pt-20 ">
            <h1 className=" text-black mt-32 font-bold mb-2 text-8xl">DICE GAME</h1>
            <Link to={"/Home"}>
            <button className="text-center w-1/2 bg-black text-white border-2 border-black hover:bg-white hover:text-black  transition duration-300" >Play Now </button>
            </Link>
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default Menu;
