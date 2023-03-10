import React from 'react'
import '../directory/directory.styles.scss';
import MenuItem from '../menu-item/Menu-item.jsx';
import { PropTypes } from 'prop-types';

// coming from Directory state
export default function CategoryControl(props) {
  const { sections, categoryRedirect, currentView, toItemDetailsClick } = props;
  return (
    <div fluid="true" className='directory-menu'>
      {sections.map(({id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} categoryRedirect={categoryRedirect} toItemDetailsClick={toItemDetailsClick} />
      ))}
    </div>
  )
}

CategoryControl.propTypes = {
  categoryRedirect: PropTypes.func,

}
