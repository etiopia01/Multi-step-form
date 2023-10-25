import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import InfoForm from './pages/InfoForm'
import SelectPlan from './pages/SelectPlan'
import { PersonalInfo } from './types'

function App() {
	const [personalInfo, setPersonalInfo] = useState<PersonalInfo>()
	const [plan, setPlan] = useState<string>('')
	const sendInfo = (data: PersonalInfo) => {
		setPersonalInfo(data)
	}
	const sendPlan = (data: string) => {
		setPlan(data)
	}
	return (
		<div className='container'>
			<Navbar />
			<div className='element'>
				<Routes>
					<Route path='/' element={<InfoForm sendInfo={sendInfo} />} />
					<Route path='/plan' element={<SelectPlan planPicker={sendPlan} />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
