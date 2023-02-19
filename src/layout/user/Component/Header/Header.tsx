import styled, { keyframes } from "styled-components";
import { img } from "~/assert/img";
import { icon } from "~/assert/icon";
import Avatar from "~/component/Avatar/Avatar";
import Tippy from "@tippyjs/react/headless";
import Popper from "~/component/Popper/Popper";
import { useState } from "react";

const HeaderCom = () => {

    const [avaToggle, setAvaToggle] = useState<boolean | undefined>(false)

    const handleClickAvatar = () => {
        setAvaToggle(!avaToggle)
    }

    return (
        <Header>


            <div className="wrapper">
                <div className="left-part">
                    <div className="menu">
                        <icon.menu/>
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
                <Logo>
                    <img src={img.logo} alt="" />
                </Logo>

                <Action>

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

            <Navbar>
                <li>
                    PRODUCT
                </li>
                <li>
                    SHOP
                </li>
                <li>
                    SHOP
                </li>
                <li>
                    SHOP
                </li>
            </Navbar>

        </Header>
    );
}

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
height: var(--header-bar-height);
background-color: #ffffff;
width: 100vw;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;

@media screen and (min-width: 992px) {
    .wrapper {
        padding: 0 50px;
        width: 100%;
        height: 85px;

        .menu{
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
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-self: center;
        padding: 20px 30px;

        
        .left-part {

            .menu{
            display: block;
            font-size: 28px;
                svg {
                    height: 100%;
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
                    height: 100% ;
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
        }
        
    }

`

const Navbar = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: black;
    padding: 10px;

    li {
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
    }

`

const Logo = styled.div`
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
flex: 1 0 0;
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