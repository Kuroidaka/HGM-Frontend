import Button from "~/component/Button/Button";
import { useState } from "react";
import styled from "styled-components";
import SelectInput from "~/component/Select/Select";


const sortList = [
    { label: 'Price low to high', value: 'Price low to high' },
    { label: 'Price high to low', value: 'Price high to low' },
]

const ProductSection = () => {
    const [sortType, setSortType] = useState<string>(sortList[0].value)

    return ( 
     <Container>

        <div className="header-nav">
            <span>10 items</span>
            <span className="sort-section">
                <SelectInput label='Sort' id='Sort' width='150px' valueList={sortList} setValue={setSortType}/>
            </span>

            
        </div>

        <div className="product-list-wrap">
            <div className="product-list">
                <div className="product-item">
                    <div className="product-item-inner">
                        <div className="product-img">
                            {/* <img src="" alt="" /> */}
                        </div>

                        <div className="color-selector"> 
                            <div className="color-wrapper">
                                <div className="color"></div>
                            </div>
                            <div className="color-wrapper">
                                <div className="color"></div>
                            </div>
                            <div className="color-wrapper">
                                <div className="color"></div>
                            </div>
                            <div className="color-wrapper">
                                <div className="color"></div>
                            </div>
                            <div className="color-wrapper">
                                <div className="color"></div>
                            </div>
                            <div className="color-wrapper">
                                <div className="color"></div>
                            </div>
                            <div className="color-wrapper">
                                <div className="color"></div>
                            </div>
                            <div className="color-wrapper">
                                <div className="color"></div>
                            </div>
                        </div>

                        <div className="pdp-link">
                            <a href="##">Dynamic Backpack</a>
                        </div>

                        <span className="vendor"> 
                            <a href="##">ALPHA BRAVO</a>
                        </span>

                        <div className="price">
                            <span className="old-price">$1,150.00</span>
                            <span className="current-price">$1,150.00</span>
                        </div>

                        <div className="action">
                            <Button title='Quick Buy' outline={true} width='150px' />
                        </div>
                    </div>
                </div>
        

            </div>
        </div>

     </Container>
     );
}
 
export default ProductSection;

const Container = styled.div `
    padding: 0 15px;

    .header-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }

    .product-list-wrap {
        .product-list{
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            .product-item{
                position: relative;
                /* margin: 5px; */
                width: 265px;
                height: 490px;  
                background-color: #f8f8f8;

                .product-item-inner {
                    margin-top: 10px;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    text-align: center;

                    .product-img {
                        background-color: #9c9c9c;
                        margin: 0 10px;
                        height: 60%;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .color-selector{
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 10px;
                        gap: 8px;
                        cursor: pointer;
                        flex-wrap: wrap;
                        margin-bottom: 8px;

                        .color-wrapper {
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;

                            .color {
                                margin: auto;
                                width: 100%;
                                height: 100%;
                                background-color: red;
                                border-radius: 50%;
                                position: relative;

                                &:hover{
                                    &::after {
                                    border: 1px solid;
                                    content: "";
                                    position: absolute;
                                    width: calc(100% + 6px);
                                    height: calc(100% + 6px);
                                    top: -3px;
                                    left: -3px;
                                    border-radius: 50%;
                                    }
                                }

                                
                            }

                           
                            
                           
                        }
                    }

                    .pdp-link{
                        margin-bottom: 7px;
                        line-height: 16px;
                        font-size: .857rem;
                        font-weight: 400;
                    }

                    .vendor {
                        a {
                            font-weight: 400;
                            font-size: 9.9px;
                            color: #777;
                            line-height: 1.2;
                        }

                    }
                    .price {
                        padding: 10px;
                        font-weight: 400;
                        .current-price{
                            color: #222;
                            padding-left: 7px;
                            font-size: 1.5rem;
                        }
                        .old-price{
                            text-decoration: line-through;
                            opacity: .5;
                        }
                    }
                      
                }
    
                .action{
                    margin: auto;
                    transform: translateY(-8px);
                }

            }
        }
    }
`