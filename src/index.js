import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import Header from './Component/Header';
import Body from './Component/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';
import RestaurantMenu from './Component/RestaurantMenu';




// Props:- we can transfer a data As a props and object destructure in conponent
// config reven ui
// we can use backend data to transfer the component -> create one object and pass the all data as props
// whenver we create a loop give always uique key
// not using keys (not acceptable) <<<< indes as key <<<<<< unique id (best pratice)
// There are two type of export / import --> named, default


const App = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,

        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/About',
                element: <About />
            },

            {
                path: '/Contact',
                element: <Contact />
            },

            {
                path: '/Restaurent/:resId',
                element: <RestaurantMenu />
            }
        ]
    },




])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)

