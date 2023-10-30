import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import InfoForm from './pages/InfoForm'
import SelectPlan from './pages/SelectPlan'
import AddOns from './pages/AddOns'
import Summary from './pages/Summary'
import End from './pages/End'

function App() {
	useEffect(()=> {
		localStorage.clear()}, []
	)
	
	return (
		<div className='container'>
			<Navbar />
			<div className='element'>
				<Routes>
					<Route path='/' element={<InfoForm  />} />
					<Route path='/plan' element={<SelectPlan />} />
					<Route path='/addons' element={<AddOns />}/>
					<Route path='/summary' element={<Summary/>} />
					<Route path='/end' element={<End/>}/>
				</Routes>
			</div>
		</div>
	)
}

export default App
