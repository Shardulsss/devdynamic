import React from 'react'
import Navbar2 from '../components/navbar2';
import Sidebar2 from '../components/sidebar2';
import {useState} from 'react';


const Navbarmain2 = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            
            <Navbar2 toggle={toggle}/>
            <Sidebar2 isOpen={isOpen} toggle= {toggle}/>
        </div>
    )
}

export default Navbarmain2
