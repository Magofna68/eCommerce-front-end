import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import './breadcrumbGrouping.styles.scss';

export default function Breadcrumb() {
  return (
    <div className='breadcrumb'>
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href="http://localhost:3000/shop"
        // href='https://magofna68.github.io/eCommerce-front-end/#/'
        >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        HOME
      </Link>
    </Breadcrumbs>
    </div>
  )
}
