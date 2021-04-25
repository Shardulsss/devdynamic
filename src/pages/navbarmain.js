import React from 'react'
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import {useState} from 'react';


const Navbarmain = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle= {toggle}/>
        </div>
    )
}

export default Navbarmain
