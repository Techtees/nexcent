import PropTypes from 'prop-types';
import {Div,Section} from '../../shared/container';
import {Title, Text} from '../../shared/typography';
import {TitleSpan, Image, ContentWrapper} from './homestyle';
import { Button } from '../../shared/button';
import HomeImage from '../../images/home.png'

function Home(props) {
    return (
        <Section backgroundColor={props.bgColor}>
            <Div>
                <ContentWrapper>
                    <Title>Lessons and insights <TitleSpan>from 8 years</TitleSpan></Title>
                    <Text>Where to grow your business as a photographer: site or social Media?</Text>
                    <Button padding={props.padding} borderRadius={props.radius}>Register</Button>
                </ContentWrapper>
                <Image src= {HomeImage} />
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