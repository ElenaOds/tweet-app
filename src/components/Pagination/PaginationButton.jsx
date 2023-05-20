
import { Button } from './PaginationButton.styled';

const PaginationButton = ({onLoadMore}) => {
    
   
  return (
    <>
      
      <Button onClick={onLoadMore}>Load More</Button>
        
    </> 
  );
}

  export default PaginationButton;