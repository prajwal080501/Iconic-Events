import PropTypes from 'prop-types'
const SectionContainer = ({children, title, id}) => {
  return (
    <section id={id} className="bg-neutral-900 p-4 rounded-xl max-w-[90%] mt-10 mx-auto">
             <div className="flex space-x-5 py-3 items-center ">
                <hr className="border-b border-red-500 border-8 rounded-lg w-[5%]"/>
                <h1 className="text-4xl font-extrabold text-white text-center">{title}</h1>
            </div>
        {children}
    </section>
  )
}

SectionContainer.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default SectionContainer