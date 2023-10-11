import PropTypes from 'prop-types'


function ServiceCard({service}) {
    const {title, description, image} = service;
    return (
        <div className="relative h-fit w-[90%] lg:w-[30%] rounded-lg hover:opacity-60 duration-150 ease-linear hover:scale-105 cursor-pointer drop-shadow-lg">
            <img
                src={image}
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-xl font-bold text-white">{title}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    {description}
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white underline hover:text-red-500">
                    Explore &rarr;
                </button>
            </div>
        </div>
    )
}


ServiceCard.propTypes = {
    service: PropTypes.object.isRequired
}

export default ServiceCard;