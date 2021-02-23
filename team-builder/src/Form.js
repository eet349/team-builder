import { useState } from 'react';

export default function Form(props) {
	const initialFormState = {
		name: '',
		email: '',
		role: '',
	};
	const [formState, setFormState] = useState(initialFormState);

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const newMember = {
			name: formState.name.trim(),
			email: formState.email.trim(),
			role: formState.role.trim(),
		};
		if (!newMember.name || !newMember.email || !newMember.role) return;
		props.setTeam([...props.team, newMember]);
		setFormState(initialFormState);
	};

	return (
		<form onSubmit={handleSubmit} className='form'>
			<label>
				Name:
				<input
					type='text'
					name='name'
					value={formState.name}
					onChange={handleChange}
				/>
			</label>

			<label>
				Email:
				<input
					type='email'
					name='email'
					onChange={handleChange}
					value={formState.email}
				/>
			</label>
			<label>
				<select name='role' onChange={handleChange} value={formState.role}>
					<option value=''>---Select Role---</option>
					<option value='Frontend Engineer'>Frontend Engineer</option>
					<option value='Backend Engineer'>Backend Engineer</option>
					<option value='Fullstack Engineer'>Fullstack Engineer</option>
					<option value='UI/UX'>UI/UX</option>
				</select>
			</label>
			<input type='submit' onSubmit={handleSubmit} className='form-submit' />
		</form>
	);
}
