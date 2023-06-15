import { Wrapper, Title, Text, StyledNavLink } from './HomePage.styled';


const Home = () => {
    return (      
 <Wrapper >
  <Title>Tweet with your friends</Title>
      <Text>Tweet application is a social utility that connects you with the people around you. 
        <br/>Have fun anytime at any place</Text>
        <StyledNavLink to="/tweets">Get started</StyledNavLink>
   </Wrapper> 
 )
}

export default Home;