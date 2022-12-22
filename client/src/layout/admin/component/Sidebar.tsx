import styled from "styled-components";
import avatar from '../../../assert/img/7969-ew-thinking.png'
import { IoMdArrowDropdown } from 'react-icons/io'
import { CiMail, CiUser, CiSettings, CiLogout, CiHome } from 'react-icons/ci'
import { useRef, useState } from "react";
import NavItem from "./NavItem";

const Sidebar = () => {
    // const [info, setInfo] = useState<Boolean>(false)
    const [activeItem, setActiveBar] = useState<number>()
    const adminNavRef = useRef<HTMLDivElement>(null)

    const handleClickAdminInfo = () => {
        adminNavRef.current?.classList.toggle('show')
    }

    const handleClickNavItem = (idx: number) => {
        setActiveBar(idx)
    }

    return ( 
        <SidebarStyle>
            <header>
                <h1>LOGO</h1>
            </header>
        <Container>
            <div className="info">
                <div className="avatar-wrap">
                    <img src={avatar} alt="" />
                </div>

                <span onClick={handleClickAdminInfo}>
                    <div className="admin-name-wrap" >
                            <div id="admin-name" className="admin-name">Canh</div>
                            <IoMdArrowDropdown />
                    </div>
                        <label htmlFor="admin-name">Administrator</label> 
                </span>

                 <div ref={adminNavRef} className="admin-nav">
                    <div className="nav-item">
                        <CiMail /> 
                        <p>Messages</p>
                        <div className="notify">
                            <span>9</span>
                        </div>
                    </div>

                    <div className="nav-item">
                        <CiUser /> 
                        <p>Profile</p>
                    </div>

                    <div className="nav-item">
                        <CiSettings /> 
                        <p>Setting</p>
                    </div>

                    <div className="nav-item">
                        <CiLogout /> 
                        <p>Logout</p>
                    </div>
                    
                </div>
            </div>

            <Content >
                <div className="navigation">
                    <h6>Navigation</h6>

                    {
                        [1,2,3].map((item, idx) => {
                            return (
                                <div key={idx} onClick={() => handleClickNavItem(idx)}>
                                    <NavItem  title='Dashboard' active={activeItem === idx? (true) : (false)}>
                                        <CiHome />
                                    </NavItem>
                                </div>
                            )
                        })
                    }

                </div>
            </Content>
        </Container>

        </SidebarStyle>
     );
}
 
export default Sidebar;

const SidebarStyle = styled.div`
    max-width: 225px;
    width: 100%;
    height: 100vh;
    background-color: var(--primary_admin);

    header{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary_admin);
        height: var(--header-height);

    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 5px;
        margin: 0 26px;

        .avatar-wrap {
            margin: 32px 0 10px;
            width: 62px;
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid var(--secondary_admin);
            background-color: var(--primary_admin);
            img{
                width: 100%;
            }
        }
        span{
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center ;
            .admin-name-wrap{
                display: flex;
                gap: 10px;
                cursor: pointer;
                .admin-name {
                color: var(--primary_admin);
            }

            svg{
                color: var(--primary_admin);
                align-self: flex-end;
            }
            }
            label {
                color: var(--small_text_admin);
                font-size: 14px;
                opacity: .8;
                cursor: pointer;
            }
        }

        .admin-nav{
            display: none;
            flex-direction: column;
            width: 100%;
            height: 0px;
            transition: all .5s ease-in;
            
            &.show{
                display: flex;
                height: auto;
            }

            .nav-item{
                cursor: pointer;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
                gap: 10px;
                color: #c4c4c4;
                font-size: 16.5px;
                transition: all .2s ease-in;
                opacity: .7;

                &.nav-item {
                margin-top: 10px;
            }

                svg{
                    
                    font-size: 17.5px;
                    align-self: flex-start;
                }
                p {
                    font-size: 14.5px;
                    flex: 1;
                }
                &:hover{
                    opacity: 1;
                }
                .notify{
                    opacity: 1!important;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 20px;
                    height: 20px;
                    background-color: var(--notify-color);
                    border-radius: 7px;
                    span {
                        color: var(--white-color);
                }}
            }
        }
    }   
`

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: var(--third_admin);
    border-top-right-radius: 20px;
    padding: 0 26px;
    display: flex;
    flex-direction: column;
`

const Content = styled.div `
    
    .navigation{
        padding: 16px 0;

        h6{
            padding: 0 16px;  
            margin: 0 0 8px;
            color : var(--title-color) ;
        }

      
    }
`