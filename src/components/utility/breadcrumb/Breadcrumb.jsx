import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import './breadcrumbGrouping.styles.scss';

export default function Breadcrumb(props) {
  const { onClearStateClick } = props;

  return (
    <div style={{ margin: '0 0 0 0'}}>
    <Breadcrumbs aria-label="breadcrumb" onClick={() => onClearStateClick("HOME")} style={{ margin: '0 0 0 0'}}>
      {/* <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center', margin: '0 0 0 0' }}
        color="inherit"
        href="http://localhost:3000/shop"
        // href='https://magofna68.github.io/eCommerce-front-end/#/'
        > */}
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        HOME
      {/* </Link> */}
    </Breadcrumbs>
    </div>
  )
}
