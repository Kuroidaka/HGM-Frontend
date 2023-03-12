
import { FC, forwardRef, RefAttributes } from 'react';
import styled from 'styled-components'
import { img } from '~/assert/img';

interface AvatarPropTypes {
    src : string 
    width: string
    ref ?:React.LegacyRef<HTMLImageElement> | undefined
    handleClick?: () => void
}

interface AvatarStylePropTypes {
    width: string
    onClick?: () => void
}



const Avatar:FC<AvatarPropTypes & RefAttributes<HTMLImageElement>> = forwardRef((props , ref ) => {
    const {src, width, handleClick} = props

    return ( 
        <Wrap width={width} onClick={handleClick}>
            <img src={src} ref={ref} alt="" />
        </Wrap>
     );
})
 
export default Avatar;

const Wrap = styled.div<AvatarStylePropTypes>`

cursor: pointer;
flex-shrink: 0;
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