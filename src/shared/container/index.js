import styled from 'styled-components'
import { device, size } from '../../utils/device'

export const Div  = styled.div`
width:100%;
max-width: 1440px; 
margin:0 auto;
`
export const Section = styled.div`
padding: 5rem;
flex-direction: ${(props) => props.flexDirection};
background: ${(props)=> props.$background || 'var(--white)'};

@media ${device.base} {
    padding: 2rem;
}
`

