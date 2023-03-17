import { Col, Input, Row, Select } from 'antd'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { CartApi } from '~/api/cartApi/cartApi'
import Button from '~/component/Button'
import QuantityChange from '~/component/QuantityChange'
import { CartContext, CartContextValue } from '~/context/Context'
import { CartType, ProductType, ProductType2 } from '~/model/Ladingpage.model'
import { formatMoney } from '~/utils'

interface Props { 
    handleAddProduct : (data: ProductType2) => void
}


interface ListProduct {
    products: ProductType[]
    total: number,
    skip: number,
    limit: number
}


function AddToCartFlyOut(props: Props) {

    const Cart = useContext<CartContextValue>(CartContext)
    const [listProduct, setListProduct] = useState<ProductType2[]>(Cart.productList)
    const [totalPrice, setTotalPrice] = useState<string>('0')
    const [load, setLoad] = useState<boolean>(true)
    const [selectModel, setSelectModel] = useState<CartType>({})
    const listMethod = [
        { value: 'Cash', label: 'Cash' },
        { value: 'Online', label: 'Online' },
    ]
    
    const style = {
        "display": "flex",
        "marginTop": "8px",
        "alignContent": "center"
    }
    // Function handler
    const handleMethodChange = (value: string) => {
        selectModel.Cart_MethodPay = value;
        setSelectModel(selectModel);
    }

    // const handleAddressChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     selectModel.Cart_Address = e.target.value;
    //     setSelectModel(selectModel);
    // }

    const handlePhoneNumberChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        selectModel.Cart_PhoneNumber = e.target.value;
        setSelectModel(selectModel);
    }

    const handleNoteChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        selectModel.Cart_Note = e.target.value;
        setSelectModel(selectModel);
    }
    // Handler checkout
    const handleOk = async () => {
        const cartDetailArray = listProduct.map((item:ProductType2) => {
            return {
                Cart_Detail_Product: item.Product_Code,
                Cart_Detail_Quantity: item.Product_Number
            }
        })
        selectModel.Product_List = cartDetailArray;
        selectModel.Cart_Code = 'test-produc1t'
        selectModel.Status = 'New'
        const result = await CartApi.create(selectModel);
        
        // e.preventDefaul();
        // const 
        // console.log(selectModel)
        

    }
    // useEffect
    useEffect(() => {
        setLoad(true)
        const totalPrice = listProduct.reduce((preValue,curValue) => preValue+curValue.Product_Price * curValue?.Product_Number,0)
        selectModel.Cart_MethodPay = listMethod[0].value;
        setSelectModel(selectModel)
        setTotalPrice(`${totalPrice}`)
    },[Cart]);
    return (
        <Container>
            {!!load && <Fragment>
                <ProductList className='list-product'>
                    {listProduct ?
                        listProduct.map((product, idx) => {
                            return (<ProductItem key={idx} className='product-item'>
                                <ProductItemInner className='product-inner'>
                                    <ProductImg className='product-img'>
                                        <img src={process.env.REACT_APP_SERVER_IMG+'/product'+`/${product.Product_Images}`} alt="" />
                                    </ProductImg>

                                    <ProductInformation className='product-information'>
                                        <div className="infor-inner">
                                            <div className="branch">{product.Product_Name}</div>
                                            <div className="product-name">{product.Product_Detail}</div>
                                            <div className="price">{formatMoney(product.Product_Price)}</div>
                                        </div>
                                        <QuantityChange value={product?.Product_Number} small={true} />
                                    </ProductInformation>
                                </ProductItemInner>
                            </ProductItem>)
                        })
                        : <EmptyCart>Your Cart is Empty</EmptyCart>
                    }
                </ProductList>

                <CartFooter>
                    <Row style={style} >
                        <Col style={style} span={6}>
                            Address
                        </Col>
                        <Col span={18}>
                            <Input name="Address" onChange={() => {}}></Input>
                        </Col>
                    </Row>
                    <Row style={style} >
                        <Col span={6}>
                            <span>Phone number</span>
                        </Col>
                        <Col span={18}>
                            <Input name="PhoneNumber" onChange={handlePhoneNumberChange}></Input>
                        </Col>
                    </Row>
                    <Row style={style} >
                        <Col span={6}>
                            <span>Note</span>
                        </Col>
                        <Col span={18}>
                            <Input name="Note" onChange={handleNoteChange}></Input>
                        </Col>
                    </Row>
                    <Row style={style}>
                        <Col span={6}>
                            <span>Method Pay</span>
                        </Col>
                        <Col span={18}>
                            <Select
                                defaultValue="Cash"
                                style={{ width: "100%" }}
                                onChange={handleMethodChange}
                                options={listMethod}
                            />
                        </Col>
                    </Row>
                    <SubTotal>
                        <div className="title">SubTotal</div>
                        <div className="total-price">{formatMoney(totalPrice)}</div>
                    </SubTotal>
                    <Button handleOnClick={handleOk} className='Checkout_Btn' width='100%' height='40px' upperCase={true} title='checkout' />
                </CartFooter>
            </Fragment>
            }
        </Container>
    )
}

export default AddToCartFlyOut

const Container = styled.div`
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
const ProductList = styled.ul`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`

const ProductItem = styled.div`
    padding: 20px 20px;
`
const ProductItemInner = styled.div`
    display: flex;
    width: 100%;
    height: auto;
`

const ProductImg = styled.div`
    width: 75px;
    height: auto;

    img {
        width: 100%
    }
`
const ProductInformation = styled.div`
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

const CartFooter = styled.div`
    padding: 7px 26px 0px;
    height: var(--flyout-footer-height);
    border-top: 1px solid var(--border-menu);
   
`

const SubTotal = styled.div`
    margin-top: 12px;
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