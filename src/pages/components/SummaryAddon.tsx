import { useState } from "react"
import { Summary } from "../../types"
import { Link } from "react-router-dom"
export default function SummaryAddon(addon: Summary ) {
    const [active, setActive] = useState(false)
    return (
    <div className={`${!active? "summary-section" : "active-section"}`} onClick={()=> setActive(!active)} onBlur={()=> setActive(!active)}>
        <div className="section-body">
        <div className="change">
            <h3>{addon.title}</h3>
<Link to={"/addon"}>
<p>Change</p>
</Link>
        </div>
        <span>{addon.price}</span>
        </div>
        {active && <div className="break"></div>}
    </div>
)}