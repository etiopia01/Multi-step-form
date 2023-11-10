export function validName(name: string) {
	const nameRegex = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/

	return nameRegex.test(name)
}

export function validEmail(email: string) {
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

	return emailRegex.test(email)
}

export function validPhone(phone: string) {
	const numRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

	return numRegex.test(phone)
}

export function validate(value: string, idx: string) {
	switch (idx) {
		case 'name':
			return validName(value)

		case 'email':
			return validEmail(value)

		case 'phone':
			return validPhone(value)
	}
}
