import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client'
import { Header } from './components/Header'
import { BodyComponent } from './components/BodyComponent'


const AppComponent = () => {
    return (
        <div className="app">
            <Header/>
            <BodyComponent />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppComponent/>)