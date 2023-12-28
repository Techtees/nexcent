import styled from 'styled-components'

export const Button = styled.button`
font-size: ${(props) => props.fontSize || '0.87rem'};
font-weight: 500;
background: ${(props)=> props.$background || 'var(--green-500)'};
color: ${(props) => props.color || 'var(--white)'};
border-radius: ${(props) =>  props.$borderradius || '6px'};
outline: none;
padding: ${(props) => props.$padding || '0.63rem 1.25rem'} ; 
border:none;
cursor: pointer;

&:hover {
    background: ${(props)=> (props.$background === 'var(--white)') ? 'var(--green-500)' : 'var(--white)'};
    color: ${(props) => (props.color === 'var(--green-500)') ? 'var(--white)' : 'var(--green-500)' };
    transition: all 0.6s ease;
    border: 1px solid #4CAF4F;
}



`

