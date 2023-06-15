
import { Button } from './PaginationButton.styled';

const PaginationButton = ({onLoadMore, isDisabled}) => {
    
   
  return (
    <div>
      <Button 
      disabled={isDisabled}
      onClick={onLoadMore}>Load More</Button> 
    </div> 
  );
}

  export default PaginationButton;