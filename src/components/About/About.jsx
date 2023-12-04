import { Div, Section } from "../../shared/container";
import { SectionHeading,Text } from "../../shared/typography";
import { AboutWrapper, Span, AboutInfo, InfoItem, Icon,InfoHeading, OtherInfo, OtherInfoImage,InfoDetails } from "./aboutStyle";
import {Button} from '../../shared/button'
import User from '../../images/icon-user.png';
import building from '../../images/icon-building.png';
import club from '../../images/icon-club.png';
import Login from '../../images/login-screen.png';
function About() {
    return(
        <Section>
            <Div>
                <AboutWrapper>
                    <SectionHeading>
                        Manage your entire community <Span>in a single system</Span>
                    </SectionHeading>
                    <Text fontSize='16px'>
                        Who is is Nexcent suitable for?
                    </Text>
                </AboutWrapper>
                <AboutInfo>
                    <InfoItem>
                        <Icon src={User} />
                        <InfoHeading>
                            Membership Orgainization
                        </InfoHeading>
                        <Text $textalign='center'>
                        Our membership management software provides full automation of membership renewals and payments
                        </Text>
                    </InfoItem>
                    <InfoItem>
                        <Icon src={building} />
                        <InfoHeading>
                            National Association
                        </InfoHeading>
                        <Text $textalign='center'>
                        Our membership management software provides full automation of membership renewals and payments
                        </Text>
                    </InfoItem>
                    <InfoItem>
                        <Icon src={club} />
                        <InfoHeading>
                            Membership Orgainization
                        </InfoHeading>
                        <Text $textalign='center'>
                        Our membership management software provides full automation of membership renewals and payments
                        </Text>
                    </InfoItem>
                </AboutInfo>
                <OtherInfo>
                    <OtherInfoImage src={Login} />
                    <InfoDetails>
                        <SectionHeading>
                            The unseen of spending three years at Pixelgrade
                        </SectionHeading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</Text>
                        <Button>Learn More</Button>
                    </InfoDetails>
                </OtherInfo>
            </Div>
        </Section>
    )
}

export default About