import './searchBar.styles.scss';
import {MdSearch} from 'react-icons/md';
import React, {useState} from 'react'
import Crown from '../../assets/crown.png';

// import CustomButton from '../utility/custom-button/Custom-button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {Link} from 'react-router-dom';

// import ClickAwayListener from '@mui/material/ClickAwayListener';

import {SHOP_DATA} from '../../data';
// import { useEffect } from 'react';

export default function SearchBar() {
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])
  // const [ openSearch, setOpenSearch ] = useState(false);
  const [ show, setShow ] = useState(false);
  

  // React.useEffect(() => {
  //   const results = itemObj.filter(item => 
  //     item.toLowerCase().includes(searchTerm)
  //     );
  //     setSearchResults(results);
  // }, [searchTerm]);

  
  // Loop through Shop Data and pull out all items within categories
  const categoryItems = []
  for (let i = 0; i < SHOP_DATA.length; i++) {
    categoryItems.push(SHOP_DATA[i].items)
  };
  
  // Loop through category items and create array for all itemObj & itemNames
  const itemObj = []
  // const itemNames = []
  for (let i = 0; i < categoryItems.length; i++) {
    for (let j = 0; j < categoryItems[i].length; j++) {
      // itemNames.push(categoryItems[i][j].name);
      itemObj.push(categoryItems[i][j])
    }
  }

  // const handleClick = () => {
  //   setOpenSearch((prev) => !prev);
  // }

  // const handleClickAway = () => {
  //   setOpenSearch(false);
  // }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleShow()
    }
  }
  

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const handleChange = (e) => {
    e.preventDefault();

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
        <button 
        onClick={handleShow}
        type="submit">
          <MdSearch />
        </button>
        
        <input 
          placeholder='Search..' 
          type="text"
          name="search" 
          defaultValue={searchTerm}
          onChange={e => handleChange(e)}
          onKeyDown={handleKeyDown}
          // onClick={handleClick}
        />
      </div>
      <div className='searchResultsContainer'>
        {/* <ClickAwayListener onClickAway={handleClickAway}> */}
        {/* { openSearch  && searchResults ? ( */}
        { show && searchResults ? (

            <Container fluid className='searchResults'>

              <Offcanvas show={show} onHide={handleClose} placement={'start'} style={{width: '350px'}}>
                <Offcanvas.Header closeButton>
                  <img src={Crown} alt='company Logo' width="75px" />
                  <Offcanvas.Title><h2 style={{textAlign: 'center', marginTop: '10%'}}>Underground Royalty</h2></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <h4>Results:</h4>
                  <Table striped bordered hover variant="dark" sz="lg">
                    <tbody style={{display: 'block'}} id="searchTable">
                        {searchResults.map((item, index) => {
                          return (
                            // <div>
                              <tr style={{ minWidth: '300px'}}>
                                <td><img src={item.img} alt="test" width='50px'/></td>
                                <td><Link to='/pageNotAvailable'>{item.name}</Link></td>
                              </tr>
                            // {/* </div> */}
                            )
                          })}
                      </tbody>
                    </Table>
                </Offcanvas.Body>
              </Offcanvas>

              </Container>
            // :
            //   <Table striped bordered hover variant="dark" sz="md">
            //     <tbody style={{display: 'none'}}>
            //       {searchResults.map((item, index) => {
            //         console.log(searchResults)
            //         return (
            //           <tr>
            //               <td><a href='/'>{item.name}</a></td>
            //           </tr>
            //         )
            //       })}
            //     </tbody>
            //   </Table>
          // }
      
       ) : null}
       {/* </ClickAwayListener> */}
      </div>
        <div>
        </div>
    </Container>
  )
}
