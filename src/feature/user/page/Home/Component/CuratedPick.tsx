import React, { ChangeEvent, MouseEvent } from 'react'
import styled from 'styled-components'
import { icon } from '~/assert/icon'
import { img } from '~/assert/img'

interface PickItemPropType {
    pickItem: {
        
        title: string,
        img: string,
        hover: string
    }
}



function CurratedPick() {

    return (
        <Container>
            <div className="pick-list-title"> <h2>Currated Picks</h2> </div>
            <ul className="pick-list">{
                data.pickList.map((pickItem, idx) => {
                return (
                    <li className="pick-item-wrapper" key={idx} >
                       <PickItem pickItem={pickItem} />
                    </li>
                    )
                })
            }
                
            </ul>
          
        </Container>
    )
}

const PickItem = (props:PickItemPropType) => {
    const {pickItem} = props

    const handleMouseOver = (e: MouseEvent<HTMLImageElement>): void => {
    e.currentTarget.src = pickItem.hover;
    }

    const handleMouseOut = (e: MouseEvent<HTMLImageElement>): void => {
    e.currentTarget.src = pickItem.img;
    }

    return (
        <div className="pick-item">
            <img src={pickItem.img} 
                className="pick-item-img"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                alt=''
            />
            <button className="pick-btn">
                <div className="pick-btn-title">{pickItem.title}</div>
                <icon.arrowLineRight />
            </button>
        </div>
    )
}

const data = {
    title: "Currated picks",
    pickList: [
        {
            title: "Best Seller",
            img: img.appleWatch,
            hover: img.watchHover
        }, {
            title: "Phone",
            img: img.phone,
            hover: img.iphoneHover
        },{
            title: "Laptop",
            img: img.macbook,
            hover: img.macbookHover
        },{
            title: "Gaming gear",
            img: img.gaming,
            hover: img.gtxHover
        },
    ]
}

export default CurratedPick

const Container = styled.div`
    width: 100wh;
    padding-top: 90px;
    height: auto;
    .pick-list-title {
        padding-bottom: 45px;
        
        h2 {
            font-size: 26px;
        }
    }
    .pick-list{
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        .pick-item-wrapper {
            height: 266px;
            width: 20%;
            border-radius: 14px;
            background-color: grey;
            overflow: hidden;

            .pick-item {
                width: 100%;
                height: 100%;
                position: relative;

                &:hover {

                    .pick-item-img{ 
                        opacity: 1;
                    }

                    .pick-btn{

                        .pick-btn-title {
                            transform: translateX(20px);
                            font-size: 19px;
                        }
                        svg {
                            transform: translateX(60px)
                        }
                    }
                    
                }

                .pick-item-img{
                    width: 100%;
                    height: 100%;
                    opacity: .6;
                    cursor: pointer;
                    transition: all linear .2s;
                }

                .pick-btn{
                    position: absolute;
                    width: 60%;
                    height: 18%;
                    bottom: 20px;
                    left: 0;
                    right: 0px;
                    margin: 0 auto;
                    border-radius: 10px;
                    cursor: pointer;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    overflow: hidden;

                    .pick-btn-title {
                        font-size: 16px;
                        transition: all ease-in-out .1s;
                    }
                    svg {
                        font-size: 21px;
                        transition: all ease-in-out .1s;
                    }
                }
            }
        }
    }
    
    
`