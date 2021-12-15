import React, {useState, useEffect} from 'react'
import {addDocument} from "../firebase/services"
const LoginHostPage = (props) => {
    const [name, setName] = useState("initialState");
 
    useEffect(() => {
        console.log('hêllo')        
        return () => {
            console.log("done effect")
        }
    }, [])
    
    const onSubmit = () =>{
        addDocument('host',{
            name:name
        })
        console.log('submit');
    }

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <button onClick = {onSubmit}>submit</button>
        </div>
    )
}

export default LoginHostPage

