import React from 'react'
import styled from 'styled-components'
import { icon } from '~/assert/icon'

interface Props {}

function Branch(props: Props) {
    const {} = props

    return (
        <Container>
            <div className="branch-list-title"> <h2>Branch</h2> </div>

            <ul className="branch-list">{
                listBranch.map((branch, idx) => {
                return (
                    <li className='branch' key={idx}>
                        <div className="img-wrapper">
                            {branch.icon}
                        </div>
                    </li>
                )
                })
            }
            </ul>
        </Container>
    )
}

const listBranch = [
    {
        icon: <icon.apple style={{color: '#959595'}}/> 
    },{
        icon: <icon.samsung style={{color: '#132798'}} /> 
    },{
        icon: <icon.xiaomi style={{color: '#EA5C06'}}/> 
    },{
        icon: <icon.nokia style={{color: '#1B4291'}}/> 
    },{
        icon: <icon.sony style={{color: '#1B4291'}}/> 
    },{
        icon: <icon.hp style={{color: '#298ECB'}}/> 
    },

]

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
        gap: 16px;
        flex-wrap: wrap;

        .branch {
            height: 100px;
            width: 100px;
            .img-wrapper{
                width: 100%;
                height: 100%;

                @media screen and (min-width: 769px) {
                    svg {
                        font-size: 100px;
                    }
                }
                @media screen and (max-width: 768px) {
                    svg {
                        font-size: 86px;
                    }
                }

                svg {
                    color: gray;
                }
                
            }
        }
    }
`