// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  const buttonText = { text: 'click me!'};
  const labelText = 'enter name';
  return (
    <div>
      <label className="label" for="name">
         {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {buttonText.text}
      </button>
    </div>
  );
}
// render react component

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);