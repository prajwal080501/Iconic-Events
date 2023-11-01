const Input = ({label, type, name, placeholder}) => {
    return (
        <div className="flex flex-col space-y-5">
            <label htmlFor={name}>{label}</label>
            <input className="input" type={type} name={name} id={name} placeholder={placeholder} className="bg-transparent border-b border-white text-white w-full focus:outline-none focus:border-blue-500"/>
        </div>
    )
}

export default Input;