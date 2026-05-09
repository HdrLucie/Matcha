import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';
import { useState } from 'react';

function NameForm() {
	const [login, setLogin] = useState('');
	async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();
		try {
			console.log("TRY");
			const response = await fetch("/login", {
				method:"POST",
				body: JSON.stringify({
					name : login,
				}), 
			});
			if (!response.ok) {
				throw new Error('Erreur lors du fetch');
			}
			const data = await response.json();
			console.log(data);
			alert("Try");
		} catch (error) {
			console.log(error);
		}
	}

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setLogin(event.target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
		<label>
		Name:
			<input type="text" value={login} onChange={handleChange}/>
		</label>
		<input type="submit" value="Submit" />
		</form>
	);
}

export default function Register() {
	return (
		<div className="register-container">
		<h1>Register</h1>
		<NameForm />
		</div>
	);
}
