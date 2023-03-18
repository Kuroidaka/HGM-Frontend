import React from 'react'
import styled from 'styled-components'
import { icon } from '~/assert/icon'

interface Props {}

function CurratedPick(props: Props) {
    const {} = props

    return (
        <Container>
            <div className="pick-list-title"> <h2>Currated Picks</h2> </div>
            <ul className="pick-list">{
                data.pickList.map((pickItem) => {
                return (
                    <li className="pick-item-wrapper">
                        <div className="pick-item">
                            <button className="pick-btn">
                                <div className="pick-btn-title">{pickItem.title}</div>
                                <icon.arrowLineRight />
                            </button>
                        </div>
                    </li>
                    )
                })
            }
                
            </ul>
          
        </Container>
    )
}

const data = {
    title: "Currated picks",
    pickList: [
        {
            title: "Best Seller"
        }, {
            title: "Shop Men"
        },{
            title: "Shop Women"
        },{
            title: "Shop Cassual"
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

            .pick-item {
                width: 100%;
                height: 100%;
                position: relative;

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

                    .pick-btn-title {
                        font-size: 16px;
                    }
                    svg {
                        font-size: 21px;
                    }
                }
            }
        }
    }
    
    
`