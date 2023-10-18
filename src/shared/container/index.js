import styled from 'styled-components'

const DivContainer  = styled.div`
width:90%;
margin:0 auto;
padding:5rems 0;

`

function Div({children}) {
    return(
        <DivContainer>
            {children}
        </DivContainer>
    )
}
