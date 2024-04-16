import React from 'react';

const App = () => {

    // State

    // Auto Executed

    // Arrow function => Event , Onchange, Logical Function, API Call




    // View // JSX // Output

    let country = [ 'Bangladesh', 'India', 'Canada', 'America']
    return (
        <div>
            <ol>
                {
                    country.map((item)=>{
                       return  <li>{item}</li>
                    })
                }
            </ol>

            {
                (()=>{
                    return "Hello World !"
                })()
            }

        </div>
    );
};

export default App;