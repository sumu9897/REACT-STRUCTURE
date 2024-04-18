import {useState} from "react";

const App = () => {


    let [email, SetEmail] = useState("Default");



    return (
        <div>
            <h1>{email}</h1>
            <input onChange={(e)=>{SetEmail(e.target.value)}} type="text" placeholder="email"/>

        </div>
    );
};

export default App;