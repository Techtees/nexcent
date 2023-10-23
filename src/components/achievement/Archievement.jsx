import {Wrapper, WrapperText,WrapperTextSpan, WrapperInfo,ItemsWrapper, ItemsRow,Item, ItemIcon, ItemInfo, ItemNumber, ItemInfoSpan } from './archievmentStyle';
import {Div, Section} from '../../shared/container';
import {Text, SectionHeading} from '../../shared/typography'
import iconUser from './icons/Icon.png';
import iconGroup from './icons/Icon-1.png';
import iconPoint from './icons/Icon-2.png';
import iconWallet from './icons/Icon-3.png';

function Achievement () {
    return(
        <Section>
            <Div>
                <Wrapper>
                    <WrapperText>
                        <SectionHeading>
                            Helping a local 
                            <WrapperTextSpan>business reinvent itself</WrapperTextSpan>
                        </SectionHeading>
                        <Text>We reached here with our hard work and dedeication</Text>
                    </WrapperText>
                    <WrapperInfo>
                        <ItemsWrapper>
                            <ItemsRow>
                                <Item>
                                    <ItemIcon src={iconUser} />
                                    <ItemInfo>
                                        <ItemNumber>2,245,341</ItemNumber>
                                        <ItemInfoSpan>Members</ItemInfoSpan>
                                    </ItemInfo>
                                </Item>
                                <Item>
                                    <ItemIcon src={iconPoint} />
                                    <ItemInfo>
                                        <ItemNumber>828,867</ItemNumber>
                                        <ItemInfoSpan>Event Booking</ItemInfoSpan>
                                    </ItemInfo>
                                </Item>
                            </ItemsRow>
                            <ItemsRow>
                                <Item>
                                    <ItemIcon src={iconGroup} />
                                    <ItemInfo>
                                        <ItemNumber>46,328</ItemNumber>
                                        <ItemInfoSpan>Clubs</ItemInfoSpan>
                                    </ItemInfo>
                                </Item>
                                <Item>
                                    <ItemIcon src={iconWallet} />
                                    <ItemInfo>
                                        <ItemNumber>1,926,436</ItemNumber>
                                        <ItemInfoSpan>Payments</ItemInfoSpan>
                                    </ItemInfo>
                                </Item>
                            </ItemsRow>
                        </ItemsWrapper>
                    </WrapperInfo>
                </Wrapper>
            </Div>
        </Section>
    )
}

export default Achievement