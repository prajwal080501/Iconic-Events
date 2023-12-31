import Form from "./Form"

const Contact = () => {
    return (
        <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row p-3 space-x-5'>
            <div className="flex-1 bg-transparent">
                <Form />
            </div>
            <div className="flex-1 bg-white/10">
                Contact Details
            </div>
        </div>
    )
}

export default Contact