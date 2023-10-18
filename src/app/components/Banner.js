"use client";
import Image from "next/image";
import {
  MouseParallaxContainer,
  MouseParallaxChild
} from "react-parallax-mouse";
const Banner = () => {
  return (
    <div className=" bg-primary bg-pattern lg:min-h-[768px] pt-16 lg:pt-16 ">
      {" "}
      <div className=" container mx-auto min-h-[768px] flex items-center justify-center ">
        <MouseParallaxContainer
          globalFactorX={0.3}
          globalFactorY={0.3}
          resetOnLeave
          className=" w-full flex flex-col lg:flex-row justify-between items-center"
        >
          <MouseParallaxChild factorX={0.2} factorY={0.3}>
            {" "}
            {/*  className=" flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6 text-white" */}{" "}
            <div className=" flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6 text-white">
              <div className="  flex-1">
                <div className=" font-bangers text-3xl lg:text-[32px] text-white ">
                  {" "}
                  Best Pizza...City{" "}
                </div>{" "}
              </div>{" "}
              <h1 className=" text-6xl lg:text-8xl font-bangers text-white drop-shadow-md">
                {" "}
                {/* Pizza perfection <br />
                                                                                                                                                                            in every bite */}
                Each bite of <br />
                pizza is flawless{" "}
              </h1>{" "}
            </div>{" "}
          </MouseParallaxChild>{" "}
          <MouseParallaxChild factorX={0.2} factorY={0.3} className=" relative">
            {" "}
            {/* Image */}{" "}
            <div className=" flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6">
              <div className=" flex-1 justify-end max-w-sm lg:max-w-max">
                <Image
                  alt="image"
                  src={"/pizza-banner.png"}
                  width={550}
                  height={558}
                  priority={1}
                />{" "}
              </div>{" "}
            </div>{" "}
            {/* Chilli img 1 */}{" "}
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.3}
              className=" absolute top-9 left-4 hidden xl:flex"
            >
              <Image alt="img" src={"/chilli-1.png"} width={140} height={70} />{" "}
            </MouseParallaxChild>{" "}
            {/* Chilli img 2 */}{" "}
            <MouseParallaxChild
              factorX={0.4}
              factorY={0.4}
              className=" absolute top-28 -left-4 hidden xl:flex"
            >
              <Image alt="img" src={"/chilli-2.png"} width={130} height={70} />{" "}
            </MouseParallaxChild>{" "}
            {/* Garlic img 1 */}{" "}
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.6}
              className=" absolute top-80 -left-14 hidden xl:flex"
            >
              <Image alt="img" src={"/garlic-1.png"} width={84} height={72} />{" "}
            </MouseParallaxChild>{" "}
            {/* Garlic img 2 */}{" "}
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.6}
              className=" absolute top-[22rem] -left-18 hidden xl:flex"
            >
              <Image alt="img" src={"/garlic-3.png"} width={100} height={72} />{" "}
            </MouseParallaxChild>{" "}
            {/* Garlic img 3 */}{" "}
            <MouseParallaxChild
              factorX={0.4}
              factorY={1}
              className=" absolute top-[25rem] -left-20 hidden xl:flex"
            >
              <Image alt="img" src={"/chilli-1.png"} width={130} height={72} />{" "}
            </MouseParallaxChild>{" "}
            {/* leaves */}{" "}
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.2}
              className=" absolute top-96 left-12 hidden xl:flex"
            >
              <Image alt="img" src={"/leaves.png"} width={180} height={72} />{" "}
            </MouseParallaxChild>{" "}
          </MouseParallaxChild>{" "}
        </MouseParallaxContainer>{" "}
      </div>{" "}
    </div>
  );
};

export default Banner;
