import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function ControlNavBar({ children }) {

    const location = useLocation();

    const [showNavBar, setShowNavBar] = useState(false);


    useEffect(() => {
        console.log('this is location', location)
        if (location.pathname === '/') {
            setShowNavBar(false)
        } else if (location.pathname === '/Login') {
            setShowNavBar(false)
        } else if (location.pathname === '/Registration') {
            setShowNavBar(false)
        } else if (location.pathname === '/About') {
            setShowNavBar(false)
        } else if (location.pathname === '/Faq') {
            setShowNavBar(false)
        }
        else if (location.pathname === '/Contact') {
            setShowNavBar(false)
        }
        else if (location.pathname === '/ForgotPassword') {
            setShowNavBar(false)
        }
         else {
            setShowNavBar(true)
        }
    }, [location])


    return (
        <div>{showNavBar && children}</div>
    )
}

export default ControlNavBar