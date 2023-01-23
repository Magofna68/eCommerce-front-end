import React from 'react'
import MenuItem from '../../../menu-item/Menu-item.jsx';
import { PropTypes } from 'prop-types';

export default function CategoryControl(props) {
  const { sections, categoryRedirect, currentView } = props;
  return (
    <div fluid="true" className='directory-menu'>
      {sections.map(({id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} categoryRedirect={categoryRedirect} />
      ))}
    </div>
  )
}

CategoryControl.propTypes = {
  categoryRedirect: PropTypes.func,

}
