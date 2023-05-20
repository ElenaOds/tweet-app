import { useLocation} from "react-router-dom";
import TweetsList from '../../components/TweetsList/TweetsList';
import { Wrapper, StyledLink, Icon} from './TweetsPage.styled';


const TweetsPage = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/home";

    return (
        <Wrapper>
            <StyledLink to={backLinkHref}>
             <Icon aria-label="Return back"/> 
            Go back</StyledLink>

            <TweetsList />
        </Wrapper>
    )
}

export default TweetsPage;