import { IoMdCheckmark } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";
import { useEffect, useState } from "react";

const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBok = () => {
    setIsChecked(!isChecked);
  };

  // handle topping
  const handleTopping = () => {
    if (isChecked) {
      const newToppings = new Set([...additionalTopping, { ...topping }]);
      setAdditionalTopping(Array.from(newToppings));
      console.log(additionalTopping);
    } else {
      const newToppings = additionalTopping.filter((toppingObj) => {
        return toppingObj.name !== topping.name;
      });
      setAdditionalTopping(newToppings);
    }
  };

  useEffect(() => {
    handleTopping();
  }, [isChecked]);

  return (
    <div
      className={`${
        isChecked && " border-green-500"
      } w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative `}
    >
      <Image
        alt="image"
        src={topping.image}
        width={70}
        height={70}
        className=" mb-2"
      />
      {/* topping name */}
      <div className="  capitalize text-center text-sm font-medium">
        {topping.name}
      </div>
      {/* Checkbox */}
      <input
        className=" absolute w-full h-full opacity-0 cursor-pointer "
        type="radio"
        checked={isChecked}
        onClick={handleCheckBok}
      />
      <div
        className={`${
          isChecked ? " opacity-100" : " opacity-0"
        } absolute top-1 right-1`}
      >
        <IoMdCheckmarkCircleOutline className=" text-xl text-green-500" />
      </div>
    </div>
  );
};

export default Topping;
