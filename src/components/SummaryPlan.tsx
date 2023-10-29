import { Link } from "react-router-dom"
import { Summary } from "../types"
import { useState } from "react"

export default function SummaryPlan(plan: Summary ) {
    const [active, setActive] = useState(true)
    return (
    <div className={`${!active? "summary-section" : "active-section"}`} onClick={()=> setActive(!active)} onBlur={()=> setActive(!active)}>
        <div className="section-body">
        <div className="change">
            <h3>{plan.title}</h3>
<Link to={"/plan"}>
<p>Change</p>
</Link>
        </div>
        <span>{plan.price}</span>
        </div>
        {active && <div className="break"></div>}
    </div>
)}