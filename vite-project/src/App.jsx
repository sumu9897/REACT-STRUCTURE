import {useState} from "react";

const App = () => {



    const [loginData,setLoginData] = useState({email:"", password:""});



    return (
        <div>
            <ul>
                <li>Email:{loginData.email}</li>
                <li>Password:{loginData.password}</li>
            </ul>
            <input onChange={(e)=> {setLoginData(loginData=>({
                ...loginData,'email':e.target.value
            }))}} type="text" placeholder="email"/><br/>


            <input onChange={()=> {}} type="text" placeholder="password"/>
        </div>
    );
};

export default App;