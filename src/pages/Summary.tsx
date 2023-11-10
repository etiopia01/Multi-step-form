import SummaryAddon from "./components/SummaryAddon"
import SummaryPlan from "./components/SummaryPlan"
import { Link } from "react-router-dom"

export default function Summary(){

   const strPlan = localStorage.getItem("plan")
   if(strPlan){console.log(JSON.parse(strPlan))}
   
    const strAddon1 = localStorage.getItem("addon1")
    const strAddon2 = localStorage.getItem("addon2")
    const strAddon3 = localStorage.getItem("addon3")
    


   
    



    return (
        <div className="form-main">
            <h1>Finishing up</h1>
            <p>Check everything looks OK before confirming</p>
            <div className="summary">
           { strPlan &&  <SummaryPlan {...JSON.parse(strPlan)}/> }
           {strAddon1 && <SummaryAddon {...JSON.parse(strAddon1)}/>}
           {strAddon2 && <SummaryAddon {...JSON.parse(strAddon2)}/>}
           {strAddon3 && <SummaryAddon {...JSON.parse(strAddon3)}/>}
            </div>
            <div className='next'>
				<Link to={'/addons'}>
					<p > Go Back </p>
				</Link>
				<Link to={"/end"}>
				<button>Confirm</button>
                </Link>
				
			</div>
        </div>
    )
}