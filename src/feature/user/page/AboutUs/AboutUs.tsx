import styled, { keyframes } from "styled-components";
import Button from "~/component/Button";
import { Col4, Col5, Col6, Row } from "~/component/GlobalStyles.styles";
import { img } from "~/assert/img"; 
import Branch from "../Home/Component/Branch";
import config from "~/config";
import { useIntersectionObserver, UseMedia } from "~/hook";
import { RefObject, useEffect, useRef, useState } from "react";

interface SectionType {
    show?: boolean | undefined
}

const AboutUs = () => {
    const location = config.routePath.about
    const CompanyRef = useRef<HTMLElement>(null)
    const companyEntry = useIntersectionObserver(CompanyRef, {})
    const isCompanyVisible = !!companyEntry?.isIntersecting

    const BranchRef = useRef<HTMLDivElement | null>(null)
    const branchEntry = useIntersectionObserver(BranchRef, {})
    const isBranchVisible = !!branchEntry?.isIntersecting


    const ref3 = useRef<HTMLElement>(null)



    return ( 
        <Container className="about-us-container" >
            <div className="grid">
                <CompanyInfo ref={CompanyRef} show={isCompanyVisible}>
                    <Row>
                        <Col4>
                            <Info show={isCompanyVisible}>
                                <h6 className="name">{data.companyInfo.companyName}</h6>
                                <div className="title">
                                    <h1>{data.companyInfo.titleFirst}</h1>
                                    <h1>{data.companyInfo.titleSecond}</h1>
                                    <h1>{data.companyInfo.titleThird}</h1>
                                </div>
                                <h1 className="description">{data.companyInfo.description}</h1>
                                <div className="button-wrapper">
                                    <Button title={data.companyInfo.btn} width='200px' height="40px" color="black" ></Button>
                                </div>
                            </Info>
                        </Col4>

                        <Col6>
                            <div className="img-wrapper">
                                <img src={img.macBook} alt="" />
                            </div>
                        </Col6>
                    </Row>

                </CompanyInfo>

                <BrandAbout ref={BranchRef} show={isBranchVisible}>
                    <Row>
                        <Col6>
                            <div className="img-wrapper">
                                <img src={img.appleWatchAboutUs} alt="" />
                            </div>
                        </Col6>
                        <Col4>
                            <Info>
                                <h6 className="name">{data.companyInfo.companyName}</h6>
                                <div className="title">
                                    <h1>{data.companyInfo.titleFirst}</h1>
                                    <h1>{data.companyInfo.titleSecond}</h1>
                                    <h1>{data.companyInfo.titleThird}</h1>
                                </div>
                                <h1 className="description">{data.companyInfo.description}</h1>
                                <div className="button-wrapper">
                                    <Button title={data.companyInfo.btn} width='200px' height="40px" color="black" ></Button>
                                </div>
                            </Info>
                        </Col4>
                    </Row>
                </BrandAbout>

                <Section3 ref={ref3}>
                    <Row>
                        <Branch currentPage={location}/>

                    </Row>
                </Section3>
            </div>
        </Container>
     );
}

const data = {
    companyInfo:{
        companyName: 'MC Shop',
        titleFirst: 'Famous Brands',
        titleSecond: 'Collection',
        titleThird: 'point',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
        btn: 'Explore Now'
    },
    branch: {
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.'
    }
}

 
export default AboutUs;

// const colorAppear = keyframes`
//   from {
//     background-position: -100% 0;
//     background-color: transparent
//   }
//   to {
//     background-position: 0 0;
//     background-color: var(--secondary)
//   }
// `;


const Container = styled.div `
    width: 100vw;

    @media screen and (min-width: 1200px) {
        .grid {
            padding: 0 120px;
        }
    }
    @media screen and (max-width: 1200px) and (min-width: 768px) {
        .grid {
            padding: 0 50px;
        }
    }
    @media screen and (max-width: 768px) {
        .grid {
            padding: 0 20px;
        }
    }
`

const CompanyInfo = styled.section<SectionType>`
    width: 100%;
    height: calc(100vh - var(--header-bar-height));
    display: flex;
    justify-content: center;
    opacity: ${({show}) => show ? '1' : '0'};
    transition: all linear 400ms;

    .img-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        img{
            width: 70%;
        }
    }
`

const Info = styled.div<SectionType>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .name{
        color: var(--primary);
        font-size: 20px;
    }

    .title{ 
        color: #464646;
        padding-top: 10px;
        h1 {
            font-size: 55px;
            font-weight: 900;
            &:nth-child(2) {
                transition: all linear 400ms;
                float: left;
                margin-right: 9px;
                transition-delay: 400ms;
                transition-property: background-color, font-size, transform, color;
                transition-timing-function: ease-in-out;
                transition-duration: 200ms;
                ${({show}) => show 
                ? 'color: white' 
                : 'color: black}'};
            }
        }
    }

    .description{
        padding: 50px 0;
        line-height: 18px;
        color: #9da1a5;
    }

    .button-wrapper{
    }
`


const BrandAbout = styled.section<SectionType>`
    width: 100%;
    height: calc(100vh - var(--header-bar-height));
    display: flex;
    flex-direction: column;
    justify-content: center;

    opacity: ${({show}) => show ? '1' : '0'};
    transition: all linear 400ms;

    .img-wrapper {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 70%;
        }
    }
`

const Section3 = styled.section `
    width: 100%;
    height: calc(100vh - var(--header-bar-height));
    background-color: #c1b19e;
`

