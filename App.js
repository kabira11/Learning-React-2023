import React from 'react';
import ReactDOM from 'react-dom/client'
const heading1 = React.createElement(
    "h1",
    {id : 'heading'},
    "Hello World From React! 😎")

// for emoji ctrl + cmd + space

const root1 = ReactDOM.createRoot(document.getElementById("root"))

root1.render(heading1);