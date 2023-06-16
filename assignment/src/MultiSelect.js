import React from 'react';
import Multiselect from 'multiselect-react-dropdown';

const MultiSelect = ({ value, readonly }) => {
  const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
    { value: 4, label: 'Option 4' },
    { value: 5, label: 'Option 5' },
    { value: 6, label: 'Option 6' },
    
  ];

  const selectedOptions = options.filter((option) =>
    value.includes(option.value)
  );

  const handleSelectionChange = (selectedList) => {
    const selectedValues = selectedList.map((option) => option.value);
    console.log('Selected values:', selectedValues);
  };

  return (
    <div  style={{width:"30em",margin:"auto", marginTop:"30px"}}>
    <Multiselect
   
      options={options}
      selectedValues={selectedOptions}
      onSelect={handleSelectionChange}
      onRemove={handleSelectionChange}
      disablePreSelectedValues={!readonly}
      // disable={!readonly}
      displayValue="label"
      showCheckbox="false"
    />
    </div>
  );
};

export default MultiSelect;
