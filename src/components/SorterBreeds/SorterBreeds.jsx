import { Select } from '../Select/Select';
import { SortContainer, SortOrder, Wrapper, } from './SorterBreeds.styled';
import { ReactComponent as SortIcon}from '../../assets/sort-20.svg';
import { ReactComponent as SortRevertIcon}from '../../assets/sort-revert-20.svg';
import {selectValues} from '../../constants/selectValues';
import MediaQuery from 'react-responsive';


export const SorterBreeds = ({handleQueryParams, handleSortClick, isDefSort}) => {

    return (
        <SortContainer>
            <MediaQuery  maxWidth={767}>
                <Select handleQueryParams={handleQueryParams} label={'All breeds'} values={selectValues.breeds} width={'100%'} type={'breed_ids'}/>
                <Wrapper>
                    <Select handleQueryParams={handleQueryParams} label={'Limit: 5'} values={selectValues.limit} width={'100%'} type={'limit'}/>
                    <SortOrder onClick={() => handleSortClick('default')}>{isDefSort ? <SortIcon style={{fill: '#FF868E'}}/> : <SortIcon style={{fill: '#8C8C8C'}}/>}</SortOrder>
                    <SortOrder onClick={()=> handleSortClick('reverse')}>{!isDefSort ? <SortRevertIcon style={{fill: '#FF868E'}}/> : <SortRevertIcon style={{fill: '#8C8C8C'}}/>}</SortOrder>
                </Wrapper>
            </MediaQuery>
            <MediaQuery  minWidth={768} maxWidth={1023}>
                <Select handleQueryParams={handleQueryParams} label={'All breeds'} values={selectValues.breeds} width={'226px'} type={'breed_ids'}/>
                <Select handleQueryParams={handleQueryParams} label={'Limit: 5'} values={selectValues.limit} width={'101px'} type={'limit'}/>
                <SortOrder onClick={() => handleSortClick('default')}>{isDefSort ? <SortIcon style={{fill: '#FF868E'}}/> : <SortIcon style={{fill: '#8C8C8C'}}/>}</SortOrder>
                <SortOrder onClick={()=> handleSortClick('reverse')}>{!isDefSort ? <SortRevertIcon style={{fill: '#FF868E'}}/> : <SortRevertIcon style={{fill: '#8C8C8C'}}/>}</SortOrder>
            </MediaQuery>
            <MediaQuery  minWidth={1024} maxWidth={1439}>
                <Select handleQueryParams={handleQueryParams} label={'All breeds'} values={selectValues.breeds} width={'100%'} type={'breed_ids'}/>
                <Wrapper>
                    <Select handleQueryParams={handleQueryParams} label={'Limit: 5'} values={selectValues.limit} width={'100%'} type={'limit'}/>
                    <SortOrder onClick={() => handleSortClick('default')}>{isDefSort ? <SortIcon style={{fill: '#FF868E'}}/> : <SortIcon style={{fill: '#8C8C8C'}}/>}</SortOrder>
                    <SortOrder onClick={()=> handleSortClick('reverse')}>{!isDefSort ? <SortRevertIcon style={{fill: '#FF868E'}}/> : <SortRevertIcon style={{fill: '#8C8C8C'}}/>}</SortOrder>
                </Wrapper>
            </MediaQuery>
            <MediaQuery  minWidth={1440}>
                <Select handleQueryParams={handleQueryParams} label={'All breeds'} values={selectValues.breeds} width={'226px'} type={'breed_ids'}/>
                <Select handleQueryParams={handleQueryParams} label={'Limit: 5'} values={selectValues.limit} width={'101px'} type={'limit'}/>
                <SortOrder onClick={() => handleSortClick('default')}>{isDefSort ? <SortIcon style={{fill: '#FF868E'}}/> : <SortIcon style={{fill: '#8C8C8C'}}/>}</SortOrder>
                <SortOrder onClick={()=> handleSortClick('reverse')}>{!isDefSort ? <SortRevertIcon style={{fill: '#FF868E'}}/> : <SortRevertIcon style={{fill: '#8C8C8C'}}/>}</SortOrder>
            </MediaQuery>
        </SortContainer>
    )
}
