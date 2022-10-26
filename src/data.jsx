import { v4 as uuid } from 'uuid';

import Bass from './assets/Bass.jpg';
import Paradise from './assets/Paradise.jpg';
import Paradise2 from './assets/Paradise2.jpg';
import Paradise3 from './assets/Paradise3.jpg';
import EDC from './assets/EDC.jpg';
import Oreo from './assets/Oreo.jpg';
import DB from './assets/DB.jpg';
import Insomniac from './assets/Insomniac.jpg';
import TSSF from './assets/TSSF.jpg';

const SHOP_DATA = [
  {
    id: 0,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        // id: uuid(),
        id: 'price_1Lv4dkKFRYyirzJ3scXKuUNb',
        name: 'Mens Nike Dunk High Retro',
        alt: 'Nike Shoe',
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a0374c16-982d-44a8-b791-18d7b47fab9f/dunk-high-retro-mens-shoe-dTVTCk.png',
        price: '125'
      },
      {
        // id: uuid(),
        id: 'price_1Lv4fDKFRYyirzJ3zo5SjNBm',
        name: 'Air Jordan 6 Retro Low',
        alt: 'Air Jordan Shoe',
        img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/1f1b7246-1dcd-43de-af62-995320e977ef/air-jordan-6-retro-low-mens-shoes-MPwhfh.png',
        price: '200'
      },
      {
        id: 'price_1LvS4lKFRYyirzJ3nai5kJRN',
        name: 'Vans: Era Core Classics',
        alt: 'Vans Shoe',
        img: 'https://m.media-amazon.com/images/I/71b8Cc6XRfL._AC_SR1840,1472__FMwebp_.jpg',
        price:'54.95'
      },
      {
        id: 'price_1LvS5pKFRYyirzJ3DPIitZ5j',
        name: 'Men\'s Leather Oxford Dress Shoes',
        alt: 'Mens Dress Shoe',
        img: 'https://cdnimg.brunomarcshoes.com/brunomarcshoes/product/product/2022-09-19/9065/10:06--1.jpg',
        price: '42.99'
      },
      {
        id: 'price_1LvS6bKFRYyirzJ3ifZOM4Rx',
        name: 'Women\'s Catiba Pro',
        alt: 'Off-white Vintage Gum Sole shoe',
        img: 'https://cdn.shopify.com/s/files/1/2495/5044/products/catiba-catiba-pro-off-white-sneaker-canvas.slideshow3_1458c07d-fd02-4af5-be0e-74ae47c7be07.jpg?v=1624857339',
        img2: 'https://cdn.shopify.com/s/files/1/2495/5044/products/catiba-catiba-pro-off-white-sneaker-canvas.slideshow1_e7855403-f774-4faa-a049-c0d2b1857b09.jpg?v=1624857339',
        price: '89',
      },
      {
        id: 'price_1LvS7FKFRYyirzJ3Ll2Nr9bR',
        name: 'Women\'s Chuck Taylor All-Star Lift',
        alt: 'Lifted Black Converse with White Sole',
        img: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw3d987bc4/images/a_107/560845C_A_107X1.jpg?sw=964',
        img2: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw3476d3b3/images/c_107/560845C_C_107X1.jpg?sw=2000',
        price: '75',
      },
      {
        id: 'price_1LvS7vKFRYyirzJ3wyDROVDB',
        name: 'Women\'s Adidas Swift Running Shoe',
        alt: 'Original Swift Running Shoe',
        img: 'https://m.media-amazon.com/images/I/71CFoM4M0-L._AC_SX695._SX._UX._SY._UY_.jpg',
        img2: 'https://m.media-amazon.com/images/I/81ew2IgxrGL._AC_SX695._SX._UX._SY._UY_.jpg',
        price: '89',
      },
      {
        id: 'price_1LvS8XKFRYyirzJ3zrmm6mNi',
        name: 'Women\'s Nike Revolution 5',
        alt: 'Black and White Running Shoes',
        img: 'https://m.media-amazon.com/images/I/512tsZixA4L._AC_UX695_.jpg',
        img2: 'https://m.media-amazon.com/images/I/51-jt4VR-sL._AC_UX695_.jpg',
        price: '89.99',
      }
    ],
  },
  {
    id: 1,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        // id: uuid(),
        id: 'price_1Lv4gBKFRYyirzJ3uwBrj6C1',
        name: 'Womens Winter Warmer Coat | Insulated Jacket',
        alt: 'Womens Winter Jacket Model',
        img: 'https://cdni.llbean.net/is/image/wim/271139_0_44?hei=1095&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2',
        price: '37.99'
      },
      {
        id: 'price_1LvS9ZKFRYyirzJ3OAHakPOO',
        name: 'Womens Jackets Long-sleeve Printed Fringed Jacket',
        alt: 'Womens Jacket Model',
        img: 'https://img-va.myshopline.com/image/store/2000372313/1640572147473/a425b42fb0144dd795cd40fa538010ca_1296x.jpg?w=1100&h=1500',
        price: '44.99'
      },
      {
        id: 'price_1LvSA9KFRYyirzJ3Bh4H3I9c',
        name: ' Women\'s Foxy Sherpa Jacket',
        alt: 'Womens Jacket',
        img: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W4313R_01660_b1_s1_a1_1_m89_750x.jpg?v=1662676081',
        price: '198'
      },
      {
        id: 'price_1LvSAjKFRYyirzJ36qRYenNv',
        name: 'Women\'s Classic Suit Blazer',
        alt: 'Womens Blazer',
        img: 'https://bananarepublicfactory.gapfactory.com/webcontent/0028/599/220/cn28599220.jpg',
        price: '104'
      },
      {
        id: 'price_1LvSBNKFRYyirzJ3uzz096kf',
        name: 'Men\'s Vintage Fashion Coat',
        alt: 'Mens Leather Jacket',
        img: 'https://i.ebayimg.com/images/g/O1MAAOSw~z5jMXTu/s-l500.jpg',
        img2: 'https://i.ebayimg.com/images/g/TygAAOSw-bNjMXTv/s-l500.jpg',
        price: '50.50',
      },
      {
        id: 'price_1LvSBuKFRYyirzJ3ypNdwwz8',
        name: 'Men\'s Lightweight Bomber Jacket',
        alt: 'Mens Bomber Jacket Shell',
        img: 'https://m.media-amazon.com/images/I/71M8rwNjBKS._AC_UY879_.jpg',
        img2: 'https://m.media-amazon.com/images/I/71IvRQD5AjL._AC_UY879_.jpg',
        price: '33.99',
      },
      {
        id: 'price_1LvSCSKFRYyirzJ3t7hf3Y3r',
        name: 'Men\'s Hip-Hop Style Fluffy Winter Coat',
        alt: 'Fluffy winter Jacket',
        img: 'https://cdn.shopify.com/s/files/1/0088/6377/6815/products/Winter-Coat-Solid-Color-Plush-Simple-Fluffy-Men-Jacket-Hip-hop-Style-Winter-Coat_47264229-222a-4ea0-ab13-252a2516c1b2_1024x1024@2x.jpg?v=1663142831',
        img2: 'https://cdn.shopify.com/s/files/1/0088/6377/6815/products/Winter-Coat-Solid-Color-Plush-Simple-Fluffy-Men-Jacket-Hip-hop-Style-Winter-Coat_00cfb976-a36d-4c4d-9d79-415fe27eafc6_1024x1024@2x.jpg?v=1663142818',
        price: '149',
      },
      {
        id: 'price_1LvSD0KFRYyirzJ3TfZm0pHh',
        name: 'Men\'s Quilted Cotton Summer Jacket',
        alt: 'Mens Solid Color Jacket',
        img: 'https://i5.walmartimages.com/asr/4c5224a2-3e51-4a56-bc21-92ebc558ed3d.c2b0b56ba884cca32cdb3faf439392c5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        img2: 'https://i5.walmartimages.com/asr/7c7f9c5a-1502-44d4-a74e-3b90a5949eca.95985889496f865eb122c127bc45e42e.jpeg',
        price: '34.99',
      }
    ]
  },
  {
    id: 2,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 'price_1LvSDcKFRYyirzJ3nlyzkGus',
        name: 'Bass Academy Snap-back',
        alt: 'Black hat',
        img: `${Bass}`,
        price: '24.99'
      },
      {
        id: 'price_1LvSEBKFRYyirzJ3ourOdmtF',
        name: 'Alumni Designer Snap-back',
        alt: 'designer hat',
        img: `${Paradise}`,
        price: '24.99',
    
      },
      {
        id:'price_1LvSElKFRYyirzJ3171I58iI',
        name: 'Insomniac Snap-back',
        alt: 'Black Insomniac hat',
        img: `${Insomniac}`,
        price: '29.99'
      },
      {
        id: 'price_1LvSFJKFRYyirzJ3xixTEwzK',
        name: 'Illuminated EDC snap-back',
        alt: 'Black light up EDC snap',
        img: `${EDC}`,
        price: '34.99'
      },
      {
        id: 'price_1LvSFvKFRYyirzJ3SGBMCDyn',
        name: 'DB dad hat',
        alt: 'Retro hat',
        img: `${DB}`,
        price: '12.99'
      },
      {
        id: 'price_1LvSGNKFRYyirzJ3nshDkSA6',
        name: 'Alumni Oreo Snap-back',
        alt: 'Alumni designer hat',
        img: `${Oreo}`,
        price: '19.99'
      },
      {
        id:'price_1LvSGsKFRYyirzJ350VT9sRR',
        name: 'Alumni Designer Strap-back',
        alt: 'designer hat',
        img: `${Paradise3}`,
        price: '22.99'
      },
      {
        id: 'price_1LvSHLKFRYyirzJ3gM2GXxto',
        name: 'Alumni Paradise Snap-back',
        alt: 'Alumni designer hat',
        img: `${Paradise}`,
        price: '20'
      },
      {
        id: 'price_1LvSHrKFRYyirzJ39iUpQjkF',
        name: 'Alumni Designer Snap-back',
        alt: 'designer hat',
        img: `${Paradise2}`,
        price: '19.99'
      },
      {
        id: 'price_1LvSIJKFRYyirzJ30xepwWJH',
        name: 'TSSF dad hat',
        alt: 'Navy blue and cream dad hat',
        img: `${TSSF}`,
        price: '17.99'
      },
    ],
  },
  {
    id: 3,
    title: 'Shirts',
    routeName: 'shirts',
    items: [
      {
        id: 'price_1LvTojKFRYyirzJ3CXpdLfK5',
        name: 'AE Graphic Tee',
        alt: 'White Graphic shirt',
        img: 'https://s7d2.scene7.com/is/image/aeo/0160_4124_100_f?$pdp-mtg-opt$&fmt=webp',
        img2: 'https://s7d2.scene7.com/is/image/aeo/0160_4124_100_b?$pdp-mtg-opt$&fmt=webp',
        price: '14.99',
      },
      {
        id: 'price_1LvTpNKFRYyirzJ33Lf8RniP',
        name: 'Men\'s Random Allover Shirt',
        alt: 'Printed Button-Up',
        img: 'https://img.ltwebstatic.com/images3_pi/2022/04/24/165076834615aa93b86a959f2d85ef6b3ba8e53f62_thumbnail_900x.webp',
        img2: 'https://img.ltwebstatic.com/images3_pi/2022/04/24/165076834851cafbb7a54dcd43dddba85623b7b681_thumbnail_900x.webp',
        price: '12',
      },
      {
        id: 'price_1LvTq3KFRYyirzJ3ABcOFBbR',
        name: 'Men\'s Fashion Design Long Sleeve',
        alt: 'White Long Sleeve Shirt',
        img: 'https://i5.walmartimages.com/asr/eaaba20d-1327-4338-a4d5-8858c01d5146.c569110490e2abc067a864cd8a6d8a80.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        img2: 'https://i5.walmartimages.com/asr/89668cda-b8ab-4e21-a444-869d6fbf823b.a648f72c123d45121effafb5fb6d75b2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        price: '15',
      },
      {
        id: 'price_1LvTqeKFRYyirzJ3X9O7i0RO',
        name: 'Men\'s NFL Cincinnati, Joe Mixon Legend Jersey',
        alt: 'Black and Striped Jersey',
        img: 'https://fanatics.frgimages.com/cincinnati-bengals/mens-nike-joe-mixon-black-cincinnati-bengals-legend-jersey_pi4059000_altimages_ff_4059559-367f39bca1048a771872alt2_full.jpg?_hv=2&w=900',
        img2: 'https://fanatics.frgimages.com/cincinnati-bengals/mens-nike-joe-mixon-black-cincinnati-bengals-legend-jersey_pi4059000_altimages_ff_4059559-367f39bca1048a771872alt3_full.jpg?_hv=2&w=900',
        price: '99',
      },
      {
        id: 'price_1LvTrEKFRYyirzJ3Vc8xfuJV',
        name: 'Women\'s Chargers NFL Nike Jersey',
        alt: 'Chargers NFL Home Jersey',
        img: 'https://fanatics.frgimages.com/los-angeles-chargers/womens-nike-justin-herbert-powder-blue-los-angeles-chargers-game-jersey_pi3911000_altimages_ff_3911893-6d26fc46bc56f4fdb2bcalt2_full.jpg?_hv=2&w=900',
        img2: 'https://fanatics.frgimages.com/los-angeles-chargers/womens-nike-justin-herbert-powder-blue-los-angeles-chargers-game-jersey_pi3911000_altimages_ff_3911893-6d26fc46bc56f4fdb2bcalt3_full.jpg?_hv=2&w=900',
        price: '129'
      },
      {
        id: 'price_1LvTs4KFRYyirzJ30UtLkz2v',
        name: 'Women\'s Pro Choice Tee',
        alt: 'Feminism Shirt',
        img: 'https://i.ebayimg.com/images/g/pMIAAOSw32dixu~~/s-l300.jpg',
        img2: 'https://i.ebayimg.com/images/g/uukAAOSw7lRixvAS/s-l300.jpg',
        price: '17.99'
      },
      {
        id: 'price_1LvTtEKFRYyirzJ3zr45II15',
        name: 'Women\'s Classic Denim',
        alt: 'Classic Long Sleeve Denim',
        img: 'https://i5.walmartimages.com/asr/b6caa34c-ab70-471e-a5ec-280355f786dc.41023d3576fab5ecbc91fb32056b8e00.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        img2: 'https://i5.walmartimages.com/asr/ce4de04c-5ae1-4aae-9f42-009b553c7fc8.d9942e1476445df8f57ff11515091a13.jpeg',
        price: '36'
      },
      {
        id: 'price_1LvTtqKFRYyirzJ3kr5VAjtp',
        name: 'Women\'s Evil Natural Tee',
        alt: 'Creme Melodie T-Shirt',
        img: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Melodie-Evil-Natural-T-Shirt-_332986-front-US.jpg',
        img2: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Melodie-Evil-Natural-T-Shirt-_332986-back-US.jpg',
        price: '31.95'
      }
    ]
  }
]



export const MENS_SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 'price_1LvSGNKFRYyirzJ3nshDkSA6',
        name: 'Alumni Oreo Snap-back',
        alt: 'Alumni designer hat',
        img: `${Oreo}`,
        price: '19.99'
      },
      {
        id:'price_1LvSGsKFRYyirzJ350VT9sRR',
        name: 'Alumni Designer Strap-back',
        alt: 'designer hat',
        img: `${Paradise3}`,
        price: '22.99'
      },
      {
        id: 'price_1LvSHLKFRYyirzJ3gM2GXxto',
        name: 'Alumni Paradise Snap-back',
        alt: 'Alumni designer hat',
        img: `${Paradise}`,
        price: '20'
      },
      {
        id: 'price_1LvSHrKFRYyirzJ39iUpQjkF',
        name: 'Alumni Designer Snap-back',
        alt: 'designer hat',
        img: `${Paradise2}`,
        price: '19.99'
      },
      // {
      //   id: uuid(),
      //   name: 'Alumni Designer Snap-back',
      //   alt: 'designer hat',
      //   img: `${Paradise}`,
      //   price: '24.99'
      // },
    ]
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 'price_1Lv4dkKFRYyirzJ3scXKuUNb',
        name: 'Mens Nike Dunk High Retro',
        alt: 'Nike Shoe',
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a0374c16-982d-44a8-b791-18d7b47fab9f/dunk-high-retro-mens-shoe-dTVTCk.png',
        price: '125'
      },
      {
        id: 'price_1Lv4fDKFRYyirzJ3zo5SjNBm',
        name: 'Air Jordan 6 Retro Low',
        alt: 'Air Jordan Shoe',
        img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/1f1b7246-1dcd-43de-af62-995320e977ef/air-jordan-6-retro-low-mens-shoes-MPwhfh.png',
        price: '200'
      },
      {
        id: 'price_1LvS4lKFRYyirzJ3nai5kJRN',
        name: 'Vans: Era Core Classics',
        alt: 'Vans Shoe',
        img: 'https://m.media-amazon.com/images/I/71b8Cc6XRfL._AC_SR1840,1472__FMwebp_.jpg',
        price:'54.95'
      },
      {
        id: 'price_1LvS5pKFRYyirzJ3DPIitZ5j',
        name: 'Men\'s Leather Oxford Dress Shoes',
        alt: 'Mens Dress Shoe',
        img: 'https://cdnimg.brunomarcshoes.com/brunomarcshoes/product/product/2022-09-19/9065/10:06--1.jpg',
        price: '42.99'
      },
    ]
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 'price_1LvSBNKFRYyirzJ3uzz096kf',
        name: 'Men\'s Vintage Fashion Coat',
        alt: 'Mens Leather Jacket',
        img: 'https://i.ebayimg.com/images/g/O1MAAOSw~z5jMXTu/s-l500.jpg',
        img2: 'https://i.ebayimg.com/images/g/TygAAOSw-bNjMXTv/s-l500.jpg',
        price: '50.50',
      },
      {
        id: 'price_1LvSBuKFRYyirzJ3ypNdwwz8',
        name: 'Men\'s Lightweight Bomber Jacket',
        alt: 'Mens Bomber Jacket Shell',
        img: 'https://m.media-amazon.com/images/I/71M8rwNjBKS._AC_UY879_.jpg',
        img2: 'https://m.media-amazon.com/images/I/71IvRQD5AjL._AC_UY879_.jpg',
        price: '33.99',
      },
      {
        id: 'price_1LvSCSKFRYyirzJ3t7hf3Y3r',
        name: 'Men\'s Hip-Hop Style Fluffy Winter Coat',
        alt: 'Fluffy winter Jacket',
        img: 'https://cdn.shopify.com/s/files/1/0088/6377/6815/products/Winter-Coat-Solid-Color-Plush-Simple-Fluffy-Men-Jacket-Hip-hop-Style-Winter-Coat_47264229-222a-4ea0-ab13-252a2516c1b2_1024x1024@2x.jpg?v=1663142831',
        img2: 'https://cdn.shopify.com/s/files/1/0088/6377/6815/products/Winter-Coat-Solid-Color-Plush-Simple-Fluffy-Men-Jacket-Hip-hop-Style-Winter-Coat_00cfb976-a36d-4c4d-9d79-415fe27eafc6_1024x1024@2x.jpg?v=1663142818',
        price: '149',
      },
      {
        id: 'price_1LvSD0KFRYyirzJ3TfZm0pHh',
        name: 'Men\'s Quilted Cotton Summer Jacket',
        alt: 'Mens Solid Color Jacket',
        img: 'https://i5.walmartimages.com/asr/4c5224a2-3e51-4a56-bc21-92ebc558ed3d.c2b0b56ba884cca32cdb3faf439392c5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        img2: 'https://i5.walmartimages.com/asr/7c7f9c5a-1502-44d4-a74e-3b90a5949eca.95985889496f865eb122c127bc45e42e.jpeg',
        price: '34.99',
      }
    ]
  },
  {
    id: 4,
    title: 'Shirts',
    routeName: 'shirts',
    items: [
      {
        id: 'price_1LvTojKFRYyirzJ3CXpdLfK5',
        name: 'AE Graphic Tee',
        alt: 'White Graphic shirt',
        img: 'https://s7d2.scene7.com/is/image/aeo/0160_4124_100_f?$pdp-mtg-opt$&fmt=webp',
        img2: 'https://s7d2.scene7.com/is/image/aeo/0160_4124_100_b?$pdp-mtg-opt$&fmt=webp',
        price: '14.99',
      },
      {
        id: 'price_1LvTpNKFRYyirzJ33Lf8RniP',
        name: 'Men\'s Random Allover Shirt',
        alt: 'Printed Button-Up',
        img: 'https://img.ltwebstatic.com/images3_pi/2022/04/24/165076834615aa93b86a959f2d85ef6b3ba8e53f62_thumbnail_900x.webp',
        img2: 'https://img.ltwebstatic.com/images3_pi/2022/04/24/165076834851cafbb7a54dcd43dddba85623b7b681_thumbnail_900x.webp',
        price: '12',
      },
      {
        id: 'price_1LvTq3KFRYyirzJ3ABcOFBbR',
        name: 'Men\'s Fashion Design Long Sleeve',
        alt: 'White Long Sleeve Shirt',
        img: 'https://i5.walmartimages.com/asr/eaaba20d-1327-4338-a4d5-8858c01d5146.c569110490e2abc067a864cd8a6d8a80.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        img2: 'https://i5.walmartimages.com/asr/89668cda-b8ab-4e21-a444-869d6fbf823b.a648f72c123d45121effafb5fb6d75b2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        price: '15',
      },
      {
        id: 'price_1LvTqeKFRYyirzJ3X9O7i0RO',
        name: 'Men\'s NFL Cincinnati, Joe Mixon Legend Jersey',
        alt: 'Black and Striped Jersey',
        img: 'https://fanatics.frgimages.com/cincinnati-bengals/mens-nike-joe-mixon-black-cincinnati-bengals-legend-jersey_pi4059000_altimages_ff_4059559-367f39bca1048a771872alt2_full.jpg?_hv=2&w=900',
        img2: 'https://fanatics.frgimages.com/cincinnati-bengals/mens-nike-joe-mixon-black-cincinnati-bengals-legend-jersey_pi4059000_altimages_ff_4059559-367f39bca1048a771872alt3_full.jpg?_hv=2&w=900',
        price: '99',
      },
    ]
  }
]


export const WOMENS_SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 'price_1LvSDcKFRYyirzJ3nlyzkGus',
        name: 'Bass Academy Snap-back',
        alt: 'Black hat',
        img: `${Bass}`,
        price: '24.99'
      },
      {
        id:'price_1LvSElKFRYyirzJ3171I58iI',
        name: 'Insomniac Snap-back',
        alt: 'Black Insomniac hat',
        img: `${Insomniac}`,
        price: '29.99'
      },
      {
        id: 'price_1LvSFJKFRYyirzJ3xixTEwzK',
        name: 'Illuminated EDC snap-back',
        alt: 'Black light up EDC snap',
        img: `${EDC}`,
        price: '34.99'
      },
      {
        id: 'price_1LvSFvKFRYyirzJ3SGBMCDyn',
        name: 'DB dad hat',
        alt: 'Retro hat',
        img: `${DB}`,
        price: '12.99'
      },
      {
        id: 'price_1LvSIJKFRYyirzJ30xepwWJH',
        name: 'TSSF dad hat',
        alt: 'Navy blue and cream dad hat',
        img: `${TSSF}`,
        price: '17.99'
      },
    ]
  },
  {
    id: 2,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        // id: uuid(),
        id: 'price_1Lv4gBKFRYyirzJ3uwBrj6C1',
        name: 'Womens Winter Warmer Coat | Insulated Jacket',
        alt: 'Womens Winter Jacket Model',
        img: 'https://cdni.llbean.net/is/image/wim/271139_0_44?hei=1095&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2',
        price: '37.99'
      },
      {
        id: 'price_1LvS9ZKFRYyirzJ3OAHakPOO',
        name: 'Womens Jackets Long-sleeve Printed Fringed Jacket',
        alt: 'Womens Jacket Model',
        img: 'https://img-va.myshopline.com/image/store/2000372313/1640572147473/a425b42fb0144dd795cd40fa538010ca_1296x.jpg?w=1100&h=1500',
        price: '44.99'
      },
      {
        id: 'price_1LvSA9KFRYyirzJ3Bh4H3I9c',
        name: ' Women\'s Foxy Sherpa Jacket',
        alt: 'Womens Jacket',
        img: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W4313R_01660_b1_s1_a1_1_m89_750x.jpg?v=1662676081',
        price: '198'
      },
      {
        id: 'price_1LvSAjKFRYyirzJ36qRYenNv',
        name: 'Women\'s Classic Suit Blazer',
        alt: 'Womens Blazer',
        img: 'https://bananarepublicfactory.gapfactory.com/webcontent/0028/599/220/cn28599220.jpg',
        price: '104'
      },
    ]
  },
  {
    id: 3,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 'price_1LvS6bKFRYyirzJ3ifZOM4Rx',
        name: 'Women\'s Catiba Pro',
        alt: 'Off-white Vintage Gum Sole shoe',
        img: 'https://cdn.shopify.com/s/files/1/2495/5044/products/catiba-catiba-pro-off-white-sneaker-canvas.slideshow3_1458c07d-fd02-4af5-be0e-74ae47c7be07.jpg?v=1624857339',
        img2: 'https://cdn.shopify.com/s/files/1/2495/5044/products/catiba-catiba-pro-off-white-sneaker-canvas.slideshow1_e7855403-f774-4faa-a049-c0d2b1857b09.jpg?v=1624857339',
        price: '89',
      },
      {
        id: 'price_1LvS7FKFRYyirzJ3Ll2Nr9bR',
        name: 'Women\'s Chuck Taylor All-Star Lift',
        alt: 'Lifted Black Converse with White Sole',
        img: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw3d987bc4/images/a_107/560845C_A_107X1.jpg?sw=964',
        img2: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw3476d3b3/images/c_107/560845C_C_107X1.jpg?sw=2000',
        price: '75',
      },
      {
        id: 'price_1LvS7vKFRYyirzJ3wyDROVDB',
        name: 'Women\'s Adidas Swift Running Shoe',
        alt: 'Original Swift Running Shoe',
        img: 'https://m.media-amazon.com/images/I/71CFoM4M0-L._AC_SX695._SX._UX._SY._UY_.jpg',
        img2: 'https://m.media-amazon.com/images/I/81ew2IgxrGL._AC_SX695._SX._UX._SY._UY_.jpg',
        price: '89',
      },
      {
        id: 'price_1LvS8XKFRYyirzJ3zrmm6mNi',
        name: 'Women\'s Nike Revolution 5',
        alt: 'Black and White Running Shoes',
        img: 'https://m.media-amazon.com/images/I/512tsZixA4L._AC_UX695_.jpg',
        img2: 'https://m.media-amazon.com/images/I/51-jt4VR-sL._AC_UX695_.jpg',
        price: '89.99',
      }
    ]
  },
  {
    id: 4,
    title: 'Shirts',
    routeName: 'shirts',
    items: [
      {
        id: 'price_1LvTrEKFRYyirzJ3Vc8xfuJV',
        name: 'Women\'s Chargers NFL Nike Jersey',
        alt: 'Chargers NFL Home Jersey',
        img: 'https://fanatics.frgimages.com/los-angeles-chargers/womens-nike-justin-herbert-powder-blue-los-angeles-chargers-game-jersey_pi3911000_altimages_ff_3911893-6d26fc46bc56f4fdb2bcalt2_full.jpg?_hv=2&w=900',
        img2: 'https://fanatics.frgimages.com/los-angeles-chargers/womens-nike-justin-herbert-powder-blue-los-angeles-chargers-game-jersey_pi3911000_altimages_ff_3911893-6d26fc46bc56f4fdb2bcalt3_full.jpg?_hv=2&w=900',
        price: '129'
      },
      {
        id: 'price_1LvTs4KFRYyirzJ30UtLkz2v',
        name: 'Women\'s Pro Choice Tee',
        alt: 'Feminism Shirt',
        img: 'https://i.ebayimg.com/images/g/pMIAAOSw32dixu~~/s-l300.jpg',
        img2: 'https://i.ebayimg.com/images/g/uukAAOSw7lRixvAS/s-l300.jpg',
        price: '17.99'
      },
      {
        id: 'price_1LvTtEKFRYyirzJ3zr45II15',
        name: 'Women\'s Classic Denim',
        alt: 'Classic Long Sleeve Denim',
        img: 'https://i5.walmartimages.com/asr/b6caa34c-ab70-471e-a5ec-280355f786dc.41023d3576fab5ecbc91fb32056b8e00.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        img2: 'https://i5.walmartimages.com/asr/ce4de04c-5ae1-4aae-9f42-009b553c7fc8.d9942e1476445df8f57ff11515091a13.jpeg',
        price: '36'
      },
      {
        id: 'price_1LvTtqKFRYyirzJ3kr5VAjtp',
        name: 'Women\'s Evil Natural Tee',
        alt: 'Creme Melodie T-Shirt',
        img: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Melodie-Evil-Natural-T-Shirt-_332986-front-US.jpg',
        img2: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Melodie-Evil-Natural-T-Shirt-_332986-back-US.jpg',
        price: '31.95'
      }
    ]
  }
]

 function getProductData(id) {
  let shopData = SHOP_DATA.find(item => item.id === id)
  console.log(shopData);
  if (shopData === undefined) {
    console.log("Product data does not exist for this ID:" + id);
    return undefined;
  }
  return shopData;
}

export { SHOP_DATA, getProductData };