import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '~/component/Button'
import QuantityChange from '~/component/QuantityChange'
import { ProductType } from '~/model/Product.model'
import { formatMoney } from '~/utils'

interface Props {}



interface ListProduct {
    products: ProductType[]
    total: number,
    skip: number,
    limit: number
}


function AddToCartFlyOut(props: Props) {
    const {} = props

    const [listProduct, setListProduct] = useState<ProductType[]>([])
    const [totalPrice, setTotalPrice] = useState<string>('0')
    const [load, setLoad] = useState<boolean>(true)

    useEffect(() => {
        setLoad(true)
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            setListProduct(data.products)
            setLoad(false)
            let totalPrice = 0
            
            data.products.forEach((product:ProductType) => {
                totalPrice+= product.price
            })

            setTotalPrice(String(totalPrice))
        })
        .catch(err => {
            setLoad(false)
            console.log('fail to get API');
            
        })
    }, []);

    return (
        <Container>
        {!load && <Fragment>
            <ProductList className='list-product'>
            {listProduct ? 
            listProduct.map((product,idx) => {
            return (<ProductItem key={idx} className='product-item'>
                        <ProductItemInner className='product-inner'>
                            <ProductImg className='product-img'>
                                <img src={product.images[0]} alt="" />
                            </ProductImg>

                            <ProductInformation className='product-information'>
                                <div className="infor-inner">
                                    <div className="branch">{product.brand}</div>
                                    <div className="product-name">{product.title}</div>
                                    <div className="price">{formatMoney(product.price)}</div>
                                </div>
                                <QuantityChange small={true}/>
                            </ProductInformation>
                        </ProductItemInner>
                    </ProductItem>)
            })
            :<EmptyCart>Your Cart is Empty</EmptyCart>
            } 
            </ProductList>
        
            <CartFooter>
                <SubTotal>
                    <div className="title">SubTotal</div>
                    <div className="total-price">{formatMoney(totalPrice)}</div>
                </SubTotal>
                <Button width='100%' height='40px' upperCase={true} title='checkout' />
            </CartFooter>
        </Fragment>
        }
        </Container>
    )
}

export default AddToCartFlyOut

const Container = styled.div `
    width: 100%;
    height: 100%;
    max-height: calc(100vh - (var(--header-bar-height) + var(--header-nav-height) + var(--flyout-footer-height) + var(--header-cart-flyout-height)));
    
    @media screen and (max-width : 992px) {
        max-height: calc(100vh - (var(--header-bar-height-mb) + var(--flyout-footer-height) + var(--header-cart-flyout-height)));
    }
`

const EmptyCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

`
const ProductList = styled.ul `
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`

const ProductItem = styled.div `
    padding: 20px 20px;
`
const ProductItemInner = styled.div `
    display: flex;
    width: 100%;
    height: auto;
`

const ProductImg = styled.div `
    width: 75px;
    height: auto;

    img {
        width: 100%
    }
`
const ProductInformation = styled.div `
    padding-left: 20px;
    
    .infor-inner {
        margin-bottom: 10px;
        .branch{
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 7px;
        }

        .product-name{
            color: var(--light-text);
            margin-bottom: 8px;
        }

        .price{
            color: var(--middle-both-text);
            font-size: 16px;
        }
    }
`

const CartFooter = styled.div `
    padding: 7px 26px 0px;
    height: var(--flyout-footer-height);
    border-top: 1px solid var(--border-menu);

`
const SubTotal = styled.div`
    margin-bottom: 10px;
    color: var(--middle-both-text);
    width: 100%;
    display: flex;
    justify-content: space-between;

    .title {
        font-weight: 600;
        font-size: 18px;
    }
    
    .total-price{
        font-size: 18px;    
        font-weight: 600;
    }

`