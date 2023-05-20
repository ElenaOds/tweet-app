import { Wrapper, Title, Text, Img, StyledNavLink } from './HomePage.styled';
import social_bird from '../../images/social_bird.png';

const Home = () => {
    return (

        
 <Wrapper >
  <div>
  <Title>Tweet with your friends</Title>
      <Text>Tweet application is a social utility that connects you with the people around you. 
        <br/>Have fun anytime at any place</Text>
        <StyledNavLink to="/tweets">Get started</StyledNavLink>
  </div>
      
        <Img src={social_bird} alt='bird'/>
   </Wrapper> 
 )
}

export default Home;