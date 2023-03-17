import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { img } from '~/assert/img'
import Button from '~/component/Button'
import { ProductType2 } from '~/model/Ladingpage.model'
import { formatMoney } from '~/utils'

interface Props {
    product: ProductType2
}

function Product(props: Props) {
    const { product } = props


    return (
    <ProductItem>
        <div className="product-item-inner">
            <Link to={`/product/${product.id}`} className="product-img">
                <img 
                    src={`http://localhost:4000/product/${product.Product_Images}`} 
                    alt="" />
            </Link>

            {/* <div className="color-selector"> 
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
            </div> */}

            <div className="pdp-link">
                <Link to={`/product/${product.id}`}>{product.Product_Name}</Link>
            </div>

            <span className="vendor"> 
                <a href="##">{product.Product_Group_Code}</a>
            </span>

            <div className="price">
                {/* <span className="old-price">$1,150.00</span> */}
                <span className="current-price">{formatMoney(product.Product_Price)}</span>
            </div>

            <div className="action">
                <Button title='Quick Buy' outline={true} width='150px' />
            </div>
        </div>
    </ProductItem>
    )
}

export default Product

const ProductItem = styled.div `
position: relative;

@media screen and (min-width: 992px) {
    width: 33%;
}

@media screen and (max-width: 992px) {
    width: 33%;
}
@media screen and (max-width: 768px) {
    width: 50%;
}

height: auto;  


.product-item-inner {
    margin-top: 10px;
    height: 100%;
    text-align: center;
    background-color: #f8f8f8;
    margin: 0 10px;

    .product-img {
        background-color: transparent;
        margin: 0 10px;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        img {
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
        margin: 17px 0;
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
    @media screen and (max-width: 992px) {
        display: none;
    }
    padding-bottom: 12px;
    margin-top: 21px;
    display: flex;
    justify-content: center;
    transform: translateY(-8px);
}


`