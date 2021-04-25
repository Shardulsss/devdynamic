import React from 'react';
import {useState, useLayoutEffect } from 'react';


const useWindowPosition = (d) => {
    const [animation,setAnimation] = useState(false);
    useLayoutEffect(()=>{
        function updatePosition(){
            const offetSetHeight=window.document.getElementById(d.id).offsetHeight;
            if(window.pageYOffset>offetSetHeight*(d.val)){
                setAnimation(true);
            }
        }
        window.addEventListener('scroll',updatePosition);
        updatePosition();
        return ()=>window.removeEventListener('scroll',updatePosition);
    },[d.id]);






    return animation
}

export default useWindowPosition
