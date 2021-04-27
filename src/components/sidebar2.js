import React from 'react'
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';


const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen })=>(isOpen? '100%' : '0')};
    top: ${({ isOpen })=>(isOpen? '0' : '-100%')};

`
const Closeicon = styled(FaTimes)`
    color: #fff;
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    cursor: pointer;
    fontsize: 2 rem;
    background: transparent;
    outline: none;
`

const Sidebarwrap = styled.div`
    color: #fff;

`

const Sidebarlink = styled(Link)`
    display: flex;
    align-items: cemter;
    justify-content: center;
    font-size: 20px;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    color: #fff;
    font-weight:bold;

    &:hover{
        color: #b84d6d;
        transform: scale(1.1);
        animation: ease-in-out;
    }

`

const SidelinkR = styled(LinkR)`
    display: flex;
    align-items: cemter;
    justify-content: center;
    font-size: 20px;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    color: #fff;
    font-weight:bold;

    &:hover{
        color: #b84d6d;
        transform: scale(1.1);
        animation: ease-in-out;
    }

`

const Sidebarmenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    grid-template-rows: repeat(6,50px);
    
    @media and screen(max-width:480px){
        grid-template-rows: repeat(6,50px);
    }
`


const Sidebar2 = (props) => {
    return (
        <div>
            <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
                <Icon onClick={props.toggle}>
                    <Closeicon></Closeicon>
                </Icon>
                <Sidebarwrap>
                    <Sidebarmenu>
                        <SidelinkR onClick={props.toggle} to="/">
                            Home
                        </SidelinkR>
                        
                        <SidelinkR onClick={props.toggle} to="/projects">
                            Projects
                        </SidelinkR>
                        <SidelinkR onClick={props.toggle} to="/blogs">
                            Blogs
                        </SidelinkR>
                    </Sidebarmenu>
                </Sidebarwrap>

            </SidebarContainer>
        </div>
    )
}

export default Sidebar2
