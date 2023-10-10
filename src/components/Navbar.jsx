import { menuItems } from "../data/data"
import PropTypes from 'prop-types'
const Navbar = () => {
    
  return (
    <nav className='absolute z-10 w-screen px-3 py-6 top-0 flex items-center justify-evenly'>
        <div>
            <h1 className='text-4xl text-white font-extrabold'>Iconic<span className="text-blue-500 ">Events</span></h1>
        </div>
        <div>
            <ul className='flex justify-center'>
                {menuItems.map((item) => (
                    <li key={item.id} className='mx-5 text-lg font-bold hover:bg-white hover:text-black cursor-pointer px-3 py-2 rounded-lg duration-200 transition-all text-white uppercase'>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <button className="bg-fuchsia-600 rounded-md hover:bg-purple-600 duration-200 ease-linear hover:scale-105 text-white font-bold text-lg px-3 py-2 ">Contact Us</button>
        </div>
    </nav>
  )
}

// propTypes 


Navbar.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Navbar