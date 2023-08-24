import { Select } from '../Select/Select';
import { SelectLabel, SortContainer, UpdateButton, Wrapper, } from './SortGallery.styled';
import {selectValues} from '../../SelectValues';
import { ReactComponent as UpdateIcon}from '../../assets/update-20.svg';

const SortGallery = ({handleQueryParams}) => {
    // console.log(handleQueryParams);
    return (
        <SortContainer>
            <Wrapper>
                <SelectLabel>Order</SelectLabel>
                <Select handleQueryParams={handleQueryParams} label={'Random'} values={selectValues.order} type={'order'} inverse={true}/>
            </Wrapper>
            <Wrapper>
                <SelectLabel>Type</SelectLabel>
                <Select handleQueryParams={handleQueryParams} label={'Static'} values={selectValues.type} type={'mime_types'} inverse={true}/>
            </Wrapper>
            <Wrapper>
                <SelectLabel>Breed</SelectLabel>
                <Select handleQueryParams={handleQueryParams} label={'All breeds'} values={selectValues.breeds} type={'breed_ids'} inverse={true}/>
            </Wrapper>
            <Wrapper>
                <SelectLabel>Limit</SelectLabel>
                <Select handleQueryParams={handleQueryParams} label={'5 items per page'} values={selectValues.sortLimit} type={'limit'} inverse={true} width={'245px'}/>
            <UpdateButton><UpdateIcon/></UpdateButton>
            </Wrapper>
        </SortContainer>
    )
}

export default SortGallery;