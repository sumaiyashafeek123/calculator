import React, { useState } from "react";
import { FaDivide, FaMinus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaGripLines } from "react-icons/fa6";
import { LuDelete } from "react-icons/lu";
import { TbLetterC } from "react-icons/tb";
import { GrAdd } from "react-icons/gr";

function Cal() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleEqual = () => {
    try {
      setInput(eval(input));
      const formetted = Number(result).toFixed(5);
      setInput(parseFloat(formetted).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput(input.slice(0, -1));
  };

  const handleClearAll = () => {
    setInput("");
  };

  return (
    <>
      <div className="bg-gradient-to-b from-red-950 via-red-900 to-red-900 w-full h-screen flex justify-center items-center">
        <div className="bg-[#171314] w-2/6">
          <div className="w-full p-8 bg-[#171314] inset-shadow-sm inset-shadow-zinc-500 text-white text-3xl">
            <input type="text" value={input} />
          </div>
          <div className="grid grid-cols-4 gap-6 p-4">
            <div className="bg-[#171314] flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleClearAll("")}>
                <TbLetterC />
              </button>
            </div>
            <div className="bg-[#171314] flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleClick("-")}>
                <FaMinus />
              </button>
            </div>
            <div className="bg-[#171314] flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleClick("/")}>
                <FaDivide />
              </button>
            </div>
            <div className="bg-[#171314] flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleClear("")}>
                <LuDelete />
              </button>
            </div>
            <div className="bg-red-800 flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-600 hover:inset-shadow-red-50 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleClick("7")}>7</button>
            </div>
            <div className="bg-red-800 flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-600 hover:inset-shadow-red-50 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleClick("8")}>8</button>
            </div>
            <div className="bg-red-800 flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-600 hover:inset-shadow-red-50 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleClick("9")}>9</button>
            </div>
            <div className="bg-red-800 flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-600 hover:inset-shadow-red-50 hover:-translate-1 rounded-[15px] ">
              <button
                className=" font-semibold text-3xl text-white"
                onClick={() => handleClick("*")}
              >
                <RxCross2 />
              </button>
            </div>
            <div className="bg-red-800 flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-600 hover:inset-shadow-red-50 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleClick("4")}>4</button>
            </div>
            <div className="bg-red-800 flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-600 hover:inset-shadow-red-50 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleClick("5")}>5</button>
            </div>
            <div className="bg-red-800 flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-600 hover:inset-shadow-red-50 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleClick("6")}>6</button>
            </div>
            <div className="bg-red-800 flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-600 hover:inset-shadow-red-50 hover:-translate-1 rounded-[15px] text-3xl text-white font-extrabold">
              <button onClick={() => handleClick("+")}>
                <GrAdd />
              </button>
            </div>
            <div className="bg-red-800 flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-600 hover:inset-shadow-red-50 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleClick("1")}>1</button>
            </div>
            <div className="bg-red-800 flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-600 hover:inset-shadow-red-50 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleClick("2")}>2</button>
            </div>
            <div className="bg-red-800 flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-600 hover:inset-shadow-red-50 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleClick("3")}>3</button>
            </div>
            <div className="bg-red-800 row-span-2 flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-600 hover:inset-shadow-red-50 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleEqual("")}>
                <FaGripLines />
              </button>
            </div>
            <div className="bg-red-800 col-span-2 flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-600 hover:inset-shadow-red-50 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleClick("0")}>0</button>
            </div>
            <div className="bg-red-800 flex justify-center items-center p-6 inset-shadow-sm inset-shadow-zinc-600 hover:inset-shadow-red-50 hover:-translate-1 rounded-[15px] text-3xl text-white font-semibold">
              <button onClick={() => handleClick(".")}>.</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cal;
