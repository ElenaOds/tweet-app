import { useLocation} from "react-router-dom";
import TweetsList from '../../components/TweetsList/TweetsList';
import { Wrapper, StyledLink, Icon, UpperWrapper } from './TweetsPage.styled';
import Filter from '../../components/Filters/Filter';

const TweetsPage = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/home";

    return (
        <Wrapper>
            <UpperWrapper>
                <StyledLink to={backLinkHref}>
                    <Icon aria-label="Return back"/> 
                    Go back
                </StyledLink> 
                <Filter/>
            </UpperWrapper>
            <TweetsList />
        </Wrapper>
    )
}

export default TweetsPage;