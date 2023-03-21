import React from 'react'
import styled from 'styled-components'
import { icon } from '~/assert/icon'

export default function ChatBox() {
  return (
    <Container>
        <ChatBoxIconBar>
            <ChatBoxIcon>
                <icon.chatBox />
            </ChatBoxIcon>
        </ChatBoxIconBar>

    </Container>
  )
}

const Container = styled.div `
    cursor: pointer;
    position: fixed;
    right: 22px;
    bottom: 50px;
    z-index: 9999;
    
`

const ChatBoxIcon = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border: 0.5px solid #efeaea;

    svg {
        font-size: 30px;
    }
`

const ChatBoxIconBar = styled.div`
    
`