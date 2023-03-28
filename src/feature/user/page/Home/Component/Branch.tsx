import React from 'react'
import styled from 'styled-components'
import { icon } from '~/assert/icon'
import config from '~/config'

interface Props {
    currentPage?: string
}

function Branch(props: Props) {
    const {currentPage} = props
    const { about } = config.routePath

    return (
        <Container>
        { currentPage !== about && <div className="branch-list-title"> <h2>Branch</h2> </div>}

            <ul className="branch-list">{
                listBranch.map((branch, idx) => {
                return (
                    <li className='branch' key={idx}>
                        <div className="img-wrapper" style={{color: branch.color}}>
                            {currentPage === about ? branch.name : branch.icon}
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
        name: 'Apple',
        icon: <icon.apple style={{color: '#959595'}}/> ,
        color: '#959595'
    },{
        name: 'Samsung',
        icon: <icon.samsung style={{color: '#132798'}} /> ,
        color: '#132798'
    },{
        name: 'Xiaomi',
        icon: <icon.xiaomi style={{color: '#EA5C06'}}/> ,
        color: '#EA5C06'
    },{
        name: 'Nokia',
        icon: <icon.nokia style={{color: '#1B4291'}}/> ,
        color: '#1B4291'
    },{
        name: 'Huawai',
        icon: <icon.huawai style={{color: '#1B4291'}}/> ,
        color: '#1B4291'
    },{
        name: 'HP',
        icon: <icon.hp style={{color: '#298ECB'}}/> ,
        color: '#298ECB'
    },

]

export default Branch

const Container = styled.div`
    width: 100%;
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
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 30px;
                font-weight: 900;

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