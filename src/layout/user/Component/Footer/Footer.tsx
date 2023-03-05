import { Fragment, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { icon } from "~/assert/icon";
import Input from "~/component/Input/Input";
import Button from "~/component/Button/Button";
import { img } from "~/assert/img";
import { UseMedia } from "~/hook";


interface sectionNameType  {
    [key: string]: boolean
}

const Footer = () => {
    const [inputEmail, setInputEmail] = useState<string>('')
    const [sectionOpen, setSectionOpen] = useState<sectionNameType>({
        customerService: false,
        company: false,
        contact: false
    })
    const [displayIconItem, setDisplayIconItem] = useState(false)
    const screenWidth  = UseMedia()

    useEffect(() => {
        if(screenWidth > 768){
            setDisplayIconItem(false)
        }
        else {
            setDisplayIconItem(true)
        }
    }, [screenWidth])
    

    const handleOpenItemSection = (e:any) => {
        const sectionName = e.target.closest('.block-link').getAttribute('data-name') as string        
        setSectionOpen({...sectionOpen, [sectionName]: !sectionOpen[sectionName] })
    }
    
    return (
        <Fragment>
            <Container className="Footer">
                <LinkContentWrapper className="link-content-wrapper">
                    <div className="link-content">
                        {/* customer service */}
                        <div className="block-link" data-name="customerService" >
                            <div className="block-link-head" onClick={handleOpenItemSection}>
                                <h3>Customer Service</h3>
                                <span className={`icon ${!displayIconItem && 'none'}`}>
                                {sectionOpen.customerService ? <icon.bothMinus/> : <icon.bothPlush/>}   
                                </span>
                                
                            </div>
                            <ul className="link-list" style={sectionOpen.customerService ? {display: 'block', height: 'auto'} : {}}>
                                <li className="link-list-item">
                                    <a href="##">Shipping</a>
                                </li>
                                <li className="link-list-item">
                                    <a href="##">Return</a>
                                </li>
                                <li className="link-list-item">
                                    <a href="##">Service & Repairs</a>
                                </li>
                                <li className="link-list-item">
                                    <a href="##">Product Info and Warranty</a>
                                </li>
                                <li className="link-list-item">
                                    <a href="##">Airline Carry-On Guide</a>
                                </li>
                                <li className="link-list-item">
                                    <a href="##">FAQs</a>
                                </li>
                                <li className="link-list-item">
                                    <a href="##">Site Map</a>
                                </li>
                            </ul>
                        </div>
                        {/* company */}
                        <div className="block-link" data-name='company' >
                            <div className="block-link-head" onClick={handleOpenItemSection}>
                                <h3>Company</h3>
                                <span className={`icon ${!displayIconItem && 'none'}`}>
                                {sectionOpen.company ? <icon.bothMinus/> : <icon.bothPlush/>}
                                </span>
                            </div>
                            <ul className="link-list" style={sectionOpen.company ? {display: 'block', height: 'auto'} : {}}>
                                <li className="link-list-item">
                                    <a href="##">Company Information</a>
                                </li>
                                <li className="link-list-item">
                                    <a href="##">Jobs</a>
                                </li>
                                <li className="link-list-item">
                                    <a href="##">News and Media</a>
                                </li>
                                <li className="link-list-item">
                                    <a href="##">Our Story</a>
                                </li>
                                <li className="link-list-item">
                                    <a href="##">Accessibility Statement</a>
                                </li>
                                <li className="link-list-item">
                                    <a href="##">Privacy Policy</a>
                                </li>
                                <li className="link-list-item">
                                    <a href="##">Terms of Use</a>
                                </li>
                            </ul>
                        </div>
                        {/* contact */}
                        <div className="block-link" data-name='contact' >
                            <div className="block-link-head" onClick={handleOpenItemSection}>
                                <h3>Contact us</h3>
                                <span className={`icon ${!displayIconItem && 'none'}`}>
                                {sectionOpen.contact ? <icon.bothMinus/> : <icon.bothPlush/>}
                                </span>
                            </div>
                            <ul className="link-list" style={sectionOpen.contact ? {display: 'block', height: 'auto'} : {}}>
                                <li className="link-list-item">
                                    <a href="##" className="contact-phone">
                                        <icon.phone/><span>+84949764207</span>
                                    </a>
                                </li>
                                
                                <li className="link-list-item">
                                    <a href="##" className="contact-phone">
                                        <icon.mail/><span>pcanhgm@gmail.com</span>
                                    </a>
                                </li>
                            
                            </ul>
                        </div>
                    </div>

                </LinkContentWrapper>

                <MoreInformaitonContent className="more-information-content">
                    <div className="follow-us">
                        <div className="follow-content">
                            <div className="follow-content-inner">
                                <div className="title"><h5>follow us</h5></div>
                                <div className="social-list">
                                    <ul className="list">
                                        <li><a href="##"><icon.facebook/></a></li>
                                        <li><a href="##"><icon.twitter/></a></li>
                                        <li><a href="##"><icon.pinterest/></a></li>
                                        <li><a href="##"><icon.instagram/></a></li>
                                        <li><a href="##"><icon.youtube/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subscribe-info">

                        <div className="subscribe-email">
                            <Input 
                                type = "text"
                                placeHD = 'Enter your Email address' 
                                label = 'SIGN UP FOR NEWSLETTER'
                                id= 'subscribe-email'
                                setValue = {setInputEmail}
                            />

                            <div className="subscribe-btn-wrapper">
                                <Button 
                                    title = 'Subscribe'
                                    // handleOnClick?: () => void
                                    width = '50%'
                                    height = '46px'
                                    upperCase = {true}
                                    className = 'subscribe-btn'
                                />
                            </div>

                        </div>
                    </div>
                </MoreInformaitonContent>

            </Container>

            <FooterBottomContent className="Footer-bottom-content">
                <div className="content">
                    <div className="logo-wrapper">
                        <img src={img.logo} className='logo' alt="" />
                    </div>
                    <div className="copy-right">
                    <p>Copyright &copy; 2023 Canh Pham, Huynh Minh</p>
                    </div>
                </div>
            </FooterBottomContent>
        </Fragment>
    );
}

export default Footer;


const Container = styled.div`
    width: 100vw;
    height: auto;
    background-color: #DDDDDD;
    display: flex;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
`

const LinkContentWrapper = styled.div`
    flex: 2; 
    border-right: 1px solid white;
    @media screen and (min-width: 768px){
        padding: 43px 10px;
    }

    .link-content {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;

        @media screen and (min-width: 768px) {
            
            .block-link{
                .block-link-head{
                    text-transform: uppercase;
                    padding: 10px 0;

                    .icon {

                        &.none {
                            display: none;
                        }
                    }
                }
            }

        }


        @media screen and (max-width: 768px) {
            flex-direction: column;
            .block-link{
                cursor: pointer;
                width: 100%;
                overflow: hidden;
                border-bottom: 1px solid white;
                .block-link-head{
                    display: flex;
                    justify-content: space-between;
                    padding: 20px 28px;
                }
            }

            .link-list{ 
                height: 0;
                padding: 0px 28px 20px;
                display: none;
            }

        }

        .block-link{

            .block-link-head{
                text-transform: uppercase;

            }
            .link-list{
                list-style-type: none;
                .link-list-item{

                    a.contact-phone {
                        display: flex;
                        align-items: center;
                        gap: 7px;
                    }

                    & + .link-list-item{
                        margin-top: 16px;
                    }

                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
            
        }
        
    }
`

const MoreInformaitonContent = styled.div`
    flex: 1;

    @media screen and (max-width: 1200px) and (min-width: 768px)  {
        display: flex;

        .follow-us{ 
            width: 50vw;
            border-right: 1px solid white;
        }

        .subscribe-info { 
            width: 50vw;
        }
    }

    .follow-us{

        @media screen and (min-width: 768px) {
            .follow-content{
                padding: 40px 0;
            }
        }

        @media screen and (max-width: 1200px) and (min-width: 768px)  {
            border-top: 1px solid white;
        }
        @media screen and (max-width: 768px)  {
            .follow-content{
                padding: 20px 28px;

                .follow-content-inner {
                    justify-content: space-between;
                }
            }
        }
        .follow-content{
            .follow-content-inner {
                display: flex;
                align-items: center;
                .title {
                    text-transform: uppercase;
                    padding-right: 15px;
                }
                .social-list{
                    .list{
                        gap: 15px;
                        display: flex;
                        list-style-type: none;

                        li a svg {
                            font-size: 24px;
                        }
                    }
                }
                @media screen and (min-width: 1200px) {
                    padding: 0 0 0 calc(30px + 2vw);
                }

                @media screen and (max-width: 1200px) and (min-width: 768px) {
                    justify-content: center;
                }
            }
        }
    }


    .subscribe-info {
        border-top: 1px solid white;
        .subscribe-email {
            padding: 50px 40px;

            .subscribe-btn-wrapper{
                margin-top: 24px;

                .subscribe-btn{
                    font-size: 14px;
                    letter-spacing: 2px;
                }
            }
        }
    }


`

const FooterBottomContent = styled.div`
    height: 60px;
    width: 100vw;

    @media screen and (max-width : 768px) {
        .content {
            justify-content: center;
            flex-direction: column;
        }
    }

    @media screen and (min-width : 768px) {
        .content {
        padding: 12px 0;
        .logo-wrapper {
                margin-left: 44px;
            }
        }
        .copy-right {
            margin-right: 10px;
        }
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo-wrapper {
            .logo{
                width: 60px;
            }
        }
        
        .copy-right {
            p {
                font-size: 14px;
                font-family: ProximaNova,sans-serif;
                font-weight: 400;
                line-height: normal;
                scroll-behavior: smooth;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                -webkit-text-size-adjust: 100%;
            }
        }
    }
`