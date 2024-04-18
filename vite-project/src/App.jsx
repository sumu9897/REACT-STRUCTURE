import {useState} from "react";

const App = () => {


    //State
    const [Number, SetNumber]=useState(15)
    // cosnst Number=11

    //View


    return (
        <div>

            {Number}
        </div>
    );
};

export default App;