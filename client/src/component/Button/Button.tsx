import { FC, ReactNode } from "react";
import styled from 'styled-components'
import { icon } from "~/assert/icon";

interface ButtonPropTypes {
    icon?: string
    title: string
    children?: ReactNode
    cancel?: Boolean
    handleOnClick?: () => void
}

interface ButtonStylePropTypes {
    cancel?: Boolean
    handleOnClick?: () => void
}

const Button:FC<ButtonPropTypes> = (props)  => {
    const { children, title, cancel, handleOnClick } = props



    return (
        <ButtonStyle cancel={cancel} onClick={handleOnClick}>
            {children}
            {title}
        </ButtonStyle>
     );
}
 
export default Button;

const ButtonStyle = styled.button<ButtonStylePropTypes>`
    border: none;
    padding: 8.8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    gap: 7px;
    background-color: var(--third_admin);
    ${ ({cancel}) => cancel ? `   background-color: var(--cancel-button);` : `background-color: var(--third_admin);`}
    color: white;
    font-size: 1.2rem;
    transition: all .2s ease-in-out;

    &:hover {
        box-shadow: 0 0.1rem 0.5rem rgb(37 71 106 / 50%), 0 0.25rem 1rem rgb(55 60 67 / 20%);
    }
`
