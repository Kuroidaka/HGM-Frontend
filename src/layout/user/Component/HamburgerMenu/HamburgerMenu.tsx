import { useEffect, useRef } from "react";
import styled from "styled-components";
import { icon } from "~/assert/icon";
import { NavItem } from "../../HeaderFooter/HeaderFooter";

interface PropType { 
    isSideBarOpen: boolean
    navList: NavItem[]
}


const HamburgerMenu = (props: PropType) => {   
    const {isSideBarOpen, navList} = props
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // toggle side bar in landing page
        if(isSideBarOpen) {
            openSidebar()
        }
        else {
            closeSideBar()
        }

    }, [isSideBarOpen])

    const openSidebar = () => {
        menuRef.current && menuRef.current.classList.add('open')
    }

    const closeSideBar = () => {
        menuRef.current && menuRef.current.classList.remove('open')
        const listItem = document.querySelectorAll('.first-parent-item')
        listItem.forEach((item) => {
            if(item.classList.contains('open')) {
                item.classList.remove('open')
            }
        })
    }
    
    const handleClickNavItem = (e:any) => {
        let parentNode = e.target.closest('.first-parent-item')
        if(parentNode.classList.contains('open')) {
            e.target.closest('.first-parent-item').classList.remove('open')
        }
        else {
            e.target.closest('.first-parent-item').classList.add('open')
        }
    }

    return ( 
        <Container ref={menuRef}>
            <Menu className="menu" >
                <ListNav className="first-parent-list">
                    {navList.map((nav:NavItem, idx) => {
                    return (<li key={idx} className="first-parent-item" onClick={handleClickNavItem}>
                                <div className="item-wrapper">
                                    <div className="title">{nav.title}</div>
                                    <icon.arrowLeft className="arrow"/>
                                </div>

                                <ul className="second-children-list" >{ nav.children.map((item, idx) => {
                                    return (
                                        <li key={idx} className="second-children-item"onClick={(e) => {
                                            e.stopPropagation()
                                        }}>
                                            {item.item1}
                                        </li>
                                    )
                                    })}</ul>
                                
                            </li>)
                    })}
                </ListNav>
                <FooterMenu>
                    <ul className="action-list">
                        <li className="action-item">
                            <icon.bothHeart className="icon" />
                            <div className="title">Wish List</div>
                        </li>

                        <li className="action-item">
                            <icon.login className="icon" />
                            <div className="title">Login/Register</div>
                        </li>
                    </ul>
                </FooterMenu>
            </Menu>
        </Container>
     );
}
 
export default HamburgerMenu;

const Container = styled.div`
    height: calc(100vh - var(--header-bar-height-mb));
    position: fixed;
    z-index: 100;
    transition: all .2s linear;

    @media screen and (min-width: 992px) {
        width: 30vw!important;
        transform: translateX(-30vw);
        &.open {
            transform: translateX(0);
        }
    }
    @media screen and (max-width: 991px) {
        width: 70vw!important;
        transform: translateX(-70vw);
        &.open {
            transform: translateX(0);
        }
    }
    
`

const Menu = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;
    z-index: 99;
       
    
`

const ListNav = styled.ul`
    width: 100%;
    height: 84vh;
    overflow: scroll;

    
    li.first-parent-item {
        width: 100%;
        cursor: pointer;
        
        .item-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 10px;
            .title {
                text-transform: uppercase;
                font-weight: 600;
                font-size: 14px;
            }

            .arrow {
                font-weight: 600;
                transition: all .1s linear;
            }
        }
       & + li.first-parent-item {
        border-top: 1px solid #E0E0E0;
       }

       .second-children-list {
        list-style-type: none;
        margin-top: 10px;
        margin-left: 15px ;
        display: none;
            .second-children-item{
                padding: 10px;
            }
       }

       &.open {
        .item-wrapper {
            cursor: pointer;    
            .arrow {
                transform: rotate(90deg);
            }
        }

        .second-children-list {
            display: block;
        }
        
       }

    }
`

const FooterMenu = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: auto;
    width: 100%;

    .action-list {
        width: 100%;

        .action-item {
            display: flex;
            align-items: center;
            padding: 10px;
            background-color: #555;
            border-bottom: 1px solid white;
            cursor: pointer;

            .icon {
                font-size: 20px;
                color: white;
            }

            .title {
                text-transform: uppercase;
                color: white;
                margin-left: 15px;
                font-size: 16px;
                font-weight: 800;
            }
        }
    }
`