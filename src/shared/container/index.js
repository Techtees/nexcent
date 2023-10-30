import styled from 'styled-components'

export const Div  = styled.div`
width:90%;
max-width: 1440px; 
margin:0 auto;
padding:5rems 0;
`
export const Section = styled.div`
padding: 5rem;
flex-direction: ${(props) => props.flexDirection};
background: ${(props)=> props.backgroundColor || 'var(--white)' }
`

