import React from 'react';

// Slot Component
const Slot = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;

  if (x === y && y === z) {
    return (
      <div className="slot_inner">
        <h1>{x} {y} {z}</h1>
        <p>This is matching 🎉</p>
      </div>
    );
  } else {
    return (
      <div className="slot_inner">
        <h1>{x} {y} {z}</h1>
        <p>This is not matching ❌</p>
      </div>
    );
  }
};

// App Component
const App = () => {
  return (
    <>
      <h1> 🎰 Welcome to <span>Slot Machine Game 🎰</span> </h1>

      <Slot x="😄" y="😄" z="😄" />
      <hr />
      <Slot x="😃" y="😄" z="😄" />
      <hr />
      <Slot x="😄" y="🍎" z="😄" />
      <hr />
      <Slot x="👍" y="🍎" z="😄" />
    </>
  );
};

export default App;
