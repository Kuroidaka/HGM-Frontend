import { FC, ReactNode } from "react";
import styled from "styled-components";

interface NavItemProps {
    title: string,
    children: ReactNode,
    sidebarOpen : Boolean| undefined,
    active?: Boolean | undefined,
}

interface NavItemStyles {
    active: Boolean | undefined
    sidebarOpen: Boolean | undefined
}

const NavItem:FC<NavItemProps> = (props) => {
    const { title, children, active, sidebarOpen } = props

    return ( 
        <Item active={active} sidebarOpen={sidebarOpen} >
            {children}
            {sidebarOpen && <span >{title}</span>}
        </Item>            
    );
}
 
export default NavItem;


const Item = styled.div<NavItemStyles>`

    display: flex;
    align-items: center;
    justify-content: ${({sidebarOpen}) => sidebarOpen ? `flex-start` : `center`};
    padding: 9.44px;
    color: var(--side-bar-normal-text);
    cursor: pointer;

    svg{
        font-size: 20px;
       
    }
    span{
        padding-left: 8px;
        font-size: 18px;
    }

    ${({ active }) => active && `
        background-color: var(--secondary_admin);
        color: var(--white-color);
        font-weight: 600;
        border-radius: 11px;
    `}
`