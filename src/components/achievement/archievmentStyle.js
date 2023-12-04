import styled from 'styled-components';
import { device, size } from '../../utils/device'

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media ${device.md} {
    flex-direction: column;
    gap:15px;
}
`

export const WrapperText = styled.div`

`
export const WrapperTextSpan = styled.span`
display: block;
color: var(--green-500)
`
export const WrapperInfo = styled.div`

`
export const ItemsWrapper = styled.div`
display: flex;
gap: 4rem;

@media ${device.base} {
// flex-direction: column;
}
`
export const ItemsRow = styled.div`
display: flex;
flex-direction:column;
justify-content: space-around;
gap: 2rem;



`
export const Item = styled.div`
display: flex;
gap:1rem;

@media ${device.sm} {
flex-direction: column;
    
}

`
export const ItemIcon = styled.img`
max-width: 48px;
`
export const ItemInfo = styled.div`
`
export const ItemInfoSpan = styled.span`
color: var(--gray);

@media ${device.md} {
    font-size: 0.8rem;
    border: 1px solid red
}
`
export const ItemNumber = styled.span`
font-size: 1.75rem;
color: var(--gray-dark);
display: block;
font-weight: 700;

@media ${device.md}{
    font-size: 1rem;}
`