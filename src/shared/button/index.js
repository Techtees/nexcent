import styled from 'styled-components'

export const Button = styled.button`
font-size: 1.1rem;
font-weight 400;
background: ${(props)=> props.backgroundColor || '#4CAF4F'};
color: ${(props) => props.color || 'var(--white)'};
border-radius: 6px;
outline: none;
padding: 0.8rem 1.25rem; 
border:none;
`

