import { Select } from '../Select/Select';
import { SortContainer, SortOrder, } from './SortBreeds.styled';
import { ReactComponent as SortIcon}from '/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/sort-20.svg';
import { ReactComponent as SortRevertIcon}from '/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/sort-revert-20.svg';
import {selectValues} from '../../SelectValues';

const SortBreeds = ({handleQueryParams}) => {
    // console.log(handleQueryParams);
    return (
        <SortContainer>
                <Select handleQueryParams={handleQueryParams} label={'All breeds'} values={selectValues.breeds} width={'226px'} type={'breed_ids'}/>
                <Select handleQueryParams={handleQueryParams} label={'Limit: 10'} values={selectValues.sortLimit} width={'101px'} type={'limit'}/>
                <SortOrder onClick={() => handleQueryParams('order', 'ASC')}><SortIcon/></SortOrder>
                <SortOrder onClick={()=> handleQueryParams('order', 'DESC')}><SortRevertIcon/></SortOrder>
        </SortContainer>
    )
}

export default SortBreeds;