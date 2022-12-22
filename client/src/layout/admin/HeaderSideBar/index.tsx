import { FC, Fragment, ReactNode, useRef, useState } from "react";

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
    <Fragment>
        <Sidebar sideBarRef={sideBarRef} sidebarOpen={sidebarOpen} />
        <Header handleClickSelectBtn={handleClickSelectBtn}>
            {children}
        </Header>
    </Fragment>
    );
}
 
export default HeaderSideBar;

