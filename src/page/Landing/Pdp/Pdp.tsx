import React, { ChangeEvent, MouseEvent, MouseEventHandler, useEffect, useState } from 'react';
import styled from 'styled-components';
import SelectInput from '~/component/Select/Select';
import { icon } from '~/assert/icon';
import Button from '~/component/Button/Button';
import { img } from '~/assert/img';
import { UseMedia } from '~/hook';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface PDPProps {
  product: Product;
}

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

const PDP: React.FC = () => {
    const [size, setSize] = useState<string>('')
    const [quantity, setQuanity] = useState<number>(1)
    const screenWidth = UseMedia()
    // const [addToCartWidth, setAddToCartWidth] = useState<string>('200px')
    const [descriptionView, setDescriptionView] = useState<string>('product-detail')
    // catch the screen width change event
    useEffect(() => {
      if(screenWidth < 768){
      // setAddToCartWidth('100%')
    }
      else {
      // setAddToCartWidth('200px')
    }
    }, [screenWidth])
  

    const handleDecrease = (e:any) => {
      if(quantity > 1){
        setQuanity(quantity - 1)
      }
    }

    const handleIncrease = (e:any) => {
      if(quantity >= 1){
        setQuanity(quantity + 1)
        // const inputElm = e.target.closest('data-quantity')
        // console.log(inputElm);
        
      }
    }

    const changeDescriptionView = (e:any) => {
      setDescriptionView(e.target.getAttribute('data-name'))
      
    }

    // git remote set-url origin https://github.com/idaka123/HGM-Frontend

  return (
    <ProductDetail className='product-detail'>
        <BreadCrumb className='bread-crumb'>
          <li className="breadcrumb-item">Backpacks</li>
          <li className="breadcrumb-item">Expedition Flap Backpack</li>
        </BreadCrumb>

        <Container className='container'>
            <ProductImageWrapper className='product-image-wrapper'>
              <ProductImage className='product-image' src={img.logo} alt="Product Image" />

            </ProductImageWrapper>
            <ProductInfo className='product-info'>
                <ProductTitle className='product-title'>Apple Watch series 8</ProductTitle>
                <ProductVendor className='product-vendor'>Alpha Bravo</ProductVendor>
                <ProductPrice className='product-price'>
                    {/* <span className="new-price">${product.price.toFixed(2)}</span>
                    <span className="old-price">${product.price.toFixed(2)}</span> */}
                    <span className="new-price">999.0000</span>
                    <span className="old-price">999.0000</span>
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
                      <QuantityAdjust>
                        <button className='minus-btn'onClick={handleDecrease} ><icon.minus/></button>
                          <input type="number" data-quantity={quantity} value={quantity} onChange={() => setQuanity(quantity)}/>
                        <button className='plus-btn' onClick={handleIncrease}><icon.plus/></button>
                    </QuantityAdjust>
                  </SelectOption>
                  <Button title='Add to cart' className='add-to-cart-btn' upperCase={true} width='100%' height='45px' />
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
                  These ankle Savvy Barre Grip Socks give your feet a touch of sport and sassy style while offering superior grip. From yoga to barre, these socks are the perfect addition to your practice.
                  Features
                  Ankle socks.
                  Contrasting triangle silicone grippers on bottom.
                  High-density silicone grip.
                  Soft and breathable fabric.
                  BPA-free silicone.
                  Silicone won’t peel off.
                  Arch compression to support and comfort mid-foot.
                  The heel tab supports the Achilles.
                  Fitted heel to eliminate twisting during movements.
                  Made with organic materials.
                  Details
                  Fabrics: - Sock: 70% Organic Cotton, 16% Nylon, 9% Polyester, 3% Elastane, 2% Elastodiene - Grippers: 100% Silicone
                  Colors: Grey, Purple, Lavender, Magenta, Pink, Teal, Blue, White, Black, Charcoal, 
                  Style Features: Solid, Grip, Embroidery, Specks, Ruched
                  Grip: Yes – Silicone Triangles
                  Fit: Ankle
                  Arch Support Band: Yes
                  Style: Closed Toe
                  Country of Origin
                  Imported.
                  </DescriptionContent>
                </ProductDescription>

            </ProductInfo>
        </Container>
          
    </ProductDetail>
    
  );
};

export default PDP;
