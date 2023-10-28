import { useState } from "react"
import { AddonType } from "../types"

export default function AddOn({title, description , price, id}:AddonType) {
    const [active, setActive] = useState(false)
const handleChange = ()=>{
    setActive(!active)
if(active === false){
    localStorage.setItem("title"+ id , title)
    localStorage.setItem("price"+id, price)
}
else{
    localStorage.removeItem("title"+ id)
    localStorage.removeItem("price"+id)
}}

    return (
        <div className={`${active === true? "active-addon" : "addon"}`}>
            <input type="checkbox" onChange={handleChange}/>
<div className="details">
    <h3>{title}</h3>
    <p>{description}</p>
</div>
<p className="addon-price">{price}</p>
        </div>
    )
}