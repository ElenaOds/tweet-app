import { StyledLink, Img, Wrapper, LogoWrapper, HeaderInfo } from "./AppBar.styled";
import Logo from '../../images/logo.png';

export const AppBar = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <Img src={Logo} alt='surfing bird'/> 
                <HeaderInfo>Follow your friends to see their tweets</HeaderInfo>
            </LogoWrapper>
      <nav>
        <StyledLink to="home">Home</StyledLink>
        <StyledLink to="tweets">Tweets</StyledLink>
      </nav>  
      </Wrapper>
    )
}