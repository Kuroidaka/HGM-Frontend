import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FiAlignJustify } from 'react-icons/fi'
import { BiSearch } from 'react-icons/bi'
import { inputWrapRefProps } from "../HeaderSideBar";

interface HeaderProps {
    handleClickSelectBtn: (inputWrapRef: inputWrapRefProps) => void,
    children: ReactNode
}


const Header:FC<HeaderProps> = (props) => {
    const { handleClickSelectBtn } = props

    const inputRef = useRef<HTMLInputElement>(null)
    const inputWrapRef = useRef<HTMLFormElement>(null)
    const [text, setText] = useState<string>('')


    useEffect(() => {
        if(inputRef.current && inputRef.current?.value !== ''){
            inputWrapRef.current?.setAttribute('style', 'width: 300px')
        }
        else {
            inputWrapRef.current?.setAttribute('style', 'width: 40px')
        }

    }, [text])
    
    
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleSearch = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(text);
    }

    
    return ( 
        <HeaderBar>
            <Container>

                <div className="wrap-select">
                    <FiAlignJustify className="icon select" onClick={() => handleClickSelectBtn(inputWrapRef)}/>
                </div>

                <form ref={inputWrapRef} onSubmit={handleSearch} className="wrap-search-bar">
                    <input value={text} ref={inputRef} type="text" onInput={handleInput} placeholder="Search here ..." />
                    <div className="wrap-icon"> 
                        <BiSearch className="icon search"/>
                    </div>

                </form>

            </Container>
        </HeaderBar>
     );
}
 
export default Header;

const HeaderBar = styled.div`

height: var(--header-height);

width: 100%;
background-color: var(--primary_admin);
display: flex;
align-items: center ;
justify-content: center;


`

const Container = styled.div`
width: 100%;
height: 100%;
display: grid;
align-items: center;
grid-template-columns: 10% 50% 20% 20%;

    .wrap-select{
        width: 35px;
        height: 35px;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        transition: all .2s ease-in-out;
        &:hover{
            background-color: var(--semi-primary_admin);
            
        }
        .select {
            font-size: 25px;
            pointer-events: auto;
        }
    }
    .wrap-search-bar{
        position: relative;
        -webkit-transition: all .5s ease-in-out;
        transition: all .5s ease-in-out;
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 25px;
        border: 2.5px solid white;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 0;
        &:hover {
            width: 300px!important;
            cursor: pointer;
            
        }

        &:hover input {
            display: block;
        }

        input{
            position: absolute;
            width: 100%;;
            height: 80%;
            line-height: 30px;
            outline: 0;
            border: none;
            display: none;
            font-size: 1em;
            border-radius: 20px;
            padding: 0 20px;
            background-color: transparent;
            transition: all .5 ease-in-out;

            &:not(:placeholder-shown) {
                display: block;
                
            }
        }




        /* width: ; */
        .wrap-icon{
            box-sizing: border-box;
            flex-shrink: 0;
    /* position: absolute; */
    color: #07051a;
    text-align: center;
    font-size: 1.2em;
    transition: all .5s ease-in-out;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background-color: var(--secondary_admin);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99;
            .search {
                font-size: 25px;
                color: var(--white-color);
            }
    }}

    


`