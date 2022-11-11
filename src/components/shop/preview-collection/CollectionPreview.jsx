import React from 'react'
import './collectionPreview.styles.scss'
import {CollectionItem} from '../collection-item/CollectionItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export const CollectionPreview = ({title, items, routeName }) => (
    <Container
      fluid="true"
      className='collectionPreview'
    >
      <div className='titleContainer'>
        <h2>
          <Link className="nav-link" to={'/shop/'+ routeName}>
            {title.toUpperCase()}
          </Link>
        <hr />
        </h2>
      </div>
      <div 
        className='preview'
        style={{ 
          flexWrap: 'wrap',
          display: 'flex',
          alignContent: 'space-between',
          justifyContent: 'center',
        }}
      >
        {items
          // limit to only 4 items to display; gets rerendered with component
          .filter((item, index)=> index < 4)
          .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} id={id} routeName={routeName} {...otherItemProps} />
            ))}
      </div>
    </Container>
  )

  export default CollectionPreview;