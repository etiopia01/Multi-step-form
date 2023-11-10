import { Link} from "react-router-dom"
import AddOn from "./components/AddOn"



export default function AddOns() {
    

  

    const addon1 = {title:"Online service", description: "Access to multiplayer games", price: "+1$/mo", id: 1}
    const addon2 = {title : "Larger storage", description: "Extra 1TB of cloud save", price: "+2$/mo", id: 2}
    const addon3 = {title:"Customizable profile", description: "Custom theme on your profile", price: "+2$/mo", id:3}
    
    return (
        <div className="form-main">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience</p>
            <div className="add-ons-selector">
                <AddOn {...addon1}/>
                <AddOn {...addon2}/>
                <AddOn {...addon3} />
            </div>
            <div className="next">
                <Link to={"/plan"}>
                <p>Go Back</p>
                </Link>
                <Link to={"/summary"}>
                <button>Next Step</button>
                </Link>
            </div>
        </div>
    )
}

