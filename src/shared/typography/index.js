import styled from 'styled-components';
import { device, size } from '../../utils/device'

export const Title = styled.h1`
font-size: 3.4rem;
font-weight: 600;
line-height: 4.75rem;
font-style: normal;
color: var(--gray-dark);

@media ${device.md}{
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 3.75rem;
}
@media ${device.base} {
    font-size: 1.7rem;
    text-align: center;
    line-height: 2rem;
}
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
text-align: ${(props) => props.textAlign || 'none'};

@media ${device.base} {
    text-align: center;
}
`
