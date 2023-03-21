import Tippy from "@tippyjs/react/headless";
import { useState } from "react";
import styled from "styled-components";
import { icon } from "~/assert/icon";
import { formatMoney } from "~/utils";

interface PriceSortProps {
    // handlePriceSort: (value: string) => void;
};


const Navbar = () => {
    return (
        <Nav>
            <div className="card">
                 <div className="title">
                    <h1>{data.title}</h1>
                 </div>
                
                <PriceSort />

            </div>
        </Nav>
    );
}

const PriceSort: React.FC<PriceSortProps> = (props) => {
    // const { handlePriceSort } = props

    const [value, setValue] = useState(0);
    const [isOpen, setIsOpen] = useState<Boolean>(false)
    const [isPriceOver, setIsPriceOver]= useState<boolean | undefined>(false)


    const handleInputPrice = (e:any) => {
        setValue(e.target.value)
    }

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
       <RangeInputBox>
            <div className="title" onClick={handleToggle}>
                <h2>{data.priceBar.title}</h2>

                <div className="hide-wrapper">
                    <span>{ isOpen? data.show : data.hide}</span>
                    <icon.arrowDown2 style={isOpen && {transform: "rotate(180deg)"}}/> 
                </div>
            </div>

            <div className="content" style={isOpen ? {display: "none"} : {display: "block"}}>
                <Tippy 
                    interactive
                    visible={isPriceOver}
                    placement="bottom"
                    render={attrs => {
                        return (
                            <PopperPrice tabIndex={-1}>
                                <span>
                                    {formatMoney(value)}
                                </span>
                            </PopperPrice>
                        )
                    }}
                        >
                    <RangeInput  
                        type="range"
                        min={data.priceBar.maxPrice}
                        max={data.priceBar.minPrice}
                        step='1'
                        // value={value}
                        // onChange={onChange}
                        onMouseOver={() => setIsPriceOver(true)}
                        onMouseLeave={() => setIsPriceOver(false)}
                        onInput={handleInputPrice}
                        />
                </Tippy>
                        <div className="price" >
                            <div className="min-price">{formatMoney(data.priceBar.maxPrice)}</div>
                            <div className="max-price">{formatMoney(data.priceBar.minPrice)}</div>
                        </div>
            </div>
        </RangeInputBox>
    );
};




const data = {
    title: "Filter",
    hide: "Hide",
    show:"Show",
    priceBar: {
        title: "Price",
        maxPrice: "10000",
        minPrice: "0",
    },

}

export default Navbar;

const Nav = styled.div`
    border: 2px solid #ebebeb;
    border-radius: 10px;
    flex: 1 0 20%;
    padding: 0 15px;
    width: 350px;

    h1 {
        font-size: 15px;
        padding: 15px 0;
    }
`

const RangeInputBox = styled.div`
    width: 100%;
    border-bottom: 1px solid #d8d8d8;
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        height: 40px;

        .hide-wrapper {
            border-radius: 15px;
            height: auto;
            padding: 3px 9px;
            display: flex;
            align-items: center;
            border: 1.5px solid #D8D8D8;

        }
        h2 {
            font-size: 13px ;
        }

        svg {
            font-size: 20px
        }
    }
    .content {
        padding-bottom: 30px;
    }
    
    .price{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .min-price {

        }

        .max-price {
            
        }
    }


    
`

const RangeInput = styled.input`
  -webkit-appearance: none;
  margin : 10px 0 10px;
  padding: 2px 0;
  width: 100%;
  height: 6px;
  background-color: #ddd;
  border-radius: 3px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background-color: #22a7f0;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background-color: #22a7f0;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-ms-thumb {
    width: 18px;
    height: 18px;
    background-color: #22a7f0;
    border-radius: 50%;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:active::-webkit-slider-thumb {
    transform: scale(1.2);
  }

  &::-moz-range-track {
    background-color: blue; 
    height: 6px;
    border-radius: 3px;
  }


  &::-ms-track {
    background-color: blue; 
    height: 6px;
    border-radius: 3px;
  }

  &::-ms-fill-lower {
    background-color: #ddd;
    height: 6px;
    border-radius: 3px;
  }

  &::-ms-fill-upper {
    background-color: #ddd;
    height: 6px;
    border-radius: 3px;
  }

  &::-ms-tooltip {
    display: none;
  }
`;

const PopperPrice = styled.div`
    width: auto;
    height: 35px;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b7b7b7;
    color: #363636;
`