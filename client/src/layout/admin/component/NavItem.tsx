import { FC, ReactNode } from "react";
import styled from "styled-components";

interface NavItemProps {
    title: string,
    children: ReactNode,
    active?: Boolean | undefined,
}

const NavItem:FC<NavItemProps> = (props) => {
    const { title, children, active } = props

    return ( 
        <Item active={active} >
            {children}
            <p >{title}</p>
        </Item>            
    );
}
 
export default NavItem;


const Item = styled.div<{active: Boolean | undefined}>`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 9.44px 16px;
    color: var(--side-bar-normal-text);
    cursor: pointer;

    svg{
        margin-right: 8px;
    }
    span{
        font-size: 18px;
    }

    ${({ active }) => active && `
        background-color: var(--secondary_admin);
        color: var(--white-color);
        font-weight: 600;
        border-radius: 11px;
    `}
`