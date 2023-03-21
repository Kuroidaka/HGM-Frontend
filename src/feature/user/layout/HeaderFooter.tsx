
import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import FlyOutModal from "~/component/FlyOutModal";
import { UseMedia } from "~/hook";
import AddToCartFlyOut from "./Component/AddToCartFlyOut";
import Footer from "./Component/Footer";
import HamburgerMenu from "./Component/HamburgerMenu";
import HeaderCom from "./Component/Header";
import { CartContext, CartContextValue } from "~/context/Context";
import { ProductType2 } from "~/model/Ladingpage.model";
import config from "~/config";
import { useLocation, useNavigate } from "react-router-dom";
import { productApiTest } from "~/api/product/productApi";
import ChatBox from "./Component/ChatBox";
interface propsType {
    children: ReactNode
}

export interface NavItem  {
    title: string
    children: {
        item1: string
    }[]
    link: string
    show: boolean
}



const HeaderFooter = (props:propsType) => {
    const { children } = props
    const screenWidth = UseMedia()
    const [headerHeight, setHeaderHeight] = useState<string>('')
    const [productList, setProductList] = useState<ProductType2[]>([])
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)
    const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false)
    const [isFlyoutCartOpen, setIsFlyoutCartOpen] = useState<boolean>(false)
    // move down the app as the header height change
    useEffect(() => {
        if(screenWidth < 992) {
            setHeaderHeight('var(--header-bar-height-mb)')
        }
        else if (screenWidth >= 768) {
            setHeaderHeight('calc(var(--header-bar-height) + var(--header-nav-height))')
        }
        
    },[screenWidth])


    const handleClickOverlay = () => {
        if(isSideBarOpen && isOverlayOpen) handleOpenSideBar()
        else if(isFlyoutCartOpen && isOverlayOpen) handleOpenFlyoutCart()
    }

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
        setIsSideBarOpen(!isSideBarOpen);
        setIsOverlayOpen(!isOverlayOpen);

        (isSideBarOpen && isOverlayOpen) ?closeOverlay():openOverlay();        
    }

    // function handle open flyout cart
    const handleOpenFlyoutCart = () => {
        setIsOverlayOpen(!isOverlayOpen);
        setIsFlyoutCartOpen(!isFlyoutCartOpen);
        (isOverlayOpen && isFlyoutCartOpen) ? closeOverlay() : openOverlay()
    }
// function add product

    const handleAddProducts = (value : ProductType2 | undefined) => {
       if(!!value) productList.push(value);
    }
    const cartContextValue:CartContextValue = {
        handleOpen: handleOpenFlyoutCart,
        productList: productList,
        handleAddProduct: handleAddProducts
    }
   

    return ( 
        <CartContext.Provider value={cartContextValue}>
            <Container>
                <HeaderCom handleToggle={handleOpenSideBar} isSideBarOpen={isSideBarOpen} navList={navList} />
                {/* <Button title="test" height="500px" handleOnClick={handleOpenFlyoutCart}></Button> */}
                <Overlay className="overlay" onClick={handleClickOverlay}/>
                <ChatBox />
                <HamburgerMenu isSideBarOpen={isSideBarOpen} navList={navList}/>
                <FlyOutModal isOpen={isFlyoutCartOpen} handleAddProduct={handleAddProducts} handleToggle={handleOpenFlyoutCart}>
                    <AddToCartFlyOut  handleAddProduct={handleAddProducts}/>
                </FlyOutModal>  
                <div style={{marginTop : headerHeight}}>
                    {children}
                </div>
                <Footer />
            </Container>
        </CartContext.Provider>
       
     );
}
 
const navList = [
    {
        title: 'Home',
        link: config.routePath.home,
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
        title: 'Product',
        link: config.routePath.collection,
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
    
    {
        title: 'About',
        link: `${config.routePath.about}` ,
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
    {
        title: 'Blog',
        link: config.routePath.blog,
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