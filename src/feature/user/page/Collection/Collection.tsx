import { useContext } from "react";
import styled from "styled-components";
import { ProductContext, ProductContextValue } from "~/context/Context";
import ProductSection from "./Component/Category";
import Navbar from "./Component/NavBar";

const Collection = () => {
    
    const {productList} = useContext<ProductContextValue>(ProductContext)

    
    
    return ( 
        <Container className="collection-container">
            {/* <div className="slide-show"></div> */}

            <div className="header">

            </div>

            <Content className="main-content">
                <Navbar />
                <div className="collection">
                {productList && 
                    <ProductSection />}
                </div>
            </Content>
        </Container>
     );
}
 
export default Collection;

const Container = styled.div `
    width: 100vw;
     .slide-show {
        width: 100vw;
        height: 300px;
        background-color: #32ffff;
    }
`

const Content = styled.div `
    display: flex;
    max-width: 1400px;
    margin: auto;
    padding-top: 20px;

    .collection {
        flex: 1 0 80%;
    }

`