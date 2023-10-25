import { useState } from 'react'
import { PersonalInfo, Valid } from '../types'
import {
	validPhone,
	validEmail,
	validName,
	validate,
} from '../components/utils'
import { Link, useNavigate } from 'react-router-dom'

export default function InfoForm({
	sendInfo,
}: {
	sendInfo: (info: PersonalInfo) => void
}) {
	const [info, setInfo] = useState<PersonalInfo>({
		name: '.',
		email: '.',
		phone: '.',
	})
	const [valid, setValid] = useState<Valid>({
		name: true,
		email: true,
		phone: true,
	})

	const navigate = useNavigate()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (
			validName(info.name) &&
			validEmail(info.email) &&
			validPhone(info.phone)
		) {
			navigate('/plan')
		}

		localStorage.setItem('name', info.name)
		localStorage.setItem('email', info.email)
		localStorage.setItem('phone', info.phone)

		sendInfo(info)
	}
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInfo(prev => {
			return { ...prev, [e.target.name]: e.target.value }
		})
		setValid(prev => {
			return {
				...prev,
				[e.target.name]: validate(e.target.value, e.target.name),
			}
		})
	}

	return (
		<div className='form-main'>
			<h1>Personal Info</h1>
			<p>Please provide your name, email address and phone number</p>
			<form action='' className='info-form' onSubmit={handleSubmit}>
				<div className='field'>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' name='name' onBlur={handleChange} />
					{valid.name === false && <p id='not-valid'>name not valid</p>}
				</div>
				<div className='field'>
					<label htmlFor='email'>E-mail address</label>
					<input type='text' id='email' name='email' onBlur={handleChange} />
					{valid.email === false && <p id='not-valid'>email not valid</p>}
				</div>
				<div className='field'>
					<label htmlFor='phone'>Phone Number</label>
					<input type='text' id='phone' name='phone' onBlur={handleChange} />
					{valid.phone === false && (
						<p id='not-valid'>phone number not valid</p>
					)}
				</div>
				<div className='next'>
					<div></div>
					<button>Next Step</button>
				</div>
			</form>
		</div>
	)
}
