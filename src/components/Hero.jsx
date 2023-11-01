import video from "../assets/video.mp4";
import {AiOutlineArrowRight} from "react-icons/ai"
const Hero = () => {
    return (
        <div className='relative h-screen'>
            <video className="absolute inset-0 object-cover w-full h-full brightness-[20%]"  src={video} autoPlay loop muted></video>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center mt-10 lg:mt-0 flex flex-col space-y-5">
                    <p className="text-3xl lg:text-5xl font-bold text-white tracking-wider">
                        Crafting Moments, Creating Memories.
                    </p>
                    <p className="w-[90%] lg:w-1/2 mx-auto tracking-wider leading-normal text-xl lg:text-3xl font-bold text-gray-400">
                    Transforming Your Events into Unforgettable Experiences
                    </p>
                    <div>
                        <button className=" group hover:bg-white hover:text-black ring-2 ring-white text-white px-3 py-2 rounded-md duration-200 ease-linear font-bold hover:scale-105">
                            Explore
                            <span> 
                                <AiOutlineArrowRight className="inline-block ml-2 animate-pulse group:hover:text-blue-500 text-lg" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
