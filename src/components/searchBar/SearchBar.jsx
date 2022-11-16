import './searchBar.styles.scss';
import {MdSearch} from 'react-icons/md';
import React, {useState} from 'react'
import CustomButton from '../utility/custom-button/Custom-button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import {SHOP_DATA} from '../../data';
import { flexbox } from '@mui/system';
import { useEffect } from 'react';

export default function SearchBar() {
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])

  // Loop through Shop Data and pull out all items within categories
  const categoryItems = []
  for (let i = 0; i < SHOP_DATA.length; i++) {
    categoryItems.push(SHOP_DATA[i].items)
  };
  // Loop through category items and create array for all itemObj & itemNames
  const itemNames = []
  const itemObj = []
  for (let i = 0; i < categoryItems.length; i++) {
    for (let j = 0; j < categoryItems[i].length; j++) {
      itemNames.push(categoryItems[i][j].name);
      itemObj.push(categoryItems[i][j])
    }
  }

  function clearResults() {
      setSearchResults([])
      setSearchTerm(' ');
  };

  const handleChange = (e) => {
    e.preventDefault();
    clearResults()

    const searchedTerm = e.target.value
    const newTerm = searchedTerm.toString()
    setSearchTerm(newTerm);

    setSearchResults(itemObj.filter(item =>
    item.name.toLowerCase().includes(searchTerm)))
    console.log(searchResults)
  }

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
          defaultValue={searchTerm}
          onChange={e => handleChange(e)} 
        />
      </div>
      {/* <div> */}
        <div>
          { 
            searchResults ?
            <Table striped bordered hover variant="dark" sz="md">
              <thead>
                <tr> 
                  {/* <th>Item:</th> */}
                </tr>
              </thead>
              <tbody style={{display: 'block'}}>
                {/* <div style={{display: 'block'}}> */}
                {searchResults.map((item, index) => {
                  return (
                    <tr>
                      <td><a href='/'>{item.name}</a></td>
                    </tr>
                  )
                })}
                {/* </div> */}
                  </tbody>
              </Table>
              :
              <Table striped bordered hover variant="dark" sz="md">
              <thead>
                <tr> 
                  {/* <th>Item:</th> */}
                </tr>
              </thead>
              <tbody style={{display: 'none'}}>
                {/* <div style={{display: 'block'}}> */}
                {searchResults.map((item, index) => {
                  return (
                    <tr>
                      <td><a href='/'>{item.name}</a></td>
                    </tr>
                  )
                })}
                {/* </div> */}
                  </tbody>
              </Table>
            }
          {/* {
            itemNames.map((item, index) => {
              return(
                <li>{item}</li>
              )
            })
          } */}
        </div>
      {/* </div> */}
    </Container>
  )
}
