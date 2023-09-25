import React, { lazy, Suspense } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client'
import { Header } from './components/Header'
import { BodyComponent } from './components/BodyComponent'
import { createBrowserRouter , RouterProvider, Outlet} from 'react-router-dom';
import { About } from '../src/components/About'
import { Contact } from '../src/components/Contact'
import  Error  from '../src/components/Error'
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
// All below are same concept , we are implementing for Grocery app
// Chunking
// Code Splitting
// Lazy Loading
// Dynamic Bundle
// On Demand loading

const Grocery = lazy(() => import('./components/Grocery'))

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
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h2>Loading............</h2>}><Grocery /></Suspense>
            }
            ],
            errorElement : <Error/>,
    },

])


const root = ReactDOM.createRoot(document.getElementById("root"))
// RouterProvider is a provider 
root.render(<RouterProvider router={appRouter}/>)