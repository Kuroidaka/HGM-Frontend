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
                
                <nav className="side-bar-nav">
                    <Navbar />
                </nav>

                <div className="collection">
                    {productList && 
                    <ProductSection />
                    }
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
    max-width: 1200px;
    margin: auto;
    padding-top: 20px;

@media screen and (max-width: 992px) {
    nav {
        display: none;
    }
}

    nav {
        flex: 22%;
    }

    .collection {
        flex: 88%;
    }

`