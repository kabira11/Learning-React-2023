import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client'

//JSX - HTML Like or XML Like Syntax but it is not html inside JS
// Js engine doesn't understand JSX 
// Js engine understand ES6 (All version of ECMA Script)
// Parcel is doing the reading and render (traspiled before it reaches js engine)
// transpile means make code readable to js engine (Transpiling is done by parcel . Is parcel transpile ? NO)
// Babel Is doing transpiling   
const jsxHeading = <h1 id = "heading">Hello React </h1>

//React Functional component
const HeadingComp = () => {
    return (
        <div className="container">
            <h2>Heading of React</h2>
            <TileComponent/>
        </div>
    )
}

const TileComponent = () => {
    return (
        <div className="container">
            <h2>Title of React</h2>
        </div>
    )
}

console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxHeading)
root.render(<HeadingComp/>)