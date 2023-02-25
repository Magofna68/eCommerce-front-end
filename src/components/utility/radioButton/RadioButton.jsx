import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Radio(props) {
  const { onFilterClick } = props;
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState(null);

  const radios = [
    { name: 'Under $25', value: '25' },
    { name: 'Under $50', value: '50' },
    { name: 'Under $75', value: '75' },
    { name: 'Under $100', value: '100' },
    { name: 'Under $150', value: '150' },
    // { name: '$200+', value: '200' },
  ];

  return (
    <>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-primary'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            onClick={()=> onFilterClick(radio.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export default Radio;