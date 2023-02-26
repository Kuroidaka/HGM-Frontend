
import { ReactNode } from "react";
import styled from "styled-components";
import Footer from "../Component/Footer/Footer";
import HeaderCom from "../Component/Header/Header";

interface propsType {
    children: ReactNode
}

const HeaderFooter = (props:propsType) => {
    const { children } = props

    return ( 
        <Container>
            <HeaderCom/>
            {children}
            <Footer />
        </Container>
     );
}
 
export default HeaderFooter;

const Container = styled.div`

`