import { FC } from 'react';
import styled from 'styled-components'

interface PropType {

}

const Dashboard:FC<PropType> = () => {
    return ( 
        <Container>
            <Content >
                <h1>Dashboard</h1>
            </Content>
        </Container>
     );
}
 
export default Dashboard;

const Container = styled.div`
height: calc( 100vh - var(--header-height));
width: 100%;

`

const Content = styled.div`

  
`