import { useState } from "react";
import styled from "styled-components";
import SlideShow from "./Component/SlideShow/SlideShow";

interface backgroundType {
    src?: string 
}

const Home = () => {
    
    return ( 
        <Container>
            {/* slide show */}
            <SlideShow/>

            <Title>
                <h1>TITLE</h1>
            </Title>

        {/* home page main content */}

        <section>


        </section>
            
        </Container>
     );
}
 
export default Home;

const Container = styled.div`
    width: 100vw;
    height: 100vh;


    .slide-show{
        width: 100vw;

        img {
            width: 100%;
        }
    }
`

const Background = styled.div<backgroundType>`
    width: 100vw;
    height: 300px;
    .img{
        background-image: url(${({src}) => src});   
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: contain;
    }
`


const Title = styled.div`
    
`