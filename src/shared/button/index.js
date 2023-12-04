import styled from 'styled-components'

export const Button = styled.button`
font-size: 0.87rem;
font-weight: 500;
background: ${(props)=> props.$background || '#4CAF4F'};
color: ${(props) => props.color || 'var(--white)'};
border-radius: ${(props) =>  props.$borderradius || '6px'};
outline: none;
padding: ${(props) => props.$padding || '0.63rem 1.25rem'} ; 
border:none;
cursor: pointer;

`

