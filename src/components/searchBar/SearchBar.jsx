import React, {useState} from 'react'

import './searchBar.styles.scss';
import {SHOP_DATA} from '../../data.jsx';
import Crown from '../../assets/crown.png';

import Container from 'react-bootstrap/Container';
// import Table from 'react-bootstrap/Table';
import Offcanvas from 'react-bootstrap/Offcanvas';

import SearchIcon from '@mui/icons-material/Search';
import FormInput from '../form-input/Form-input.jsx';

import { useNavigate } from 'react-router';


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

  const navigate = useNavigate();
  
  const handleClick = (e) => {
    // Save the ID into variable and filter through array of obj to find selected item
    const savedId = e.target.id;
    const savedItem = itemObj.filter(item => item.id === savedId)[0]
    console.log("Saved Item from #SearchBar:", savedItem)
    let path = 'shop/'.concat(savedItem.title).concat('/', savedId)
    console.log("path", path)
    navigate(path, {
      state:  {
        id: savedId, 
        title: savedItem.title,
        name: savedItem.name, 
        price: savedItem.price, 
        img: savedItem.img,
        img2: savedItem.img2,
        img3: savedItem.img3,
        img4: savedItem.img4,
        desc: savedItem.desc,
        detail: savedItem.detail,
        reviews: savedItem.reviews
      }
    })
    handleClose()
  }

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

const clearResults = () => {
  setSearchResults([]);
  setSearchTerm("");
}

  const handleChange = async (e) => {
    e.preventDefault();
    clearResults()
    const searchedTerm = e.target.value
    const newTerm = searchedTerm.toString().toLowerCase();
    setSearchTerm(newTerm);
    // bug: only includes search queries relating to title
    // const results = [];
    const itemTitleResults = itemObj.filter(item => item.title.toLowerCase().includes(newTerm))
    const itemNameResults = itemObj.filter(item => item.name.toLowerCase().includes(newTerm))
    const itemAltResults = itemObj.filter(item => item.alt.toLowerCase().includes(newTerm))
    // results.push(itemTitleResults && itemNameResults)
    const results = [...itemTitleResults, ...itemNameResults, ...itemAltResults];
    // console.log("ItemTitleResults:", itemTitleResults)
    // console.log("ItemNAME:", itemNameResults)
    console.log("results: ", results)
    // setSearchResults(itemTitleResults);
    await setSearchResults(results)
    console.log("searchResults: ", searchResults)
  }

  return (
    <Container fluid className='searchBarContain'>
      <div className='searchBar'>
        <input 
          placeholder='Search..' 
          type="text"
          label="Search"
          id="searchBar"
          name="search" 
          defaultValue={searchTerm}
          onChange={e => handleChange(e)}
          onKeyDown={handleKeyDown}
          // onClick={getFocus()}
        />
        
        <button 
          onClick={handleShow}
          type="submit"
          className="searchButton"
        >
          <SearchIcon fontSize="medium" />
        </button>
        
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
                      <ul className="resultsContainer">
                        {searchResults.map((item, index) => {
                          return (
                            <li key={item.id} id={item.id} className="itemContainer" onClick={e => handleClick(e)}>
                              <img src={item.img} alt={item.alt} />
                              {item.name}
                            </li>
                          )
                        })}
                      </ul>
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
