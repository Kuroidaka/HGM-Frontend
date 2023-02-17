import { useState } from "react";
import styled from "styled-components";
import { img } from "~/assert/img";


const SlideShow = () => {
    const [bgSrc, setBgSrc] = useState<string>(img.background)

    return ( 

        <Container>
            <div className="slide-show">
                <img src={bgSrc} alt="" />
            </div>
        </Container>
     );
}
 
export default SlideShow;

const Container = styled.div `
`
