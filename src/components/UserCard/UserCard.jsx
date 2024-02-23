import { Wrapper, StyledLogo, BackgroundImage, Ellipse, Rectangle, Img, Text, StyledButton } from './UserCard.styled';
import { useDispatch } from 'react-redux';
import {updateTweets } from '../../redux/usersOperations';


const UserCard = ({  id, tweets, avatar, name, followers, followed }) => {
   const dispatch = useDispatch();

    const toggle = () => {
    let updatedUser;

    if(followed) {
        updatedUser = {
            id,
            followers: followers -1,
            followed: false,
        };
        } else {
        updatedUser = {
            id,
            followers: followers +1,
            followed: true,
        };   
    };  
    return dispatch(updateTweets(updatedUser));    
};

const handleClick = (e) => {
    toggle();
    e.target.blur();
}


return (
    <Wrapper>
        <StyledLogo />
        <BackgroundImage/>
        <Rectangle></Rectangle>
        <Ellipse>
            <Img src={avatar} alt={name}/>
        </Ellipse>               
        <Text>{tweets} TWEETS</Text>
        <Text>{followers.toLocaleString('en-US')} FOLLOWERS</Text>
        <StyledButton onClick={handleClick} followed ={followed}
       >{followed ? 'Following' : 'Follow'}</StyledButton>    
    </Wrapper>
   
);
};
export default UserCard;