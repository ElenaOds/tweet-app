
import { Button } from './PaginationButton.styled';

const PaginationButton = ({onLoadMore, isDisabled}) => {
    
   
  return (
    <>
      
      <Button onClick={onLoadMore} disabled={isDisabled}>Load More</Button>
        
    </> 
  );
}

  export default PaginationButton;