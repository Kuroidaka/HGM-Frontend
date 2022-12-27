
import { FC } from 'react';
import styled from 'styled-components'

interface AvatarPropTypes {
    src : string
    width: string
}

interface AvatarStylePropTypes {
    width: string
}



const Avatar:FC<AvatarPropTypes> = (props) => {
    const {src, width} = props

    return ( 
        <Wrap width={width}>
            <img src={src} alt="" />
        </Wrap>
     );
}
 
export default Avatar;

const Wrap = styled.div<AvatarStylePropTypes>`

cursor: pointer;
margin: 32px 0 10px;
border-radius: 50%;
${ ({width}) => width && `width: ${width}; height: ${width};`}
overflow: hidden;
border: 1px solid var(--avatar-wrap);
background-color: var(--primary_admin);
display: flex;
justify-content: center;
align-items: center;

img{
    width: 100%;
}
`