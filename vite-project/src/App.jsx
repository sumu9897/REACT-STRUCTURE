import {useState} from "react";

const App = () => {


    let [email, SetEmail] = useState("Default");



    return (
        <div>
            <h1>{email}</h1>
            <label>Email: </label><br/>
            <input onChange={(event)=>{SetEmail(event.target.value)}} type="text" placeholder="email"/>

        </div>
    );
};

export default App;