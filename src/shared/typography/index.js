import styled from 'styled-components';

export const Title = styled.h1`
font-size: 4rem;
font-weight: 600;
line-height: 4.75rem;
font-style: normal;
color: var(--gray-dark)
`

export const SectionHeading = styled.h2`
font-size: 2.25rem;
font-style: normal;
font-weight: 600;
line-height: 2.75rem;
color: var(--gray-dark);
`
export const Text = styled.p`
width: 100%;
max-width: 601px;
font-size: ${(props) => props.fontSize || '0.979rem'};
font-style: normal;
line-height: 1.25rem;
color: var(--gray);
text-align: ${(props) => props.textAlign || 'none'}
`
