import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getTweets} from '../../redux/usersOperations';
import UserCard from '../UserCard/UserCard';
import PaginationButton from '../PaginationButton/PaginationButton';
import { CardsWrapper, Wrapper, Text } from './TweetsList.styled';

import { statusFilters } from "../../redux/constants";

const getVisibleUser = (users, statusFilter) => {
    switch (statusFilter) {
    case statusFilters.follow:
      return users.filter(user => !user.followed);
    case statusFilters.following:
      return users.filter(user => user.followed);
    default:
      return users;
  }
};


const TweetsList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const statusFilter = useSelector((state) => state.filters.status);
  const visibleUsers = getVisibleUser(users, statusFilter);
  const itemsPerPage = 3;
  const [currentItems, setCurrentItems] = useState(itemsPerPage);

  useEffect(() => {
      dispatch(getTweets());
    }, [dispatch]);

    const handleLoadMore = () => {
    setCurrentItems((prevPage) => prevPage + itemsPerPage);
    }
    const isDisabled = visibleUsers.length <= currentItems;
 

    return (
      <Wrapper>
      <CardsWrapper>
        {visibleUsers.length === 0 ? (<Text>No users are available</Text> 
         ) : (
        visibleUsers.slice(0, currentItems).map(user => {
          const { id, tweets, followers, avatar, followed, name } = user;
          return (
            <UserCard key={id} tweets={tweets} followers={followers} followed={followed} avatar={avatar} id={id} user={user} name={name}/>
          );
        })
      )}
      </CardsWrapper>
      <PaginationButton onLoadMore={handleLoadMore} isDisabled={isDisabled}/> 
     
    </Wrapper> 
    )
}

export default TweetsList;