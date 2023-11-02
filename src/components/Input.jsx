const Input = ({label, type, name, placeholder}) => {
    return (
        <div className="flex flex-col space-y-5">
            <label className="text-white font-medium" htmlFor={name}>{label}</label>
            <input autoComplete type={type} name={name} id={name} placeholder={placeholder} className="bg-black/80 focus:border-b  text-white w-full focus:outline-none focus:border-blue-500 duration-200 ease-linear outline-none p-3"/>
        </div>
    )
}

export default Input;