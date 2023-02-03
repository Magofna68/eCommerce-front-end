import React from 'react'
import '../../../../pages/shopPage/directory/directory.styles.scss';
import MenuItem from '../../../../pages/shopPage/menu-item/Menu-item.jsx';
import { PropTypes } from 'prop-types';

// coming from Directory state
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
