import { ChangeEvent, FC, ReactNode, useState } from 'react';
import styled from 'styled-components'
import SelectInput from './Select';

interface InputPropTypes {
    placeHD?: string
    label?: string
    id: string
    type: string
    width?: string
    value?: string
    setValue: React.Dispatch<React.SetStateAction<string>> 
    error?: string
}

interface InputStylePropTypes { 
    width?: string
}

const Input:FC<InputPropTypes> = (props) => {
    const { label, id, type, width, value, setValue, error, placeHD} = props

    const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    
    return ( 
    <Container width={width}>
        <label htmlFor={id} className='label'>{label}</label>
        <InputField placeholder={placeHD} autoComplete="new-password" id={id} type={type} value={value} onInput={handleInput} width={width} />
       {error && <div className="error">{error}</div>}
    </Container>
    );
}
 
export default Input;

const Container = styled.div<InputStylePropTypes>`
    ${({width}) => width? width : `width: 100%`}

    .label{
        padding: 0 10px;
        font-size: 1.2rem;
    }

    .error{
        font-size: 1.2rem;
        color: var(--error);
    }
`

const InputField = styled.input<InputStylePropTypes>`
    margin-top: 5px;
    display: block;
    width: ${({width}) => width ? width : '100%'};
    padding: 0.55rem 1rem;
    font-size: 1.35rem;
    font-weight: 400;
    line-height: 1.5;
    color: #75868f;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.07);
    appearance: none;
    border-radius: 0.4375rem;
    box-shadow: inset 0 1px 2px rgb(55 60 67 / 8%);
    transition: border-color .35s ease-in-out,box-shadow .35s ease-in-out;
    position: relative;

    &:focus{
        color: #75868f;
        background-color: #fff;
        border-color: #25476a;
        outline: 0;
        box-shadow: inset 0 1px 2px rgb(55 60 67 / 8%), 0 0 0.75rem 0 rgb(0 0 0 / 13%);
    }

`

const Select = styled.select`
    margin-top: 5px;
    display: block;
    padding: 0.55rem 1rem;
    font-size: 1.35rem;
    font-weight: 400;
    line-height: 1.5;
    color: #75868f;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.07);
    /* appearance: none; */
    border-radius: 0.4375rem;
    box-shadow: inset 0 1px 2px rgb(55 60 67 / 8%);
    transition: border-color .35s ease-in-out,box-shadow .35s ease-in-out;

     &:focus{
        color: #75868f;
        background-color: #fff;
        border-color: #25476a;
        outline: 0;
        box-shadow: inset 0 1px 2px rgb(55 60 67 / 8%), 0 0 0.75rem 0 rgb(0 0 0 / 13%);
    }
`