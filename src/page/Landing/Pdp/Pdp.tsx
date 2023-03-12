import React, { ChangeEvent, MouseEvent, MouseEventHandler, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import SelectInput from '~/component/Select';

import Button from '~/component/Button';
import { img } from '~/assert/img';
import { UseMedia } from '~/hook';
import QuantityChange from '~/component/QuantityChange';
import { CartContext, CartContextValue, ProductContext, ProductContextValue } from '~/context/Context';
import { ProductType } from '~/model/Product.model';
import { useParams } from 'react-router-dom';
import { formatMoney } from '~/utils';

const sizeList = [
    {
        label: 'Small',
        value: 'Small'
    },
    {
        label: 'Large',
        value: 'Large'
    },
]

const PDP = () => {

    const [size, setSize] = useState<string>('')
    const [descriptionView, setDescriptionView] = useState<string>('product-detail')
    
    const [product, setProduct] = useState<ProductType>()
    const {id} = useParams()
    const {productList} = useContext<ProductContextValue>(ProductContext)
    const Cart = useContext<CartContextValue>(CartContext)
    

    useEffect(() => {
      const result = productList.find(product => product.id === Number(id))
      setProduct(result)
    }, [id])
  
    const handleBuy =() => {
      Cart.handleOpen()
    }

    const changeDescriptionView = (e:any) => {
      setDescriptionView(e.target.getAttribute('data-name'))
      
    }


  return (
    <ProductDetail className='product-detail'>
        <BreadCrumb className='bread-crumb'>
          <li className="breadcrumb-item">Backpacks</li>
          <li className="breadcrumb-item">Expedition Flap Backpack</li>
        </BreadCrumb>
      {product &&
        <Container className='container'>
            <ProductImageWrapper className='product-image-wrapper'>
              <ProductImage className='product-image' src={product.images[0]} alt="Product Image" />

            </ProductImageWrapper>
            <ProductInfo className='product-info'>
                <ProductTitle className='product-title'>{product.title}</ProductTitle>
                <ProductVendor className='product-vendor'>{product.brand}</ProductVendor>
                <ProductPrice className='product-price'>
                    {/* <span className="new-price">${product.price.toFixed(2)}</span>
                    <span className="old-price">${product.price.toFixed(2)}</span> */}
                    <span className="new-price">{formatMoney(product.price)}</span>
                    {/* <span className="old-price">999.0000</span> */}
                </ProductPrice>

                <SelectOption>
                    <div className="label-wrapper">
                      <label>Color:</label>
                    </div>
                    <div className="color-selector-wrapper">
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
                    </div>
                </SelectOption>
                <SelectOption style={{width: '100%'}}>
                    <div className="label-wrapper">
                      <label>Size:</label>
                    </div>
                    <SelectInput width='100%' setValue={setSize} valueList={sizeList}/>
                </SelectOption>

               
                <ProductAction className='product-action' >
                  <SelectOption>
                      <div className="label-wrapper">
                        <label>Quantity:</label>
                      </div>
                      {/* change quantity */}
                      <QuantityChange middle={true}/>
                  </SelectOption>
                  <Button handleOnClick={handleBuy} title='Add to cart' className='add-to-cart-btn' upperCase={true} width='100%' height='45px' />
                </ProductAction>

                
                <ProductDescription className='product-description'>
                  <DescriptionNav className='product-description-nav'>
                  <span 
                  data-name='product-detail' 
                  className={`description-nav-first ${descriptionView === 'product-detail'  && 'active'}`} 
                  onClick={changeDescriptionView}>PRODUCT DETAILS</span>
                  <span 
                  data-name='brand-detail' 
                  className={`description-nav-second ${descriptionView === 'brand-detail'  && 'active'}`}  
                  onClick={changeDescriptionView}>ABOUT THE BRAND</span>
                  </DescriptionNav> 

                  <DescriptionContent>
                    {product.description}
                  </DescriptionContent>
                </ProductDescription>

            </ProductInfo>
        </Container>
          }
    </ProductDetail>
    
  );
};

export default PDP;



const ProductDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  margin: auto;
  

  @media (min-width: 769px) {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    
  }
`;

const BreadCrumb = styled.ul`
  list-style-type: none;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  padding: 7px;

  .breadcrumb-item {

    & + .breadcrumb-item {
      padding-left: 10px;

      &::before {
        content: '/';
        padding-right: 7px;
      }
    }
  }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`

const ProductImageWrapper = styled.div`
  flex: 1;
  @media (min-width: 768px) {
    align-self: flex-start;
    max-width: 50%;
    width: 45%;
  }
`


const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (min-width: 769px) {
    align-self: flex-start;
    width: 500px;
    padding: 0 50px;
  }
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ProductVendor = styled.h4`
    text-transform: uppercase;
`

const ProductPrice = styled.h3`
  text-align: center;


  @media (min-width: 768px) {
    text-align: left;
  }

  .new-price {
    font-size: 25px;
  }
  .old-price {
    font-size: 20px;
    padding-left: 7px;
    text-decoration: line-through;
    opacity: .5;
  }
`;

const SelectOption = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    
    @media (max-width: 768px) {
      width: 100%;
      
    }

    .label-wrapper{
      width: 50px;
      margin-bottom: 4px; 
      label {
          font-size: 11px;
          font-weight: 700;
          width: 100%;
          margin: auto;
      }
    }

    .color-selector-wrapper{
      width: 100%;

      .color-selector{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
        cursor: pointer;
        flex-wrap: wrap;

        .color-wrapper {
            width: 28px;
            height: 28px;
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
    }
    .size-selector{
        width: 100%;
        height: 40px;
        margin-left: 10px;
    }
`

const ProductAction = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .add-to-cart-btn {
      align-self: flex-end;
    }
  
`

const QuantityAdjust = styled.div`
    width: 100px;
    height: 45px;
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

const ProductDescription = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 24px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const DescriptionNav = styled.div`
  cursor: pointer;
  
  .description-nav-first {
    margin-right: 24px;
    
  }

  .description-nav-second{

  }

  .description-nav-first, .description-nav-second {

    &.active {
      font-weight: 900;
      text-decoration: underline;
    }
  }
`

const DescriptionContent = styled.div`
    padding-top: 15px;

`
