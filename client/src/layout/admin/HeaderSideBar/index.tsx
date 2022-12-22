import { FC, Fragment, ReactNode } from "react";
import styled from 'styled-components'
import Header from '../component/Header'
import Sidebar from "../component/Sidebar";

interface HeaderSideBarProps {
    children: ReactNode
}

const HeaderSideBar:FC<HeaderSideBarProps> = ({children}) => {
    return (  
    <Fragment>
        <Sidebar />
        <Header>
            {children}
        </Header>
    </Fragment>
    );
}
 
export default HeaderSideBar;

