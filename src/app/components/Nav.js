import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className=" absolute w-full py-4 ">
      <div className=" container mx-auto flex flex-col lg:flex-row gap-y-3 justify-between items-center">
        <Link href="/" className=" max-w-[160px] lg:max-w-max">
          {" "}
          <div>
            <Image alt="image" src={"/logo-2.png"} width={80} height={50} />
          </div>
        </Link>{" "}
        {/* Phone & Cart */}
        <div className=" text-white flex gap-x-8 items-center">
          {/* Phone */}
          <div className=" flex gap-x-3 items-center">
            <Image
              alt="image"
              src={"/telephone-1.png"}
              width={47}
              height={47}
            />
            <div className=" text-white">
              {" "}
              <div className=" text-white font-robotoCondensed  font-medium leading-none text-sm">
                {/* <span className=" font-bold space-x-4">24/7</span> Pizza
                Delivery Service */}
                24/7 Order Pizza Online
              </div>
              <div className=" text-2xl font-robotoCondensed font-extrabold leading-none tracking-wide">
                01722539108
              </div>
            </div>
          </div>
          {/* Cart */}
          <div className=" relative cursor-pointer hidden lg:flex">
            <Image alt="image" width={50} height={50} src={"/bag-1.png"} />
            {/* amount */}
            <div className=" bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1 font-bold ">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
