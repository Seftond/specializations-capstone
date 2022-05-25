import React, { useState } from 'react'
import DefaultNav from './DefaultNav'
import Footer from './Footer'
import { IconContext } from 'react-icons';
import { FaCrown } from 'react-icons/fa';
let items = [{
  id: 1,
  name: 'White t-shirt',
  price: 4.99,
  image: 'https://d1nxj5numvhshx.cloudfront.net/13561-large_default/selected-homme-shd-pima-white-t-shirt.jpg',
},
{  id: 2,
  name: 'Crown Fit for a King',
  price: 111.11,
  image: 'https://partycity.scene7.com/is/image/PartyCity/_sq_?$_500x500_$&$product=PartyCity/176140_full',
},
{
  id: 3,
  name: 'King Cape',
  price: 7.99,
  image: 'https://s7.orientaltrading.com/is/image/OrientalTrading/13902498?$PDP_VIEWER_IMAGE$',
},
{
  id: 4,
  name: 'Scepter',
  price: 44.95,
  image: 'data:image/jpeg;base64,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',
},
{
  id: 5,
  name: 'Juice',
  price: 51.01,
  image: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/49519943222179p',
},
{
  id: 6,
  name: 'Black t-shirt',
  price: 4.99,
  image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550855597-TM71Q02SBLK_F_1.jpg',
},
]

function Shop() {
  const [shopItems, setShopItems] = useState(false)
  return (
    <div className='page'>
      <DefaultNav/>
      <IconContext.Provider value={{size: 200}}>
        { shopItems ? <FaCrown className="flipper"/> : <FaCrown/>}
        </IconContext.Provider>
      <div className='shop'>
        {items.map(element => (
          <div key={element.id} className='shopItem'>
            <h3>{element.name}</h3>
            <img src={element.image} alt='Item'/>
            <p>${element.price}</p>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    <Footer/>
  </div>
  )
}

export default Shop