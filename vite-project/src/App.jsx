import {useState} from "react";

const App = () => {


    //State
    const [Number, SetNumber]=useState(0)
    // const Number=11

    //View
    const Plus=()=>{

        SetNumber(Number+1)
    }
    const Minus=()=>{
        SetNumber(Number-1)
    }


    return (
        <div>

            {Number}
            <button onClick={() => {
                Plus()
            }}>Plus
            </button>
            <button onClick={() => {
                Minus()
            }}>Minus
            </button>

        </div>
    );
};

export default App;