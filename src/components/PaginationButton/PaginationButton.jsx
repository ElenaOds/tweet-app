
import { Button } from './PaginationButton.styled';

const PaginationButton = ({onLoadMore, isDisabled}) => {
    
   
  return (
    <div>
      <Button onClick={onLoadMore} disabled={isDisabled}>Load More</Button> 
    </div> 
  );
}

  export default PaginationButton;