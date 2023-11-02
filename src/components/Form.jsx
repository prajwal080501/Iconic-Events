import Input from "./Input";

const Form = () => {
    return (
        <form className="w-[90%] mx-auto flex flex-col space-y-5" action="">
            <Input type="text" label="Name" placeholder="Name" name="name" />
            <Input type="text" label="Email" placeholder="Email" name="email" />
        </form>
    )
}

export default Form;