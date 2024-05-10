import React from "react";

const MyComponent = (param1) => {
  // Comment
  let object = {
    number: 0,
    string: "Hello, world!",
    array: [1, 2, 3, 4, 5],
  };

  return <h1>{object.string}</h1>;
};

export default MyComponent;
