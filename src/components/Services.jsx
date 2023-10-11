import ServiceCard from "./ServiceCard"
import PropTypes from 'prop-types'

import { serviceData } from "../data/data"
const Services = () => {
 
    return (
        <div className='mt-6 max-w-7xl mx-auto'>
       
            <div className=" flex flex-col md:flex-row w-full items-center justify-center  space-y-8 md:space-y-0 md:space-x-10 mb-5 pb-10">
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