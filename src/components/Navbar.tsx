import { Link } from 'react-router-dom'

export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='navlink'>
				<Link to='/'>
					<div className='selector'>1</div>
				</Link>
				<div className='navlink-side'>
					<p>STEP 1</p>
					<h1>YOUR INFO</h1>
				</div>
			</div>
			<div className='navlink'>
				<Link to='/plan'>
					<div className='selector'>2</div>
				</Link>
				<div className='navlink-side'>
					<p>STEP 2</p>
					<h1>SELECT PLAN</h1>
				</div>
			</div>
			<div className='navlink'>
				<Link to='/addons'>
					<div className='selector'>3</div>
				</Link>
				<div className='navlink-side'>
					<p>STEP 3</p>
					<h1>ADD-ONS</h1>
				</div>
			</div>
			<div className='navlink'>
				<Link to='/summary'>
					<div className='selector'>4</div>
				</Link>
				<div className='navlink-side'>
					<p>STEP 4</p>
					<h1>SUMMARY</h1>
				</div>
			</div>
		</div>
	)
}
