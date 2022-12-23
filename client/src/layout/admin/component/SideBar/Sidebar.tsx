import styled from "styled-components";
import Tippy from '@tippyjs/react/headless';
import avatar from '~/assert/img/7969-ew-thinking.png'
import { AiOutlineHome } from 'react-icons/ai'
import { FC, useRef, useState } from "react";
import NavItem from "./NavItem";
import { img } from "~/assert/img";
import AdminOption from "./AdminOption";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
    sideBarRef: React.RefObject<HTMLDivElement>,
    sidebarOpen: Boolean
}
interface SidebarStyleProps {
    sidebarOpen: Boolean
}

const Sidebar:FC<SidebarProps> = (props) => {
    const { sideBarRef, sidebarOpen } = props
    const navigate = useNavigate()
    // const [info, setInfo] = useState<Boolean>(false)
    
    const [activeItem, setActiveBar] = useState<number>()
    const adminNavRef = useRef<HTMLDivElement>(null)

    const handleClickAdminInfo = () => {
        adminNavRef.current?.classList.toggle('show')
        // adminNavRef.current?.setAttribute('style', 'height: 120px')
    }

    const handleClickNavItem = (idx: number) => {
        setActiveBar(idx)
    }
    const handleClickLogo = () => {
        navigate('/')
    }


    return ( 
        <SidebarStyle ref={sideBarRef} sidebarOpen={sidebarOpen}>
            <header >
                <img src={img.logo} alt="logo"  onClick={handleClickLogo}/>
            </header>
        <Container>
            <div className="info">

            {/* just active when sidebar's width is being shrunk */}
                <Tippy  
                interactive={true}
                offset={[0,15]}
                placement='right-start'
                render={attrs => (
                    !sidebarOpen && <AdminOption handleClickAdminInfo={handleClickAdminInfo} adminNavRef={adminNavRef} />
                )}>
                    
                    <div className="avatar-wrap" style={{width: sidebarOpen? '62px': '43px'}}>
                        <img src={avatar} alt="" />
                    </div>
                </Tippy>

               {sidebarOpen && <AdminOption handleClickAdminInfo={handleClickAdminInfo} adminNavRef={adminNavRef} />}

            </div>

            <Content >
                <div className="navigation">
                   {sidebarOpen && <h6>Navigation</h6>}

                    {
                        [1,2,3].map((item, idx) => {
                            return (
                                <div key={idx} onClick={() => handleClickNavItem(idx)}>
                                    <NavItem  
                                        title='Dashboard' 
                                        sidebarOpen={sidebarOpen}
                                        active={activeItem === idx? (true) : (false)}>
                                        <AiOutlineHome />
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

const SidebarStyle = styled.div<SidebarStyleProps>`
    max-width: 225px;
    width: 100%;
    height: calc(100% - var(--header-height));
    background-color: var(--primary_admin);
    transition: width .2s ease-in-out;

    header{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary_admin);
        height: var(--header-height);
        img{
            width: ${({ sidebarOpen }) => sidebarOpen ? '68px' : '50px'};
            border-radius: 42px;
            cursor: pointer;

        }
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 5px;

        .avatar-wrap {
            cursor: pointer;
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
        
        
    }   
`

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: var(--third_admin);
    border-top-right-radius: 20px;
    padding: 0 12px;
    display: flex;
    flex-direction: column;
`

const Content = styled.div `
    background-color: var(--third_admin);
    z-index: 99;
    .navigation{
        padding: 16px 0;

        h6{
            padding: 0 16px;  
            margin: 0 0 8px;
            color : var(--title-color) ;
        }
    }

    div {
        width: 100%;
    }
`