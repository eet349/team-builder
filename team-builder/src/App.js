import './App.css';
import { useState } from 'react';
import Form from './Form';

const teamMembersList = [
	{
		name: 'Joyce',
		email: 'joyce@dogol.com',
		role: 'UI/UX',
	},
	{
		name: 'Javi',
		email: 'javi@iscool.com',
		role: 'Fullstack Engineer',
	},
	{
		name: 'John',
		email: 'john@barr.com',
		role: 'Frontend Engineer',
	},
	{
		name: 'Ethan',
		email: 'ethan@trevino.tech',
		role: 'Backend Engineer',
	},
];

function App() {
	const [team, setTeam] = useState(teamMembersList);

	const renderTeam = () => {
		return team.map((member) => (
			<div className='member-container' key={member.email}>
				<h2>{member.name}</h2>
				<div className='member-info'>
					<h3>email: {member.email}</h3>
					<h3>role: {member.role}</h3>
				</div>
			</div>
		));
	};
	return (
		<div className='App'>
			<div className='members-list'>{renderTeam()}</div>
			<Form setTeam={setTeam} team={team} />
		</div>
	);
}

export default App;
