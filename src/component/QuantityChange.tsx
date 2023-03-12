import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { icon } from '~/assert/icon';

interface Props {
    small?: boolean 
    middle?: boolean 
    large?: boolean 

}

interface QuantityAdjustProp {
    small?: boolean 
    middle?: boolean 
    large?: boolean 
}

const QuantityChange:FC<Props> = (props) => {
    const {small, middle, large} = props
    const [quantity, setQuantity] = useState<number>(1)

    const handleDecrease = (e:any) => {
        if(quantity > 1){
          setQuantity(quantity - 1)
        }
    }

    const handleIncrease = (e:any) => {
        if(quantity >= 0){
            setQuantity(quantity + 1)
            // const inputElm = e.target.closest('data-quantity')
            // console.log(inputElm);
            
        }
    }

    const handleInputQuantity = (e:any) => {
        setQuantity(Number(e.target.value))
    }

    return (
        <QuantityAdjust small={small} middle={middle} large={large}>
            <button className='minus-btn' onClick={handleDecrease} ><icon.minus/></button>
                <input type="number" data-quantity={quantity} value={quantity} onInput={handleInputQuantity}/>
            <button className='plus-btn' onClick={handleIncrease}><icon.plus/></button>
        </QuantityAdjust>
    )
}

export default QuantityChange

const QuantityAdjust = styled.div<QuantityAdjustProp>`
    width: 100px;
    
    height: ${({small}) => small && '30px' };
    height: ${({middle}) => middle && '45px' };
    /* height: ${({large}) => large && '60px' }; */
    background-color: #ffffff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    position: relative;

    .label-wrapper{
      position: absolute;
      top: -25px;
      
      label {
        font-size: 15px;
        font-weight: 700;
        width: 100%;
        margin: auto;
      }
    }
    
    .minus-btn, .plus-btn  {
    position: absolute;
    height: 100%;
    width: 30px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    }

    input {
      height: 100%;
      width: 30%;
      outline: none;
      border: none;
      background-color: transparent;
      text-align: center;

      /* Chrome, Safari, Edge, Opera */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      &[type=number] {
        -moz-appearance: textfield;
      }
    }

    .minus-btn {
      left: 0;
    }

    .plus-btn {
      right: 0;
    }
    

    
`