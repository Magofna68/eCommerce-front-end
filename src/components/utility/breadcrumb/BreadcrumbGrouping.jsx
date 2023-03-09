import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import './breadcrumbGrouping.styles.scss';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function BreadcrumbGrouping(props) {
  const {  navigate } = props;
  return (
    <div 
    className='breadcrumbGrouping'>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', }}
          color="inherit"
          href="http://localhost:3000/"
          // href='https://magofna68.github.io/eCommerce-front-end/#/'
          >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          HOME
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', onHover: 'pointer' }}
          color="inherit"
          onClick={() => navigate(-1)}
          // onClick={onClearItemStateClick}
        >
          ITEM LIST
        <KeyboardReturnIcon sx={{ mr: 0.5, }} fontSize="inherit" />
        </Link>
      </Breadcrumbs>
    </div>
  )
}
