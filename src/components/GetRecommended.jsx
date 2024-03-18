import Button from "../UI/Button";
import heroImg from "../assets/hero-banner-3.png";


const GetRecommended = () => {
  return (
    <div className="bg-purple-500">
        <p className=" pb-5 text-3xl font-semibold font-pops  pt-[5rem] text-white text-center bg-purple-500">Play Music based On Your Taste</p>
       <img className=" pt-[4rem]" src={heroImg} alt="" />
       <p className="text-lg font-semibold font-pops text-white pt-5 w-[95%] mx-auto">Play Music Based On Some data. Music will be recommended and shared to you to listen Based on your choice.</p>
       <Button className="bg-red-900 text-white font-semibold border-red-900 rounded-md ml-[8rem] my-[4rem] py-3 px-6 text-lg" />
    </div>
  )
}

export default GetRecommended