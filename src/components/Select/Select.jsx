import { useState } from "react";
import { ReactComponent as DropdownIcon }from '../../assets/dropdown-12.svg';
import { DropdownStyle, SelectContainer, SelectLabelButton, DropdownItem } from "./Select.styled";

export const Select = ({ label, values, handleQueryParams, type, width }) => {
    const [currentValue, setCurrentValue] = useState('');
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleValueChange = (value) => {
        setCurrentValue(value);
    };
    const handleChange = (value, key) => {
        handleValueChange(value);
        handleQueryParams(type ,key);
        handleClose();
      };

      return (
        <SelectContainer style={{width: `${width}`}}>
          <SelectLabelButton onClick={handleOpen} >
            {currentValue !== "" ? currentValue : label}
            <DropdownIcon style={{position: 'absolute', top: '14px', right: '10px'}}/>
          </SelectLabelButton>
          <DropdownStyle $isVisible={open}>
            {values.map(({key, label}) => (
              <DropdownItem 
                onClick={() => handleChange(label, key)}
                $isActive={label === `${currentValue}`}
                key={key}
              >
                {label}
              </DropdownItem>
            ))}
          </DropdownStyle>
        </SelectContainer>
      );
  };