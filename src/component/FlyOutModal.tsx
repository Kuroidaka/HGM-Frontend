import React, { ReactNode, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { icon } from '~/assert/icon'
import { ProductType2 } from '~/model/Ladingpage.model'

interface Props {
    children: ReactNode
    isOpen: boolean
    handleToggle : () => void
    handleAddProduct : (data: ProductType2) => void

}

function FlyOutModal(props: Props) {
    const {children, isOpen, handleToggle} = props
    const flyoutRef = useRef<HTMLDivElement>(null)
    // const themeContext = createContext()

    useEffect(() => {
        isOpen ?  openFlyOut() : closeFlyOut()
    }, [isOpen]);

    const closeFlyOut = () => {
        flyoutRef.current && flyoutRef.current.classList.remove('open')
    }

    const openFlyOut = () => {
        flyoutRef.current && flyoutRef.current.classList.add('open')
    }

    const handleCloseModal = () => {
        handleToggle()
    }

    return (
        <Container ref={flyoutRef}>
            <Inner className='cart-inner'>
                <CartHeader className='cart-header'>
                    <div className="title">My Cart</div>
                    <div className="close-icon" onClick={handleCloseModal}> <icon.close/> </div>
                </CartHeader>

                <CartBody className='cart-body'>
                    {children}
                </CartBody>
            </Inner>
        </Container>
    )
}

export default FlyOutModal

const Container = styled.div`
    height: calc(100vh - var(--header-bar-height-mb));
    position: fixed;
    z-index: 100;
    transition: all .2s linear;
    right: 0;
    max-width: 80vw;
    @media screen and (min-width: 992px) {
        width: 420px;
        transform: translateX(500px);
        &.open {
            transform: translateX(0);
        }
    }
    @media screen and (max-width: 991px) {
        width: 80vw!important;
        transform: translateX(100vw);
        &.open {
            transform: translateX(0);
        }
    }
    
`

const Inner = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;
    z-index: 99;
`

const CartHeader = styled.div`
    height: 6vh;
    width: 100%;
    border: 1px solid #E0E0E0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .title {
        font-size: 20px;
    }

    .close-icon {
        position: absolute;
        right: 10px;

        svg {
            font-size: 25px;
            cursor: pointer;
        }
    }
`

const CartBody = styled.div`
    display: contents;
    
`

