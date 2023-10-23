import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const WrapperText = styled.div`

`
export const WrapperTextSpan = styled.span`
display: block;
color: var(--green-500)
`
export const WrapperInfo = styled.div`
// width: 540px
`
export const ItemsWrapper = styled.div`
display: flex;
gap: 4rem
`
export const ItemsRow = styled.div`
display: flex;

flex-direction:column;
justify-content: space-around;
gap: 2rem

`
export const Item = styled.div`
display: flex;
gap:1rem;
justify-content: flex-start;
`
export const ItemIcon = styled.img`
width: 48px;
`
export const ItemInfo = styled.div`
`
export const ItemInfoSpan = styled.span`
color: var(--gray)
`
export const ItemNumber = styled.span`
font-size: 1.75rem;
color: var(--gray-dark);
display: block;
font-weight: 700;
`