import React from 'react'
import styled from 'styled-components'
import { icon } from '~/assert/icon'

interface Props {}



function About(props: Props) {
    const {} = props

    return (
        <Container>
            <section className='we-provide-msg'>
                <div className='introduce'>
                    <h1>{data.introduce.title}</h1>
                </div>

                <div className='confirm-msg'>
                    <div className="splice"></div>
                    <h6>{data.introduce.description}</h6>
                </div>
                
            </section>

            <section className='we-provide-value'>

                <ul className='value-list'>{
                    data.provide.map((valueItem, idx) => {
                        return (
                            <li className='value-item' key={idx}>
                                <div className="value-icon-wrapper">
                                    {valueItem.icon}
                                </div>
        
                                <div className="value-title">{valueItem.title}</div>
        
                                <div className="value-description">{valueItem.description}</div>
        
                            </li>
                        )
                    })
                }
                  
                </ul>

            </section>
       
        </Container>
    )
}

const data = {
    introduce: {
        title: "We provide best customer experiences",
        description: "We ensures our customers have the best shopping experience"
    },
    provide : [
        {
            title: "Original Products",
            icon: <icon.protect />,
            description: "We provide money back guarantee if the product are not original"
        },{
            title: "Satisfaction Guarantee",
            icon: <icon.satisfy />,
            description: "Exchange the product you've purchased if it doesn't fit on you"
        },{
            title: "New Arrival Everyday",
            icon: <icon.newArrival />,
            description: "We updates our collections almost everyday"
        },{
            title: "Fast & Free Shipping",
            icon: <icon.shipping />,
            description: "We offer fast and free shipping for our loyal customers"
        }
        
    ]
}

export default About

const Container = styled.div`
    width: 100%;
    padding-top: 120px;
    height: auto;

    .we-provide-msg {
        display: flex;
        justify-content: space-between;
        .introduce {
            h1 {
                font-size: 32px;
            }
            word-break: break-word;
        }
        
        .confirm-msg {
            height: 90px;
            display: flex;
            justify-content: center;
            gap: 20px;
            align-items: center;
            .splice {
                height: 100%;
                width: 3px;
                background-color: black;
                border-radius: 10px;
            }

            h6 {
                font-weight: 100;
                color: #747474;
            }
        }
    }

    .we-provide-value{
        padding-top: 40px;
        width: 100%;
        height: auto;

        .value-list{
            width: 100%;
            display: flex;
            justify-content: space-between;
            list-style-type: none;

            @media screen and (max-width: 768px) {
                flex-direction: column;
                align-items: center;
                gap: 41px;
                .value-item{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            }

            @media screen and (min-width: 769px) {
                .value-item{
                    width: 15%;
                }
            }

            .value-item{
                
                height: auto;
                
                .value-icon-wrapper{
                    height: 50px;
                    width: 50px;
                    border-radius: 6px;
                    background-color: #f2f4f7;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    svg {
                        font-size: 30px;
                    }
                }

                .value-title{
                    font-weight: 600;
                    font-size: 19px;
                    padding: 21px 0px 10px;
                }

                .value-description{
                    font-weight: 100;
                    font-size: 13px;
                    color: #747474;
                }

            }
        }
    }

`