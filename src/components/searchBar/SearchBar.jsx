import './searchBar.styles.scss';
import {MdSearch} from 'react-icons/md';
import React from 'react'
import CustomButton from '../utility/custom-button/Custom-button';

export default function SearchBar() {
  return (
    <div className='searchBarContain'>
      <div className='searchBar'>
        <button type="submit"><i class="fa fa-search"></i>
          <MdSearch />
        </button>
        <input placeholder='Search..' type="text" name="search">
        </input>
      </div>
    </div>
  )
}
