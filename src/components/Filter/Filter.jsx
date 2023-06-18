import { CardContainer, CardLabel, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filterContacts = e => {
    console.log(e.target.value);
    dispatch(changeFilter(e.target.value));
  };
  return (
    <CardContainer>
      <CardLabel htmlFor="filter">Find contacts by name</CardLabel>
      <Input
        type="text"
        name="filter"
        onChange={e => {
          filterContacts(e);
        }}
      />
    </CardContainer>
  );
};
