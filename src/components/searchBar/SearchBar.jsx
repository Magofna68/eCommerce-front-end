import './searchBar.styles.scss';
import {MdSearch} from 'react-icons/md';
import React, {useState} from 'react'
import CustomButton from '../utility/custom-button/Custom-button';
import Container from 'react-bootstrap/Container';
import {SHOP_DATA} from '../../data';

export default function SearchBar() {
  const [ searchTerm, setSearchTerm ] = useState('')

  // function searchQuery (searchTerm) {
  //   const searchedTerm = SHOP_DATA.filter(searchTerm => )
  // }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    if (searchTerm.length > 0) {
      return SHOP_DATA.items.name.match(searchTerm)
    }
  }

  const results = []
  return (
    <Container fluid className='searchBarContain'>
      <div className='searchBar'>
        <button type="submit">
          <MdSearch />
        </button>
        <input 
          placeholder='Search..' 
          type="text" 
          name="search" 
          onChange={handleChange} 
          value={searchTerm}>
        </input>
        <div>
          {
            results ?
            SHOP_DATA.map((item, index) => {
              <li>{item.name} - {item.price}</li>
            })
            :
            <div>no results</div>
          }
        </div>
      </div>
    </Container>
  )
}
