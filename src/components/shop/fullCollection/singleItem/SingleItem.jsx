import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import './singleItem.styles.scss';

export default function SingleItem(props) {
  const { id, toItemDetailsClick, alt, name, price, img, handleItemSelection, } = props;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const goToSelectedItem = async (e) => {
    const selectedItem = [props][0];
    // await handleItemSelection(selectedItem);
    await toItemDetailsClick(selectedItem);
  }

return (
    <>
      <Card className='singleItem' onClick={(e)=> goToSelectedItem(e)} >
      {/* <Card className='singleItem' id={id} onClick={(e)=> toItemDetailsClick(e)} > */}
        <Card.Img className="singleItemImg" variant='top' src={img} alt={alt} />

        {/* add multiple photo options w/ slider maybe to advertise product */}
        <Card.Body>
          <Card.Title> {name} </Card.Title>
          <Card.Text> ${price} </Card.Text>
        </Card.Body>

      </Card>
    </>
  )
};
