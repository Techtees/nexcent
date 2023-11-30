import styled from 'styled-components'
import { device, size } from '../../utils/device'

export const TitleSpan = styled.span`
display: block;
color: var(--green-500);
`
export const HomeContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media ${device.md} {
   flex-direction: column;

}
@media ${device.base} {
   align-items: center;
   justify-content: center;
}
`
export const ContentWrapper = styled.div`
 > * {
    margin-bottom:2rem;
 }

 @media ${device.base} {
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}
`
export const Image = styled.img`
// width:100%
 max-width: 291px;
`