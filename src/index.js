// Import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return 'Click on me!';
}

// Create a react component
const App = () => {
    const buttonText = "Click Me!";
    const labelText = "Enter Name:"
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"></input>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>

        </div>
    );
};

// Take the react component and show in on the screen
ReactDOM.render(<App />, document.querySelector('#root'))
