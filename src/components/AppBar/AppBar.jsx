import { HashLink } from 'react-router-hash-link';
import { StyledLink, Img, Wrapper, LogoWrapper, HeaderInfo } from "./AppBar.styled";
import Logo from '../../images/logo.png';


export const AppBar = () => {
    return (
        <Wrapper id="home">
            <LogoWrapper>
              <HashLink to="/home/#home" aria-label="home" style={{outline: "none"}}>
                <Img src={Logo} alt='surfing bird'/> 
              </HashLink>
              <HeaderInfo>Tweet App</HeaderInfo>
            </LogoWrapper>
        <nav>
          <StyledLink to="home" onClick={(e) => e.target.blur()}>Home</StyledLink>
          <StyledLink to="tweets" onClick={(e) => e.target.blur()}>Tweets</StyledLink>
        </nav>  
      </Wrapper>
    )
}