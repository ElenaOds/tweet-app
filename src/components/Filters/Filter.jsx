import {  useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filterSlice";
import { StyledSelect } from './Filter.syled';

const Filter = () => {
  const dispatch = useDispatch();
  
  
  const handleFilterChange = (e) => {
    dispatch(setStatusFilter(e.target.value));
  }

  return (
        <div>
            <StyledSelect name="isSelected" 
             onChange={handleFilterChange}>
                <option  value='all'
                >Show all</option>
                <option 
                value='follow'
                >Show follow</option>
                <option 
                value="following"
                >Show following</option>
            </StyledSelect>
        </div>
    )
}

export default Filter;