import PropTypes from 'prop-types'

const ServiceCard = ({ service }) => {
    const { title, image, description } = service
    return (
        <div className='relative hover:scale-110 hover:opacity-80 duration-200 ease-linear w-[30%] h-[50%] rounded-lg text-white'>
            <div>
                <img src={image} className="w-full rounded-lg brightness-[30%] h-full object-contain" alt="" />
            </div>
            <div className='absolute top-10 px-5'>
                <div className="flex flex-col space-y-8 justify-between"> <h1 className="text-3xl font-extrabold">{title}</h1>
                <p className="bg-white/10 leading-8  text-lg font-medium mt-2 p-2 rounded-lg">{description}</p>
               <div>
                <button className="text-lg bg-transparent hover:text-red-500 underline font-bold">Explore</button>
            </div>
                </div>
               
           
            </div>
        
        </div>
    )
}

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired
}

export default ServiceCard