import styled from 'styled-components';
import { device, size } from '../../utils/device';

export const AboutWrapper = styled.div`
width:1 00%;
margin: 0 auto;
max-width: 542px;
text-align: center;

> *{
    margin-bottom: 1rem;
}
`

export const Span = styled.span`
display: block;
`

export const AboutInfo = styled.div`
display: flex;
justify-content: center ;
gap: 5rem;
flex-wrap: wrap;
padding-top: 1rem;

`
export const InfoItem = styled.div`
width: 299px;
border-radius: 8px;
display:flex;
flex-direction:column;
padding: 1.5rem 1.4rem;
justify-content: center;
align-items: center;
background: var(--neutral-white, #FFF);
border-raduis: 8px;
box-shadow: 4px 2px 4px 2px rgba(171, 190, 209, 0.20);


@media ${device.base} {
width:100%;
border: 1px solid red;
}
`

export const Icon = styled.img`
width: 48px;
margin-bottom: 1rem;
`

export const InfoHeading = styled.span`
font-size: 1.75rem;
text-align: center;
font-weight: 700;
margin-bottom: 0.5rem;
color: var(--gray-dark);
`

export const OtherInfo = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
// gap: 4rem

@media ${device.md} {
    display: flex;
    flex-direction: column;
    text-align: center;
}

@media ${device.base} {
    flex-direction: column;
}
`
export const OtherInfoImage = styled.img`
max-width: 442px;
`
export const InfoDetails = styled.div`
max-width: 601px;
 >*{
    margin-bottom: 1rem;
 };

 @media ${device.base} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center
}
`