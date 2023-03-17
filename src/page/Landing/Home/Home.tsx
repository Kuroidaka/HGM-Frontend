import { useState } from "react";
import styled from "styled-components";
import About from "./Component/About";
import Branch from "./Component/Branch";
import CurratedPick from "./Component/CuratedPick";
import NewArrival from "./Component/NewArrival";
import SlideShow from "./Component/SlideShow";

interface backgroundType {
    src?: string 
}

const Home = () => {
    
    return ( 
        <Container>
            {/* slide show */}
            <SlideShow/>

            <div className="grid">
                <Title>
                    <h1></h1>
                </Title>

                {/* home page main content */}

                <section>
                    <Branch />
                    <About />
                    <CurratedPick />
                    <NewArrival />
                </section>

            </div>
            
        </Container>
     );
}
 
export default Home;

const Container = styled.div`
    width: 100vw;
    height: auto;


    .slide-show{
        width: 100vw;

        img {
            width: 100%;
        }
    }

    .grid {
        max-width: 1400px;
        margin: auto
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