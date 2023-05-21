import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getTweets} from '../../redux/usersOperations';
import UserCard from '../UserCard/UserCard';
import PaginationButton from '../PaginationButton/PaginationButton';
import { CardsWrapper, Wrapper } from './TweetsList.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const TweetsList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const [currentItems, setCurrentItems] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    dispatch(getTweets());
    }, [dispatch]);

    const handleLoadMore = () => {
      if(users.length === 0) {
        return toast.error(
          'Sorry, no users found');
     }

     if(users.length <= currentItems.length) {
      setDisabled(true);
      return toast.info(
        'No more users are available');   
    }
      setItemsPerPage((prevItemsPerPage) => prevItemsPerPage + 3);
    };

   

    useEffect(() => {
      setCurrentItems(users.slice(0, itemsPerPage));
  }, [itemsPerPage, users]);
  
 

    return (
      <Wrapper>
  
      <CardsWrapper>
        {currentItems.map(user => {
          const { id, tweets, followers, avatar, followed } = user;
          return (
            <UserCard key={id} tweets={tweets} followers={followers} followed={followed} avatar={avatar} id={id} user={user}/>
          );
        })}
      </CardsWrapper>
    
      <PaginationButton onLoadMore={handleLoadMore} isDisabled={isDisabled}/> 
    </Wrapper> 
    )
}

export default TweetsList;