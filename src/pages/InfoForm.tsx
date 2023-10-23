export default function InfoForm() {
	return (
		<div className='form-main'>
			<h1>Personal Info</h1>
			<p>Please provide your name, email address and phone number</p>
			<form action='' className='info-form'>
				<div className='field'>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' />
				</div>
				<div className='field'>
					<label htmlFor='email'>E-mail address</label>
					<input type='text' id='email' />
				</div>
				<div className='field'>
					<label htmlFor='phone'>Phone Number</label>
					<input type='text' id='phone' />
				</div>
				<div className='next'>
					<button>Next Step</button>
				</div>
			</form>
		</div>
	)
}
