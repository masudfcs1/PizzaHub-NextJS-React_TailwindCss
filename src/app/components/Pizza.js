"use client";
import { ImCross } from "react-icons/im";

import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import PizzaDetails from "./PizzaDetails";

Modal.setAppElement("body");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)"
  }
};

const Pizza = ({ pizza }) => {
  // console.log(pizza);
  const [modal, setmodal] = useState(false);

  const openModel = () => {
    setmodal(true);
  };

  const closeModel = () => {
    setmodal(false);
  };

  return (
    <div className=" group py-2 px-4 xl:py-4 xl:px-2 rounded-l-xl">
      <Image
        className=" lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
        width={270}
        height={270}
        onClick={openModel}
        src={pizza.image}
        alt=""
        priority={1}
      />{" "}
      <div onClick={openModel}>
        <div className=" text-xl font-bold mb-3 capitalize cursor-pointer">
          {" "}
          {pizza.name}{" "}
        </div>{" "}
      </div>{" "}
      <div className=" text-sm font-medium min-h-[60px] mb-6 ">
        {" "}
        {pizza.description}{" "}
      </div>{" "}
      <div className=" mb-6 flex items-center justify-between">
        <div className=" hidden lg:flex text-xl font-semibold">
          {" "}
          starts at {pizza.priceSm}{" "}
        </div>{" "}
        <button
          onClick={openModel}
          className=" hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm "
        >
          {" "}
          Choose{" "}
        </button>{" "}
        <button
          onClick={openModel}
          className=" btn btn-sm gradient text-sm lg:hidden px-3"
        >
          {" "}
          starts at {pizza.priceSm}{" "}
        </button>{" "}
      </div>{" "}
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModel}
          contentLabel="Pizza Modal"
          className=" bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none  "
        >
          <div
            onClick={closeModel}
            className="  absolute right-6 top-5 duration-200 hover:scale-110"
          >
            <ImCross
              onClick={closeModel}
              className=" cursor-pointer text-xl text-orange hover:text-red-600"
            />{" "}
          </div>{" "}
          {/* pizza details */}{" "}
          <PizzaDetails pizza={pizza} modal={modal} setmodal={setmodal} />{" "}
        </Modal>
      )}{" "}
    </div>
  );
};

export default Pizza;
