import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import InfoForm from './pages/InfoForm'

function App() {
	return (
		<div className='container'>
			<Navbar />
			<div className='element'>
				<Routes>
					<Route path='/' element={<InfoForm />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
