import React from 'react'
import styled from 'styled-components'

interface Props {}

function Branch(props: Props) {
    const {} = props

    return (
        <Container>
            <div className="branch-list-title"> <h2>Branch</h2> </div>

            <ul className="branch-list">
                <li className='branch'>
                    <div className="img-wrapper">
                        {/* <img src="" alt="" /> */}
                    </div>
                </li>
                <li className='branch'>
                    <div className="img-wrapper">
                        {/* <img src="" alt="" /> */}
                    </div>
                </li>
                <li className='branch'>
                    <div className="img-wrapper">
                        {/* <img src="" alt="" /> */}
                    </div>
                </li>
                <li className='branch'>
                    <div className="img-wrapper">
                        {/* <img src="" alt="" /> */}
                    </div>
                </li>
                <li className='branch'>
                    <div className="img-wrapper">
                        {/* <img src="" alt="" /> */}
                    </div>
                </li>
                <li className='branch'>
                    <div className="img-wrapper">
                        {/* <img src="" alt="" /> */}
                    </div>
                </li>

            </ul>
        </Container>
    )
}

export default Branch

const Container = styled.div`
    width: 100wh;
    padding-top: 20px;
    height: auto;
    .branch-list-title {
        padding-bottom: 45px;
        
        h2 {
            font-size: 26px;
        }
    }

    .branch-list {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .branch {
            height: 100px;
            width: 100px;
            .img-wrapper{
                width: 100%;
                height: 100%;
                background-color: grey;
                img {

                }
            }
        }
    }
`