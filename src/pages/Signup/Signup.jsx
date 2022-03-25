import { useState } from 'react';
import { Form, InputField, Button } from '../../components';
import './Signup.scss';
const Signup = () => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		birthday: '',
		password: '',
		confirmPassword: '',
	});

	const formFields = [
		{
			id: 1,
			name: 'username',
			placeholder: 'John Doe',
			errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
			label: 'Username',
			type: 'text',
			pattern: '^[A-Za-z0-9]{3,16}$',
			required: true,
		},

		{
			id: 2,
			name: 'email',
			placeholder: 'john@example.com',
			errorMessage: 'It should be a valid email address!',
			label: 'Email',
			type: 'email',
			required: true,
		},

		{
			id: 3,
			name: 'birthday',
			placeholder: 'Birthday',
			label: 'Birthday',
			type: 'date',
		},

		{
			id: 4,
			name: 'password',
			placeholder: 'Password',
			errorMessage: 'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character.',
			label: 'Password',
			type: 'password',
			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
			required: true,
		},

		{
			id: 5,
			name: 'confirmPassword',
			placeholder: 'Confirm Password',
			errorMessage: "Passwords don't match",
			label: 'Confirm Password',
			type: 'password',
			pattern: values.password,
			required: true,
		},
	];

	const handleSubmit = e => {
		e.preventDefault();
		console.log('submited!');
	};

	const onChange = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
		console.log(values);
	};

	return (
		<div className="signup-wrapper">
			<h1>Create Account</h1>
			<Form onSubmit={handleSubmit}>
				{formFields.map(field => (
					<InputField key={field.id} {...field} value={values[field.name]} onChange={onChange} />
				))}
				<Button variant="primary" label="Create Account" />
			</Form>
		</div>
	);
};

export default Signup;
