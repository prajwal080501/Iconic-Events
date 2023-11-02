import logo from "../assets/Logo.png"
const Logo = () => {
    return (
        <div className="flex space-x-1 items-center">
            <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
            <h1 className='hidden lg:inline  lg:text-4xl text-white font-extrabold'>Iconic<span className="text-blue-500 ">Events</span></h1>
        </div>
    )
}

export default Logo