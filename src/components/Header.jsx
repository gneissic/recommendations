
import Button from "../UI/Button";
import ImgBanner from "../assets/hero-2.png";
import { Fragment } from "react";


const Header = () => {
 

  return (
    <Fragment>
      
      <div className=" bg-blue-500 flex justify-between items-center pt-3 ">
      <p className="font-bold font-pops tracking-wide text-md bg-blue-500 text-start pl-3 py-2   text-white">
          <span className="text-red-900 text-md">Nuclear</span> Recommendations
        </p>
        <Button  className="pr-4 bg-red-900 border-red-900 rounded-md py-2 px-4  text-white text-semibold mr-3" />
      </div>
      <div className="relative">
        <div className="bg-purple-500 w-[100vw]">
        <p className=" text-white bg-blue-500 text-center py-5 pt-[4rem] text-2xl font-pops tracking-wide ">
          Discover music gems! Dive into a world of undiscovered talent and
          support small-time musicians on their journey to the spotlight. 
        </p>
          <img
            className="w-[100%] bg-gradient-to-b  from-blue-500 h-[63vh]"
            src={ImgBanner}
            alt=""
          />
        </div>
       
        <div className="w-[90%]  mx-auto ">

        </div>
      </div>
      
    </Fragment>
  );
};

export default Header;
