import React, { useState } from 'react'
import styled from 'styled-components'
import { icon } from '~/assert/icon'

interface Props {}

function NewArrival(props: Props) {
    const [typeList, setTypeList] = useState({})

    return (
        <Container>
            <div className="new_in-title"> <h2>New In</h2> </div>

            <ul className="list-type">{
                // map
            }</ul>
            
            <ul className="pick-list">{
                
            }
                
            </ul>
          
        </Container>
    )
}


const listType = [
    {
        title: "Gaming",
    },{
        title: "Cell Phones",
    },{
        title: "Computers",
    },{
        title: "Music",
    },
]

export default NewArrival

const Container = styled.div`
    width: 100wh;
    padding-top: 90px;
    height: auto;
    .new_in-title {
        padding-bottom: 45px;
        
        h2 {
            font-size: 26px;
        }
    }

    
    
`