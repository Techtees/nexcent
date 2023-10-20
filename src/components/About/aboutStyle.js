import styled from 'styled-components'

export const AboutWrapper = styled.div`
width:1 00%;
margin: 0 auto;
max-width: 542px;
text-align: center;
// border: 1px solid red;

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
box-shadow: 0px 2px 4px 0px rgba(171, 190, 209, 0.20);
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
// gap: 4rem
`
export const OtherInfoImage = styled.img`
width: 442px;
`
export const InfoDetails = styled.div`
width: 601px;
`