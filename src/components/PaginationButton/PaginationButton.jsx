
import { Button } from './PaginationButton.styled';

const PaginationButton = ({onLoadMore}) => {
    
   
  return (
    <div>
      <Button onClick={onLoadMore}>Load More</Button> 
    </div> 
  );
}

  export default PaginationButton;