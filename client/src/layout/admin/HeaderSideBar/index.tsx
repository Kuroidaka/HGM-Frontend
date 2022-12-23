import { FC, Fragment, ReactNode, useRef, useState } from "react";
import styled from 'styled-components'

import Header from '../component/Header'
import Sidebar from "../component/Sidebar";

interface HeaderSideBarProps {
    children: ReactNode
}
export interface inputWrapRefProps extends React.RefObject<HTMLFormElement>{}

export interface sideBarRefProps  {}

const HeaderSideBar:FC<HeaderSideBarProps> = ({children}) => {
    const sideBarRef = useRef<HTMLDivElement>(null)
    const [sidebarOpen, setSidebarOpen] = useState<Boolean>(true)

 

    // Change the sidebar width
    const handleClickSelectBtn = (inputWrapRef: inputWrapRefProps) => {

        if(sidebarOpen) {
            sideBarRef.current?.setAttribute('style', 'width: 5%')
            setSidebarOpen(false)


        }
        else {
            sideBarRef.current?.setAttribute('style', 'width: 100%')
            setSidebarOpen(true)
        } 

    }

    return (  
    <Container>
        <Sidebar sideBarRef={sideBarRef} sidebarOpen={sidebarOpen} />

        <Content>
            <Header handleClickSelectBtn={handleClickSelectBtn} />
            {children}
        </Content>


    </Container>
    );
}
 
export default HeaderSideBar;

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    /* height: 100vh; */
`