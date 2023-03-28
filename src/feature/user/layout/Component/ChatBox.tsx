import Tippy from '@tippyjs/react/headless'
import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { icon } from '~/assert/icon'
import { img } from '~/assert/img'

interface User {
    id: number;
    name: string;
    lastMes: string;
    img: any;
}

interface ChatHoverType {
    user: User
}

export default function ChatBox() {
    const [isHoverChat, setIsHoverChat] = useState<Number>(-1)


    const handleOpenChat = () => {
        const chatBoxOverLay = document.querySelector('.chat-box-icon-overlay')
        const chatList = document.querySelector('.list-chat')
        const chatItem = document.querySelectorAll('.chat-item')

        if(chatBoxOverLay && chatList && chatItem) {
            chatBoxOverLay.setAttribute("style", "background-color: grey")
            chatList.setAttribute("style", "opacity: 1")
        }
    }

    const handleCloseChat = () => {
        const chatBoxOverLay = document.querySelector('.chat-box-icon-overlay')
        const chatList = document.querySelector('.list-chat')
        const chatItem = document.querySelectorAll('.chat-item')

        if(chatBoxOverLay && chatList && chatItem) {
            chatBoxOverLay.setAttribute("style", "background-color: transparent")
            chatList.setAttribute("style", "opacity: 0")
        }   
    }

    const handleHoverChat = (user: User) => {
        setIsHoverChat(user.id)
    }

  return (
    <Container>
        <ChatBoxIconBar className='chat-box-icon-bar' 
            onMouseOver={handleOpenChat}
            onMouseLeave={handleCloseChat}
            >
            <Overlay className='chat-box-icon-overlay'/>

            <ChatListWrapper className="chat-list-wrapper">
                <ChatList className='list-chat'>{
                  data.user &&  data.user.map((user, idx) => {
                    return (
                    
                    <ChatItem key={idx} className='chat-item' onMouseOver={() => handleHoverChat(user)}>
                        <Tippy
                        interactive
                        visible={user.id === isHoverChat}
                        placement="auto"
                        offset={[0, 30]}
                        render={(attr) => {
                            return (
                            <PopperPVMess user={user}/>
                            )
                        }}
                        >        
                            <div className="chat-user">
                                <img src={user.img} alt="" />
                            </div>
                        </Tippy>
                    </ChatItem>
                    )
                    })
                }
                    
                </ChatList>
            </ChatListWrapper>
            
            <ChatBoxIcon className='chat-box-icon' >
                <icon.chatBox />
            </ChatBoxIcon>
        </ChatBoxIconBar>

    </Container>
  )
}


const PopperPVMess= (props:ChatHoverType) => {
    const { user } = props
    return (
        <PopperPV>
            <div className="info">
                <h1>{user.name}</h1>
                <div className="text-wrapoer">
                    <h3>{user.lastMes}</h3>
                </div>
            </div>
        </PopperPV>
    )
}

const data = {
    user: [
        {   
            id: 0,
            name: "canh",
            lastMes: "chao chu",
            img: img.defaultAvatar
        },{
            id: 1,
            name: "Minh",
            lastMes: "slightly more concise and maintainable code, set the transition-delay property instead of rewriting the whole transition:",
            img: img.avatar
        },{
            id: 2,
            name: "Luan",
            lastMes: "cac bro dau r",
            img: img.appleWatch
        },{
            id: 3,
            name: "Khoa",
            lastMes: "dm chu dau r",
            img: img.defaultAvatar
        },
    ]
}

const Container = styled.div `
    --chat-item-size: 50px;

    cursor: pointer;
    position: fixed;
    right: 22px;
    bottom: 50px;
    z-index: 1000;
    
`

const ChatBoxIcon = styled.div`
    position: absolute;
    bottom: 10px;
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
    position: relative;
    border-radius: 17px;
    width: 80px;
    height: 420px;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: flex-end;
`

const Overlay = styled.div `
    opacity: .9;
    border-radius: 17px;
    width: 100%;
    height: 100%;
    transition: all linear 400ms;
    background-color: transparent;
`

const ChatListWrapper = styled.div`
    position: absolute;
    bottom: calc(var(--chat-item-size) + 20px);
`

const ChatList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    transition: all linear 200ms;
    transition-delay: 0 1s;
    opacity: 0;
`

const ChatItem = styled.li`
    .chat-user {
        z-index: 9999;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: antiquewhite;
        overflow: hidden;
        img {
            width: 100%
        }
    }
`

const PopperPV = styled.div`
    --popper-height: 50px;

    background-color: #fafafa;
    max-width: 400px;
    width: auto;
    height: var(--popper-height);
    border-radius: 10px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    .info {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 10px;
     

        h1 {
            font-size: 16px;
            color: #3c3c3c;
        }

        .text-wrapoer{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
            h3 {
            font-size: 11px;
            color: #474747;
            opacity: 0.6;
            
        }
        }        
    }

    ::after {
        content: '';
        position: absolute;
        right: -20px;
        border: 10px solid #fafafa;
        border-top-color: transparent;
        border-bottom-color: transparent;
        border-right-color: transparent;
        bottom: calc(var(--popper-height)/2);
        transform: translateY(10px);


    }

`