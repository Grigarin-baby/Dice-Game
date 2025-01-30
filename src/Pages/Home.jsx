import React, { useEffect, useState } from "react";

import img1 from "../assets/dice_1.jpg";
import img2 from "../assets/dice_2.jpg";
import img3 from "../assets/dice_3.jpg";
import img4 from "../assets/dice_4.jpg";
import img5 from "../assets/dice_5.jpg";
import img6 from "../assets/dice_6.jpg";
import { useNavigate } from "react-router-dom";
import Rule from "../components/Rule";

const Home = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    const userConfirm = window.confirm(
      "Are you aure you want to go to the Main menu? All the Progress will be lost"
    );
    if (userConfirm) {
      navigate("/");
    }
  };
  // Nav prop
  const array = [1, 2, 3, 4, 5, 6];
  const [number, setNumber] = useState(0);
  const [Tscore, setTScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [roll, setRoll] = useState(false);
  const [rule, setRule] = useState(false);
  const [show, setShow] = useState(false);

  const handleDice = () => {
    if (selected) {
      setValue(getRandomDiceValue());
      setRoll(true);
    } else {
      setShow(true);
    }
  };

  // nav prop end
  const [value, setValue] = useState(0);
  const [reset, setReset] = useState(false);
  useEffect(() => {
    if (roll) {
      if (value == selected) {
        setTScore((prev) => prev + selected);
      } else {
        setSelected(null);
        setTScore((prev)=>prev-2);
      }
    }
  }, [value, roll]);
  const handleSelection = (value) => {
    setSelected(value);
  };

  const Reseter = () => {
    setTScore(0); // Reset total score
    setSelected(null); // Clear selection
    setValue(0); // Reset dice value
    setHasRolled(false);
  };

  const getRandomDiceValue = () => Math.floor(Math.random() * 6) + 1;

  const diceImages = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="min-h-screen w-screen bg-white border-green-500">
      {console.log(value)}
      {console.log(selected)}
      <nav className="flex flex-col md:flex-row container  items-center justify-between px-10 list-none border-blue-800">
        <div className="pt-10 font-semibold">
          <li className="text-7xl text-center pointer-events-none transition transform duration-200">
            {Tscore}
          </li>
          <li className="text-2xl pointer-events-none">Total Score</li>
        </div>
        {console.log(show)}
        <div>
          <div className="flex pt-10 flex-col  gap-2">
            {show ? (
              <h2 className="text-red-700  pointer-events-none">
                Number not selected!
              </h2>
            ) : (
              ""
            )}
            <div className="grid grid-cols-6 gap-2">

            {array.map((value, i) => (
              <div
              key={i}
              onClick={() => {
                handleSelection(value);
                if (selected != null) {
                  setShow(false);
                }
              }}
              className={`cursor-pointer hover:scale-110 flex justify-center items-center hover:text-white hover:bg-black transition transform duration-200 ${
                selected === value
                ? "w-12 h-12 border-2 border-black text-center  bg-black text-white"
                : "w-12  h-12 border-2 border-black text-center "
              }`}
              >
                {value}
              </div>
            ))}
            </div>
          </div>
          <div>
            <div className="text-xl flex justify-center md:justify-end pt-5 font-bold pointer-events-none">
              Select a number
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-white h-2/3 flex items-center justify-center">
        <div className="w-full">
          <div className="w-[250px] mx-auto">
            <img
              onClick={() => {
                handleDice();
                subAdder();
              }}
              className="cursor-pointer w-full h-full border-green-500 active:scale-110 transition transform duration-200"
              src={diceImages[value - 1] || img1}
              alt={`Dice ${value || 1}`}
            />
          </div>
          <div className="w-[300px] mx-auto bg-white flex flex-col gap-5 items-center">
            <div className="text-center text-2xl font-semibold  pointer-events-none">
              Click on Dice to roll
            </div>
            <button
              className="h-12 text-white w-9/12 rounded-none bg-black hover:bg-red-500 transition transform duration-200 hover:scale-110 hover:text-white hover: "
              onClick={Reseter}
            >
              Reset Score
            </button>
            <button onClick={()=>{
              setRule((prev)=>!prev)
            }} className="h-12 text-white bg-black border-black w-9/12 rounded-none hover:scale-110 hover:bg-white transition transform duration-200 hover:text-black ">
              Show Rules
            </button>
            

            <button
              onClick={handleBackClick}
              className="h-12 text-white bg-black border-black w-9/12 rounded-none hover:scale-110 hover:bg-white transition transform duration-200 hover:text-black"
            >
              Back
            </button>
          </div>
          {rule?<Rule></Rule>:""}
        </div>
      </div>
    </div>
  );
};

export default Home;
