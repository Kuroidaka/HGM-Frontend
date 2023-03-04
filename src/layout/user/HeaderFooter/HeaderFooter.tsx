
import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import FlyOutModal from "~/component/FlyoutModal/FlyOutModal";
import { UseMedia } from "~/hook";
import Footer from "../Component/Footer/Footer";
import HamburgerMenu from "../Component/HamburgerMenu/HamburgerMenu";
import HeaderCom from "../Component/Header/Header";

interface propsType {
    children: ReactNode
}

export interface NavItem  {
    title: string
    children: {
        item1: string
    }[]
    show: boolean
}

const navList = [
    {
        title: 'new arrivals',
        children: [
            {
                item1: 'Male'
            },
            {
                item1: 'Female'
            },
        ],
        show: false
    },
    {
        title: 'collection',
        children: [
            {
                item1: 'item1'
            },
            {
                item1: 'item1'
            },
        ],
        show: false
    },
  

]

const HeaderFooter = (props:propsType) => {
    const { children } = props
    const screenWidth = UseMedia()
    const [headerHeight, setHeaderHeight] = useState<string>('')
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)
    const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false)

    // move down the app as the header height change
    useEffect(() => {
        if(screenWidth < 992) {
            setHeaderHeight('var(--header-bar-height-mb)')
        }
        else if (screenWidth >= 768) {
            setHeaderHeight('calc(var(--header-bar-height) + var(--header-nav-height))')
        }
        
    },[screenWidth])

    const openOverlay = () => {
        const body = document.querySelector('body');
        if(body) {
            body.style.overflow = "hidden"
        }
        let overLay = document.querySelector('.overlay')
        overLay && overLay.classList.add('open');
    }

    const closeOverlay = () => {
        const body = document.querySelector('body');
        if(body) {
            body.style.overflow = ""
        }
        let overLay = document.querySelector('.overlay')
        overLay && overLay.classList.remove('open');
    }

    // function handle open sidebar
    const handleOpenSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen)
        setIsOverlayOpen(!isOverlayOpen)

        if(isSideBarOpen && isOverlayOpen) {
            closeOverlay()

        }
        else {
            openOverlay()
        }        
    }

    const handleClickOverlay = () => {
        if(isSideBarOpen && isOverlayOpen) handleOpenSideBar()
    }

    return ( 
        <Container>
            <HeaderCom handleOpenSideBar={handleOpenSideBar} isSideBarOpen={isSideBarOpen} navList={navList}/>
            <Overlay className="overlay" onClick={handleClickOverlay}/>
            <HamburgerMenu isSideBarOpen={isSideBarOpen} navList={navList}/>
            <FlyOutModal> </FlyOutModal>
            <div style={{marginTop : headerHeight}}>
                {children}
            </div>
            <Footer />
        </Container>
     );
}
 
export default HeaderFooter;

const Container = styled.div`

`

const Overlay = styled.div`
    height: 100%;
    width: 100vw;
    opacity: 0;
    transition: all .1s linear;
    position: fixed ;
    display: none;
    &.open {
        opacity: 1;
        display: block;
        background-color: #787878;
        opacity: 0.6;
        z-index: 10;
    }
`