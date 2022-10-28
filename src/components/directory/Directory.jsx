import React, { Component } from 'react'

import MenuItem from '../menu-item/Menu-item';

import './directory.styles.scss';

export default class Directory extends React.Component {
  constructor() {
    super ();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://www.themanual.com/wp-content/uploads/sites/9/2020/08/best-hats-2020.jpg?fit=800%2C800&p=1',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0419/1525/files/2800x1080-Moto-Black-020122-1_800x533_crop_right.jpg?v=1643761804',
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.insider.com/59c166d92488491d980855ee?width=1000&format=jpeg&auto=webp',
          id: 3,
          linkUrl: 'sneakers'
        },
        {
          title: 'mens',
          imageUrl: 'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1597738279-195176-patricia-palma-oaab-eywmuu-unsplashjpg.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'mens'
        },
        {
          title: 'womens',
          imageUrl: 'https://static.showit.co/800/pe-Kr33gRQu0n6Aa3jt0FA/25111/a_wachesaw_plantation_high_school_senior_session_by_pasha_belman_photography-26.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'womens'
        },
      ]
    }
  }
  render() {
    return (
      <div fluid="true" className='directory-menu'>
        {this.state.sections.map(({id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}
