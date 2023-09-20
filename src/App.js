import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client'
import { Header } from './components/Header'
import { BodyComponent } from './components/BodyComponent'
import { createBrowserRouter , RouterProvider, Outlet} from 'react-router-dom';
import { About } from '../src/components/About'
import { Contact } from '../src/components/Contact'
import  Error  from '../src/components/Error'
 

const AppComponent = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

// configuration of router - createBrowserRouter i.e appRouter
// Outlet is filled by children path inside /, /about , /contact
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent />,
        children: [
            {
                path: "/",
                element: <BodyComponent />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            }
            ],
            errorElement : <Error/>,
    },

])


const root = ReactDOM.createRoot(document.getElementById("root"))
// RouterProvider is a provider 
root.render(<RouterProvider router={appRouter}/>)