import { ReactNode } from "react";
import styled from "styled-components";

interface propsType {
    children: ReactNode
}

const Popper = (props: propsType) => {
    const { children } = props

    return ( 
        <Container>
            {children}
        </Container>
     );
}
 
export default Popper;

const Container = styled.div`
    width: auto;
    height: auto;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 10px;
    padding: 10px;
    
    li{
        cursor: pointer;
        
    }
`