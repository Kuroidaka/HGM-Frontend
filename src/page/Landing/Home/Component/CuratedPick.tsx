import React from 'react'
import styled from 'styled-components'

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
                            <div className="pick-btn">
                                <div className="pick-btn-title"></div>
                                <div className="pick-icon-wrapper">

                                </div>
                            </div>
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
        .pick-item-wrapper {

            .pick-item {
                
                .pick-btn{

                    .pick-btn-title {

                    }
                    .pick-icon-wrapper {

                    }
                }
            }
        }
    }
    
    
`