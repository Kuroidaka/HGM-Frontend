import styled, { keyframes } from "styled-components";
import Tippy from "@tippyjs/react/headless";
import { img } from "~/assert/img";
import { icon } from "~/assert/icon";
import Avatar from "~/component/Avatar";
import Popper from "~/component/Popper";
import { useEffect, useState } from "react";
import { UseMedia } from "~/hook";
import { NavItem } from "~/feature/user/layout/HeaderFooter";
import { Link } from "react-router-dom";
import config from "~/config";
interface PropType {
    handleToggle: () => void
    isSideBarOpen: boolean
    navList: NavItem[]
}


const HeaderCom = (props:PropType) => {
    const {handleToggle, isSideBarOpen, navList} = props

    const [avaToggle, setAvaToggle] = useState<boolean | undefined>(false)
    const [nav, setNav] = useState<boolean | undefined>()
    const screenWidth = UseMedia()
    
    const handleClickAvatar = () => {
        setAvaToggle(!avaToggle)
    }

    useEffect(() => {
        if(screenWidth < 992) {
            setNav(false)
        }
        else {
            setNav(true)
        }
    }, [screenWidth]) 

    const handleClickMenuIcon = () => {
        handleToggle()
    }

    return (
        <Header>
            <div className="wrapper">
                <Logo to={config.routePath.home}>
                    <img src={img.logo} alt="" />
                </Logo>
               
                <Navbar  style={nav ? {} : {display: 'none'}}>{
                    navList.map(nav => {
                    return (
                        <li className='nav-item'> 
                            <Link to={nav.link}>{nav.title}</Link>
                        </li>
                    )})}
                </Navbar>
                

                <Action >
                    <div className="left-part">
                        <div className="menu-icon" onClick={handleClickMenuIcon}>
                            {isSideBarOpen ? <icon.close/>: <icon.menu/>}
                        </div>
                        <Search className="search">
                            <input type="text" spellCheck={false} placeholder="Search product..." />
                            {/* <icon.search className="icon"/>    */}
                            <icon.loading className="icon loading" />
                        </Search>

                        <div className="icon">
                            <icon.search className="search-icon" />
                        </div>

                    </div>

                    <div className="icon"><icon.cart className="cart" /></div>
                    <div className="icon"><icon.wishList className="wist-list" /></div>
                    <div className="icon"> <Tippy
                        interactive
                        placement="bottom-end"
                        visible={avaToggle}
                        offset={[0, 10]}
                        onClickOutside={() => setAvaToggle(false)}
                        render={() =>
                        (<Popper>
                            <UserOption className="list">
                                <li>
                                    <icon.profile />
                                    Profile
                                </li>
                                <li>
                                    <icon.setting />
                                    Setting
                                </li>
                                <li>
                                    <icon.logout />
                                    Logout
                                </li>
                            </UserOption>
                        </Popper>)}
                    >
                        <Avatar src={img.defaultAvatar} width='30px' handleClick={handleClickAvatar} />
                    </Tippy></div>
                   
                    
                   
                </Action>
            </div>

            {/* <Navbar className="nav-list" style={nav ? {} : {display: 'none'}}>
                {navList.map((nav: NavItem, idx) => {
                    return (
                        <Tippy
                        key={idx}
                        interactive
                        placement="bottom-end"
                        visible={avaToggle}
                        offset={[0, 10]}
                        render={() =>
                        (<Popper>
                           <>hello</>
                        </Popper>)}
                        >
                            <li key={idx} className='nav-item'>{nav.title}</li>
                        </Tippy>
                    )
                    })}
            </Navbar> */}

        </Header>
    );
}

const navList =[
    {
        title: 'Home',
        link: config.routePath.home
    },{
        title: 'Product',
        link: config.routePath.collection
    },{
        title: 'About',
        link: '/'
    },{
        title: 'Blog',
        link: '/'
    },
]

export default HeaderCom;


const rotateAnimation = keyframes`
    from{
       
        transform: rotate(0deg) 
    }
    to {
        transform: rotate(360deg) 
    }
`

const Header = styled.div`
position: fixed;
top: 0;
right: 0;
z-index: 999;
background-color: #ffffff;
width: 100vw;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
border-bottom: 1px solid #E0E0E0;

@media screen and (min-width: 992px) {
    
    .wrapper {   
        max-width: 1400px;
        width: 100%;
        height: var(--header-bar-height);

        .menu-icon{
            display: none;
        }

       .left-part{        
            .search{
                
            }
            .icon{
                .search-icon {
                    display: none;
                }
            }
       }
    }
}

@media screen and (max-width: 991px) {
    height: var(--header-bar-height-mb);
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-self: center;
        padding: 0 30px;
        .left-part {

            .menu-icon{
            display: block;
            font-size: 28px;
                svg {
                    height: 100%;
                    width: 23px;
                }
            }

            .search{
                display: none;
            }

            .icon{
                display: flex;
                justify-content: flex-start;
                font-size: 22px;
                .search-icon {
                    height: 100%;
                    width: 21px;
                }
            }
        }
    }
}

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-self: center;
        width: 100vw;
        
        
        .left-part{
            flex: 1 0 0;
            display: flex;
            gap: 15px;
        }
        
    }

`

const Navbar = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 10px;
    height: 100%;
    
    .nav-item {
        a {
            color: #5B5F62;
            font-size: 15px;
            font-weight: 700;
        }
    }

`

const Logo = styled(Link)`
    cursor: pointer;
    img {
        width: 88px;
    }

`

const Search = styled.div`
    border-bottom: 1px solid #ccc; 
    display: flex;
    align-items: center;
    height: 35px;
    width: 260px;
    position: relative;

    input {
        padding: 10px;
        height: 100%;
        width: 80%;
        outline: none;
        background-color: transparent;
        border: none;
    }

    .icon {
        position: absolute;
        right: 10px;
        font-size: 21px;

        &.loading{
            animation: ${rotateAnimation} 2s linear infinite;
        }
    }



`

const Action = styled.div`
display: flex;
gap: 30px;
align-items: center;

justify-content: flex-end;


@media screen and (max-width: 991px) { 

    .icon {
        
        &:nth-child(2), &:nth-child(3), [dir=rtl] & {
            display: none;
        }
    }
}


    .icon {
        .cart {
            font-size: 25px;
        }
        .wist-list {
            font-size: 21px;      
        }
    }



`

const UserOption = styled.ul`
    list-style-type: none;

    li{
        display: flex;
        align-items: center;
        padding: 7px 10px;
        gap: 10px;
        font-weight: bold;
        transition: all 2ms linear;

        svg{
            font-weight: 600;
            font-size: 20px;
        }

        &:hover{
            background-color: var(--hover-icon);
        }
    }

`