import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import '../styles/index.css';


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
		<div className="register-container">
		<h1>Register</h1>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
		</div>
	);
}
