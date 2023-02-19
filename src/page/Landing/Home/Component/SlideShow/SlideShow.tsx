import { useState } from "react";
import styled from "styled-components";
import { img } from "~/assert/img";
import Button from "~/component/Button/Button";


const SlideShow = () => {
    const [bgSrc, setBgSrc] = useState<string>(img.background)

    return ( 

        <Container>
            <div className="slide-show">
                <img src={bgSrc} alt="" />

                <div className="btn-wrapper">
                    <Button title="Shop now" height="100%" width="100%" upperCase={true}/>
                </div>
            </div>

                
        </Container>
     );
}
 
export default SlideShow;

const Container = styled.div `
    

    .slide-show{
        position: relative;

        .btn-wrapper{
            width: 100px;
            height: 30px;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            bottom: 0;
            text-align: center;
        }

    }


`
