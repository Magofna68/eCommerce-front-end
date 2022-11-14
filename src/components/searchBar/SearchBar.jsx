import './searchBar.styles.scss';
import {MdSearch} from 'react-icons/md';
import React from 'react'
import CustomButton from '../utility/custom-button/Custom-button';
import Container from 'react-bootstrap/Container';

export default function SearchBar() {
  return (
    <Container fluid className='searchBarContain'>
      <div className='searchBar'>
        <button type="submit">
          <MdSearch />
        </button>
        <input placeholder='Search..' type="text" name="search">
        </input>
      </div>
    </Container>
  )
}
