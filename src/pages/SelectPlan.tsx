import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function SelectPlan() {
	const [selected, setSelected] = useState<string[]>(["",""])

	const navigate = useNavigate()

	
const planPicker= ()=> {
	const planObj = {"title": selected[0], "price":selected[1]}
	localStorage.setItem('plan', JSON.stringify(planObj))
	
	if(selected.length >= 2) {
navigate("/addons")}
}
	
	return (
		<div className='form-main'>
			<h1>Select your plan</h1>
			<p>You have the option of monthly or yearly billing</p>
			<div className='plans'>
				<div
					className={`${selected[0] === 'Arcade' ? 'active' : 'plan'}`}
					onClick={() => setSelected(['Arcade',"$9/mo"])}
				>
					<div className='icon'></div>
					<div className='plan-info'>
						<h2>Arcade</h2>
						<p>$9/Mo</p>
					</div>
				</div>
				<div
					className={`${selected[0] === 'Advanced' ? 'active' : 'plan'}`}
					onClick={() => setSelected(["Advanced","$12/mo"])}
				>
					<div className='icon2'></div>
					<div className='plan-info'>
						<h2>Advanced</h2>
						<p>$12/Mo</p>
					</div>
				</div>
				<div
					className={`${selected[0] === 'Pro' ? 'active' : 'plan'}`}
					onClick={() => setSelected(['Pro',"$15/mo"])}
				>
					<div className='icon3'></div>
					<div className='plan-info'>
						<h2>Pro</h2>
						<p>$15/Mo</p>
					</div>
				</div>
			</div>
			<div className='next'>
				<Link to={'/'}>
					<p > Go Back </p>
				</Link>
				
				<button onClick={planPicker}>Next Step</button>
				
			</div>
		</div>
	)
}
