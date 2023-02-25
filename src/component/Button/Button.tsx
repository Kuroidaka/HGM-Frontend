import { FC, ReactNode } from "react";
import styled from 'styled-components'

interface ButtonPropTypes {
    icon?: string
    title: string
    children?: ReactNode
    cancel?: Boolean
    handleOnClick?: () => void
    width?: string
    height?: string
    radius?: string
    color?: string
    upperCase?: Boolean
    outline?: Boolean
    className?: string
}

interface ButtonStylePropTypes {
    cancel?: Boolean
    handleOnClick?: () => void
    width?: string
    height?: string
    icon?: ReactNode
    radius?: string
    color?: string
    upperCase?: Boolean
}

const Button:FC<ButtonPropTypes> = (props)  => {
    const { children, title, cancel, className, handleOnClick, width, height, radius, color, upperCase, outline } = props

    if(outline) {
         return (
            <ButtonOutline 
                        onClick={handleOnClick} 
                        width={width} 
                        height={height} 
                        radius={radius} 
                        icon={children}
                        color={color}
                        upperCase={upperCase}
                        className={className}
                        >
                {children}
                {title}
            </ButtonOutline>
         );
    }
    else {
        return (
            <ButtonStyle cancel={cancel} 
                        onClick={handleOnClick} 
                        width={width} 
                        height={height} 
                        radius={radius} 
                        icon={children}
                        color={color}
                        upperCase={upperCase}
                        className={className}
                        >
                {children}
                {title}
            </ButtonStyle>
         );
    }

   
}
 
export default Button;

const ButtonStyle = styled.button<ButtonStylePropTypes>`

    width: ${({width}) => width};
    height: ${({height}) => height};
    text-transform: ${({upperCase}) => upperCase && 'uppercase'};
    justify-content: ${({icon}) => icon? 'space-around' : 'center'};
    border-radius: ${({radius})=> radius ? radius : '5px'};
    background-color: ${({color})=> color ? color+ '!important' : 'var(--third_admin)'};
    ${ ({cancel}) => cancel ? `   background-color: var(--cancel-button)` : `background-color: var(--third_admin)`};
    position: inherit;
    border: none;
    padding: 8.8px 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 7px;
    color: white;
    font-size: 1.2rem;
    transition: all .2s ease-in-out;

    
    &:hover {
        box-shadow: 0 0.1rem 0.5rem rgb(37 71 106 / 50%), 0 0.25rem 1rem rgb(55 60 67 / 20%);
    }
`

const ButtonOutline = styled.button<ButtonStylePropTypes>`
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 5px;
    position: inherit;
    border: 1px solid black;
    padding: 8.8px 16px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    gap: 7px;
    color: black;
    font-size: 1.2rem;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    width: ${({width}) => width};
    height: ${({height}) => height};
    font-weight: 900;

    &:hover {
        box-shadow: 0 0.1rem 0.5rem rgb(37 71 106 / 50%), 0 0.25rem 1rem rgb(55 60 67 / 20%);
    }
`