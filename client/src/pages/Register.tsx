import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

type Inputs = {
	example: string
	exampleRequired: string
}

export default function Register() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit = (data: Inputs) => console.log(data);

	console.log(watch("example"))
	return (
		<div className="container mt-5">
		<h1>Register</h1>

		<form onSubmit={handleSubmit(onSubmit)}>
		{/* register your input into the hook by invoking the "register" function */}
		<input defaultValue="test" {...register("example")} />

		{/* include validation with required or other standard HTML validation rules */}
		<input {...register("exampleRequired", { required: true })} />
		{/* errors will return when field validation fails  */}
		{errors.exampleRequired && <span>This field is required</span>}

		<input type="submit" />
		</form>
		</div>
	);
}
