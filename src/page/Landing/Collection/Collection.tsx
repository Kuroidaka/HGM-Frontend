import styled from "styled-components";
import Navbar from "./Component/Navbar/NavBar";
import ProductSection from "./Component/Product/Product";

const Collection = () => {
    return ( 

        <Container>
            <div className="slide-show"></div>

            <div className="header">

            </div>

            <Content>
                
                <nav>
                    <Navbar />
                </nav>

                <div className="collection">
                    <ProductSection />
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
    padding-left: 60px;
    padding-right: 60px;
    margin: auto;
    padding-top: 20px;

   

    nav {
        flex: 22%;
    }

    .collection {
        flex: 88%;
    }

`