import React, {useState} from 'react'

import './searchBar.styles.scss';
import {SHOP_DATA} from '../../data';
import Crown from '../../assets/crown.png';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {MdSearch} from 'react-icons/md';

import {Link} from 'react-router-dom';


export default function SearchBar() {
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])
  const [ show, setShow ] = useState(false);
  
  // Loop through Shop Data and pull out all items within categories
  const categoryItems = []
  for (let i = 0; i < SHOP_DATA.length; i++) {
    categoryItems.push(SHOP_DATA[i].items)
  };
  
  // Loop through category items and create array for all itemObj & itemNames
  const itemObj = []
  for (let i = 0; i < categoryItems.length; i++) {
    for (let j = 0; j < categoryItems[i].length; j++) {
      itemObj.push(categoryItems[i][j])
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleShow()
    }
  }

  const handleClick = (e) => {
    // e.preventDefault();
    console.log(e)
    const savedId = e.target.id;
    console.log("ID:", savedId)
    // window.location.href='http://localhost:3000/eCommerce-front-end#/pageNotAvailable';
    // window.location.href='https://magofna68.github.io/eCommerce-front-end#/pageNotAvailable'
    // handleClose()
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
    // console.log(searchResults)
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
        />
      </div>
      <div className='searchResultsContainer'>
        { show && searchResults ? 
          (
            <Container fluid className='searchResults'>
              <Offcanvas show={show} onHide={handleClose} placement={'start'} style={{width: '375px',}}>
                <Offcanvas.Header closeButton>
                  <img src={Crown} alt='company Logo' width="75px" id="crownLogo"/>
                  <Offcanvas.Title><h2 style={{textAlign: 'center', marginTop: '10%'}}>Underground Royalty</h2></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{minHeight: '95vh', width: '94%'}}>
                  <h4>Results:</h4>
                  {/* <Table striped bordered hover variant="dark" sz="lg"> */}
                    {/* <tbody style={{display: 'block'}} id="searchTable"> */}
                      <ul className="resultsContainer">
                        {searchResults.map((item, index) => {
                          return (
                            <li key={item.id} id={item.id} className="itemContainer" onClick={e => handleClick(e)}>
                              <img src={item.img} alt="test" />
                              {item.name}
                            </li>
                            // <tr key={item.id} className="itemContainer" onClick={id => handleClick(id)}>
                            //   <img src={item.img} alt="test" />
                            //   <td>{item.name}</td>
                            // </tr>
                          )
                        })}
                      </ul>
                    {/* </tbody> */}
                  {/* </Table> */}
                </Offcanvas.Body>
              </Offcanvas>
            </Container>
          ) : null }
      </div>
        <div>
        </div>
    </Container>
  )
}
