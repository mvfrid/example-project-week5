import React from "react";


// Notice - the argument passed in your component - props is the object you reference to access the title. If you would name your argument objectOfAllThePassedProperties you would access the title with objectOfAllThePassedProperties.title instead of props.title
const Header = (props) => {
  console.log(`props header:`, props);
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;



/*
// If we were using the named export approach:

import React from 'react';

export const Header = (props) => {
	console.log(`props:`, props);
}

*/
