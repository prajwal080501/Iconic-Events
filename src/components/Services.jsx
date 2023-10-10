import ServiceCard from "./ServiceCard"
import PropTypes from 'prop-types'

import { serviceData } from "../data/data"
const Services = () => {
 
    return (
        <div className='mt-12 max-w-7xl mx-auto'>
            <div className="flex space-x-5 py-3 items-center ">
                <hr className="border-b border-red-500 border-8 rounded-lg w-[5%]"/>
                <h1 className="text-4xl font-extrabold text-white text-center">Our Services</h1>
            </div>
            <div className=" flex w-full items-center justify-center space-x-10 mb-5 pb-10">
                {
                    serviceData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))
                }
            </div>

        </div>
    )
}
Services.propTypes = {
    serviceData: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default Services