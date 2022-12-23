import { FC } from 'react';
import styled from 'styled-components'

interface HomeProps {

}

const Home:FC<HomeProps> = () => {
    return ( 
        <Container>
            <h1>Home</h1>
        </Container>
     );
}
 
export default Home;

const Container = styled.div`
`