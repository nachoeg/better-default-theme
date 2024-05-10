import React from "react";

const MyComponent = (param1) => {
  // Comment
  let object = {
    number: 10,
    string: "Hello, world!",
    array: [1, 2, 3, 4, 5],
  };

  return (
    <div>
      <h1>{object.string}</h1>
      {object.array.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default MyComponent;
