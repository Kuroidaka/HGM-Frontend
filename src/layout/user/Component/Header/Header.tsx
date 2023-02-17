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
                <Navbar>
                    <li>
                    PRODUCT    
                    <icon.arrowDown2 />
                    </li>
                    <li>
                    SHOP    
                    <icon.arrowDown2 />
                    </li>
                    <li>
                    SHOP    
                    <icon.arrowDown2 />
                    </li>
                    <li>
                    SHOP    
                    <icon.arrowDown2 />
                    </li>
                </Navbar>

                <Logo>
                    <img src={img.logo} alt="" />
                </Logo>

                <Action>
                    <div className="search">
                        <input type="text" spellCheck={false} placeholder="Search product..."/>
                        {/* <icon.search className="icon"/>    */}
                        <icon.loading className="icon loading" />                   
                    </div>
                    <icon.cart className="cart"/>
                    <icon.wishList className="wist-list"/>
                    <Tippy
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
                        </Popper> )}
                    >
                        <Avatar src={img.defaultAvatar} width='30px' handleClick={handleClickAvatar} /> 
                    </Tippy>
                </Action>
            </div>
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
display: flex;
justify-content: center;

    .wrapper {
        width: 1400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`

const Navbar = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 30px;
    li {
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

const Action = styled.div`
display: flex;
gap: 30px;
align-items: center;

.search {
    border-bottom: 1px solid #ccc; 
    display: flex;
    align-items: center;
    height: 46px;
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

}

.cart {
    font-size: 25px;
}

.wist-list {
    font-size: 21px;
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