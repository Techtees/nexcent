import PropTypes from 'prop-types';
import {Div,Section} from '../../shared/container';
import {Title, Text} from '../../shared/typography';
import {TitleSpan, Image, ContentWrapper, HomeContainer} from './homestyle';
import { Button } from '../../shared/button';
import HomeImage from '../../images/home.png'

function Home(props) {
    return (
        <Section $background={props.bgColor}>
            <Div>
                <HomeContainer>
                    <ContentWrapper>
                        <Title>Lessons and insights <TitleSpan>from 8 years</TitleSpan></Title>
                        <Text>Where to grow your business as a photographer: site or social Media?</Text>
                        <Button $padding={props.padding} $borderradius ={props.radius}>Register</Button>
                    </ContentWrapper>
                    <Image src= {HomeImage} />
                </HomeContainer>
            </Div>
        </Section>
    )
}

Home.propTypes ={
    bgColor: PropTypes.string,
    radius: PropTypes.string,
    padding:PropTypes.string,
}

Home.defaultProps = {
    bgColor: 'var(--silver)',
    radius: '0.25rem',
    padding: '0.875rem 2rem '
}

export default Home