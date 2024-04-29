import React, {useState} from 'react'

function MyComponent(){
    
    const [name, setName] = useState("Guest");
    const [shipping, setShipping] = useState("");


    const updateName = () => {
        setName("boom");
    }

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
            
            <label>
                <input type="radio" value="Pick Up"
                       checked={shipping === "Pick Up"}
                       onChange={handleShippingChange}/>
            </label>
            <br/>
            <label>
            <input type="radio" value="Delivery"
                       checked={shipping === "Delivery"}
                       onChange={handleShippingChange}/>
            </label>
            <p>{shipping}</p>
        </div>
    )
}
export default MyComponent