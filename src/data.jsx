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
        title: 'sneakers',
        name: 'Mens Nike Dunk High Retro',
        alt: 'Nike Shoe',
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a0374c16-982d-44a8-b791-18d7b47fab9f/dunk-high-retro-mens-shoe-dTVTCk.png',
        img2: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0916b11d-470b-4fb9-90ea-f7a703b48749/dunk-high-retro-mens-shoe-dTVTCk.png',
        img3: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2a01fe-2d3f-4c84-8ca6-b3fb15e6e886/dunk-high-retro-mens-shoe-dTVTCk.png',
        img4: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/329146ed-226c-47d0-bc20-88b380598f46/dunk-high-retro-mens-shoe-dTVTCk.png',
        price: '125',
        desc: 'The Nike Dunk High arrived in 1985 and was worn on both college and NBA courts while Michael Jordan was rewriting history in his similarly looking Air Jordan 1. The Nike Dunk High\'s reputation as a sneaker that can be easily adjusted to match specific colors delivered the Dunk to a new generation in 1998, when customization, graphics, and experimentation with fabrics became more prevalent.',
        detail: ['Foam insole', 'Perforations on toe', 'The foam midsole offers lightweight, responsive cushioning.', 'The bold color blocking returns to the original university colors released in 1985, letting you choose who reigned supreme and rep your team.', 'The rubber sole with classic hoops pivot circle adds durability, tractions and heritage style.']
      },
      {
        // id: uuid(),
        id: 'price_1Lv4fDKFRYyirzJ3zo5SjNBm',
        title: 'sneakers',
        name: 'Air Jordan 6 Retro Low',
        alt: 'Air Jordan Shoe',
        img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/1f1b7246-1dcd-43de-af62-995320e977ef/air-jordan-6-retro-low-mens-shoes-MPwhfh.png',
        img2: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a102e607-0d73-45ed-865d-d9ebb9a82ef4/air-jordan-6-retro-low-mens-shoes-MPwhfh.png',
        img3: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/72cecc94-7710-4251-beb1-cb88f21d7f2a/air-jordan-6-retro-low-mens-shoes-MPwhfh.png',
        img4: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bd5328dd-45b8-46b0-ba12-ff4473819a36/air-jordan-6-retro-low-mens-shoes-MPwhfh.png',
        price: '200',
        desc: 'Released in \'91 and reissued throughout the early 2000s, the Air Jordan VI\'s first low-cut form didn\'t arrive until 2002. Twenty years later, we\'re bringing you a fresh, yet familiar new pair of kicks for spring.',
        detail: ['Air-Sole unit and foam midsole cushion every step.', 'Toggle lacing lets you easily adjust your fit.', 'Full-grain leather and polyster upper', 'Shown: Spruce Aura/Spruce Aura/Metallic Gold', 'Full-grain leather and polyster upper',]
      },
      {
        id: 'price_1LvS4lKFRYyirzJ3nai5kJRN',
        title: 'sneakers',
        name: 'Vans: Era Core Classics',
        alt: 'Vans Shoe',
        img: 'https://m.media-amazon.com/images/I/71b8Cc6XRfL._AC_SR1840,1472__FMwebp_.jpg',
        img2: 'https://m.media-amazon.com/images/I/81iW6Cf4YXL._AC_SR1840,1472__FMwebp_.jpg',
        img3: 'https://m.media-amazon.com/images/I/714QMAXFTDL._AC_SR1840,1472__FMwebp_.jpg',
        img4: 'https://m.media-amazon.com/images/I/71pXaOz882L._AC_SR1840,1472__FMwebp_.jpg',
        price:'54.95',
        desc: 'Vans Authentic Black has long been a Vans top seller for good reasons. Originally unveiled as the Vans #44 Deck Shoes in 1966, Anaheim’s finest export has gone from strength to strength on a journey to its current form. What form is that? A simple low top, lace-up profile, metal eyelets, rubber waffle outsoles, and a sleek black finish that never goes out of style. Vans Authentic black shoes are Vans heritage style at its most engrossing. Vans Authentic black shoes are what Vans “Off The Wall” approach is all about. Vans Authentic black shoes are sneaker fashion as it should be.',
        detail: ['Double stitch vamp detailing.', 'Die-cut EVA insert.', 'Cotton drill lining and a textile insole.', 'Uppers of durable canvas in a low-top silhouette with a classic lace-up style', 'From your board to chill sessions, keep it classic with the Vans® Era™ Core Classics skate shoes!',]
      },
      {
        id: 'price_1LvS5pKFRYyirzJ3DPIitZ5j',
        title: 'sneakers',
        name: 'Men\'s Leather Oxford Dress Shoes',
        alt: 'Mens Dress Shoe',
        img: 'https://cdnimg.brunomarcshoes.com/brunomarcshoes/product/product/SBOX222M/DARK%20BROWN/1.jpg',
        img2: 'https://cdnimg.brunomarcshoes.com/brunomarcshoes/product/product/SBOX222M/DARK%20BROWN/2.jpg',
        img3: 'https://cdnimg.brunomarcshoes.com/brunomarcshoes/product/product/SBOX222M/DARK%20BROWN/3.jpg',
        img4: 'https://cdnimg.brunomarcshoes.com/brunomarcshoes/product/product/SBOX222M/DARK%20BROWN/4.jpg',
        price: '42.99',
        desc: 'Showcase your style in these Bruno Marc men\'s oxford dress shoes. Crafted with 100% vegan leather, rubber sole, and plain toe, for a classic style. A foam insole is soft and shock absorbent for all-day action, while laces deliver a snug fit. Suitable for the office or other formal occasions.',
        detail: ['100% vegan leather', 'Rubber sole', 'Exquisite new vegan leather with plain toe design delivers a classic style.', 'Covered with PU leather, the foam insole is soft and shock-absorbent.', 'These men\'s oxford dress shoes with rubber outsole provide stability and flexibility',]
      },
      {
        id: 'price_1LvS6bKFRYyirzJ3ifZOM4Rx',
        title: 'sneakers',
        name: 'Women\'s Catiba Pro',
        alt: 'Off-white Vintage Gum Sole shoe',
        img: 'https://cdn.shopify.com/s/files/1/2495/5044/products/catiba-catiba-pro-off-white-sneaker-canvas.slideshow3_1458c07d-fd02-4af5-be0e-74ae47c7be07.jpg?v=1624857339',
        img2: 'https://cdn.shopify.com/s/files/1/2495/5044/products/catiba-catiba-pro-off-white-sneaker-canvas.slideshow1_e7855403-f774-4faa-a049-c0d2b1857b09.jpg?v=1624857339',
        img3: 'https://cdn.shopify.com/s/files/1/2495/5044/products/catiba-catiba-pro-off-white-sneaker-canvas.slideshow5_13308cfe-c4e2-493f-9260-5f3ec886798f.jpg?v=1624857339',
        img4: 'https://cdn.shopify.com/s/files/1/2495/5044/products/catiba-catiba-pro-off-white-sneaker-canvas.slideshow4_2acbf2c9-48dc-42e7-bea3-663462bcc7f7.jpg?v=1624857339',
        price: '89',
        desc: 'We’ve engineered the CATIBA Pro for durability, movement and the best grip possible. It’s built with board feel, traction, ultimate comfort and ankle stability with a reinforced flick point.',
        detail: ['Upper: Triple-stitch, premium suede & organic cotton canvas', 'Lining: Cotton canvas', 'Laces: Made with recycled plastics, and debossed metal aglets', 'Sole: 100% slip-resistant, natural rubber', 'Construction: Handmade vulcanized sneaker; fully stitched outsole',]
      },
      {
        id: 'price_1LvS7FKFRYyirzJ3Ll2Nr9bR',
        title: 'sneakers',
        name: 'Women\'s Chuck Taylor All-Star Lift',
        alt: 'Lifted Black Converse with White Sole',
        img: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw3d987bc4/images/a_107/560845C_A_107X1.jpg?sw=964',
        img2: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw3476d3b3/images/c_107/560845C_C_107X1.jpg?sw=2000',
        img3: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwdc85ed1f/images/e_107/560845C_E_107X1.jpg?sw=2000',
        img4: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwaeaaf20a/images/g_107/560845C_G_107X1.jpg?sw=2000',
        price: '75',
        desc: 'Inspired by the iconic looks of \'90s girl bands, these platform Chucks are sure to turn heads. Canvas can be as refined or edgy as you\'d like, while a double-stacked sole takes you higher. The elevated footbed looks good. It also adds an extra layer of comfort complete with EVA cushioning.',
        detail: ['Recycled poly-canvas', 'OrthoLite insole', 'EVA Cushioning', 'Elevated platform for added height', 'Platform canvas high top sneakers',]
      },
      {
        id: 'price_1MB4ThKFRYyirzJ3DJYxegrm',
        title: 'sneakers',
        name: 'Women\'s Swift Run Casual Sneakers',
        alt: 'Original Swift Running Shoe',
        img: 'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/22191839_fpx.tif?op_sharpen=1&wid=1200&fit=fit,1&$filtersm$&fmt=webp',
        img2: 'https://slimages.macysassets.com/is/image/MCY/products/5/optimized/22191835_fpx.tif?op_sharpen=1&wid=1200&fit=fit,1&$filtersm$&fmt=webp',
        img3: 'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/22191840_fpx.tif?op_sharpen=1&wid=1200&fit=fit,1&$filtersm$&fmt=webp',
        img4: 'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/22191838_fpx.tif?op_sharpen=1&wid=1200&fit=fit,1&$filtersm$&fmt=webp',
        price: '89',
        desc: 'Smooth and lightweight, the adidas women\'s swift run casual sneakers deliver plush comfort and an easygoing design for versatility and style.',
        detail: ['Style number - EG9492', 'Women\'s athletic footwear from Finish Line', 'Knit textile and synthetic upper for ventilation and comfort', 'EVA foam midsole cushioning', 'Runs large - size down half size for best fit',]
      },
      {
        id: 'price_1MB4T1KFRYyirzJ3s8f2FQBy',
        title: 'sneakers',
        name: 'Nike Infinity React 3',
        alt: 'Women\'s Road Running Shoes',
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5405dc1e-b72e-4614-90e7-1662b983f912/infinity-react-3-womens-road-running-shoes-XpNmlR.png',
        img2: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/56622c0b-67f4-43f1-a9be-b8cb3fad14a5/infinity-react-3-womens-road-running-shoes-XpNmlR.png',
        img3: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/75bd0233-07f0-4eeb-9df7-7f1b1fb44dde/infinity-react-3-womens-road-running-shoes-XpNmlR.png',
        img4: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dac6d962-31ed-4e2f-b176-9e72b1c36d82/infinity-react-3-womens-road-running-shoes-XpNmlR.png',
        price: '160',
        desc: 'Still 1 of our most tested shoes, the Nike Infinity React 3 has soft and supportive cushioning. Its soft, stable feel with a smooth ride will carry you through routes, long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning to the collar for a soft feel. Keep running, we\'ve got you.',
        detail: ['STAY RUNNING WITH SOFT, STABLE SUPPORT.', 'Nike React technology is a lightweight, durable foam that delivers a smooth, responsive ride. Shaped like a rocker, the foam provides support for the 3 phases of a runner\'s stride.', 'Soft padding along the collar provides a cushioned touch point.', 'A hybrid tongue combines a sock-like feel with the adjustability of a traditional design.', 'A Secure, Breathable Flex',]
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
        img2: 'https://cdni.llbean.net/is/image/wim/271139_0_45?hei=1092&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2',
        img3: 'https://cdni.llbean.net/is/image/wim/271139_0_47?hei=1092&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2',
        img4: 'https://cdni.llbean.net/is/image/wim/271139_33018_41?hei=1092&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2',
        price: '149',
        desc: 'Customers tell us this is the coat they reach for on every cold day to run errands, walk the dog and more. The highly water-resistant nylon shell withstands wet conditions and wind gusts, ensuring your comfort in winter weather. It also exceeds our rigorous abrasion and strength tests, so you can count on it to hold up to daily wear.',
        detail: ['Center back length: Regular Med: 34¾"; Petite Med: 32¾"; Plus 2X: 35½".', 'Wind and water-resistant 100% nylon shell.', 'Princess seams give shaping for a flattering fit.', 'Soft high-pile 100% polyester fleece-lined upper body and hood.', 'Handwarmer pockets and an adjustable hood for extra coverage',]
      },
      {
        id: 'price_1LvS9ZKFRYyirzJ3OAHakPOO',
        name: 'Womens Jackets Long-sleeve Printed Fringed Jacket',
        alt: 'Womens Jacket Model',
        img: 'https://m.media-amazon.com/images/I/61Z2QO-6TBL._AC_UL1500_.jpg',   
        img2: 'https://m.media-amazon.com/images/I/71x5n87sStL._AC_UL1500_.jpg',
        img3: 'https://m.media-amazon.com/images/I/71CssBzzDAL._AC_UL1500_.jpg',
        img4: 'https://m.media-amazon.com/images/I/61jwsFiMb-L._AC_UL1500_.jpg',
        price: '44.99',
        desc: 'A Faux Suede Fringe Jacket like this is essential in every glamour woman\'s wardrobe.It\'s versatile, stylish, casual, simple, and timeless. A variety of functional color styles can be selected.Can be completely matched with sneakers, cloth shoes, boots, high heels and more. Pair with jeans and wide-leg trousers for a slow, stylish and casual cool style.',
        detail: ['Women\'s Suede Faux Leather Jackets made of 90% Polyester 10% Elastane.', 'Fully Fringe Trimming, Tassel Back, Cropped Short Length, Open Front, No Closure,', 'Trendy caots showing your unique charm, add a sense of personality and style. You will love it when you receive .', 'No pockets.', '',]
      },
      {
        id: 'price_1LvSA9KFRYyirzJ3Bh4H3I9c',
        name: ' Women\'s Foxy Sherpa Jacket',
        alt: 'Womens Jacket',
        img: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W4313R_01660_b1_s1_a1_1_m89_750x.jpg?v=1662676081',
        img2: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W4313R_01660_b1_s1_a2_1_m89_1500x.jpg?v=1664403588',
        img3: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W4313R_01660_b1_s1_a4_1_m89_1500x.jpg?v=1664403588',
        img4: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W4313R_01660_b1_s1_a3_1_m89_1500x.jpg?v=1664403588',
        price: '198',
        desc: 'Easy come, easy go. Cut from cozy sherpa and equipped with a removable hood and zip pockets, our ultra-comfy Foxy Sherpa Jacket will get you to the studio every time. Features a front-zip closure, oversized silhouette and ribbed cuffs and hem.',
        detail: ['Removable hood & zippered pockets', 'Plush Sherpa (faux fur)', 'On-trend oversized fit with ribbed hem', 'Wear-tested by our in-house team for the perfect fit', 'Designed to work from studio to street',]
      },
      {
        id: 'price_1LvSAjKFRYyirzJ36qRYenNv',
        name: 'Women\'s Slip-On Blazer',
        alt: 'Womens Blazer',
        img: 'https://www.whitehouseblackmarket.com/Product_Images/570318145ext1_large.jpg?imgPolicy=productLarge',
        img2: 'https://www.whitehouseblackmarket.com/Product_Images/570318145ext2_large.jpg?imgPolicy=productLarge',
        img3: 'https://www.whitehouseblackmarket.com/Product_Images/570318145ext3_large.jpg?imgPolicy=productLarge',
        img4: '',
        price: '104',
        desc: 'Our work uniform has changed a lot in the last two-years, a more relaxed vibe has taken centerstage. Our slip-on blazer fits the current mood. It still has the classic collar but instead of buttons it has a self-belt so you can decide the silhouette you want. The fit is relaxed and comfortable. Pair with anything from your favorite work pants to jeans.',
        detail: ['Slip-On blazer', 'Relaxed fit', 'Collar, long-sleeves', 'Self-belted', '96% polyester, 4% spandex. Machine wash cold.',]
      },
      {
        id: 'price_1MB4S6KFRYyirzJ3YMLFubNj',
        name: 'Men\'s Winter Trench Overcoat',
        alt: 'Mens Leather Jacket',
        img: 'https://litb-cgis.rightinthebox.com/images/640x853/202011/ydly1604652840961.jpg?fmt=webp&v=1',
        img2: 'https://litb-cgis.rightinthebox.com/images/640x853/202011/ehdx1604652861066.jpg?fmt=webp&v=1',
        img3: 'https://litb-cgis.rightinthebox.com/images/640x853/202011/xjgt1604652843642.jpg?fmt=webp&v=1',
        img4: 'https://litb-cgis.rightinthebox.com/images/640x853/201911/jzcd1574156005503.jpg?fmt=webp&v=1',
        price: '50.50',
        desc: 'Rain or shine, this water-resistant trench is a staple for the lone wanderer, with lightweight organic cotton produced by Italian mill Emmetex, beloved for beautiful and sustainable fabrics.',
        detail: ['Outerwear Type: Trench Coat', 'Fabric: Cotton, Polyester', ' Style: Vintage, Basic', 'Sleeve Length: Long Sleeve', 'Occasion: Business, Casual, Daily',]
      },
      {
        id: 'price_1LvSBuKFRYyirzJ3ypNdwwz8',
        name: 'Men\'s Lightweight Bomber Jacket',
        alt: 'Mens Bomber Jacket Shell',
        img: 'https://ae01.alicdn.com/kf/S48cfa54081a548fd93359d38ab53927aU/Spring-Jacket-Men-Lightweight-Bomber-Jacket-Men-Fashion-Clothing-Baseball-Collared-Thin-Slim-Fit-Coat-For.jpg_Q90.jpg_.webp',
        img2: 'https://ae01.alicdn.com/kf/S5ebc51e6705b43b4b7f8b213268ce557q/Spring-Jacket-Men-Lightweight-Bomber-Jacket-Men-Fashion-Clothing-Baseball-Collared-Thin-Slim-Fit-Coat-For.jpg_Q90.jpg_.webp',
        img3: 'https://ae01.alicdn.com/kf/Sc8230c3a094c4b69a1b73a0b8be3240dR/Spring-Jacket-Men-Lightweight-Bomber-Jacket-Men-Fashion-Clothing-Baseball-Collared-Thin-Slim-Fit-Coat-For.jpg_Q90.jpg_.webp',
        img4: 'https://ae01.alicdn.com/kf/Sffbc5825bd68482e97f3563b534ac507Y.jpg?width=790&height=907&hash=1697',
        price: '33.99',
        desc: 'This men\'s jacket is built to endure cold, wind, and tough days on the job. Rugged without being rigid, it\'s made with durable cotton duck and is reinforced with Cordura® at wear points along the cuffs. This warm layer is lined with soft sherpa fleece through the body and hood, with warm quilted nylon through the sleeves.',
        detail: ['Two snap-button chest pockets; Two lower front pockets', 'Pleated bi-swing back for extra stretch across the shoulders', 'Interior: 100% Polyester boucle', 'Attached adjustable hood', '100% Polyester',]
      },
      {
        id: 'price_1LvSCSKFRYyirzJ3t7hf3Y3r',
        name: 'Men\'s Hip-Hop Style Fluffy Winter Coat',
        alt: 'Fluffy winter Jacket',
        img: 'https://cdn.shopify.com/s/files/1/0088/6377/6815/products/Winter-Coat-Solid-Color-Plush-Simple-Fluffy-Men-Jacket-Hip-hop-Style-Winter-Coat_47264229-222a-4ea0-ab13-252a2516c1b2_1024x1024@2x.jpg?v=1663142831',
        img2: 'https://cdn.shopify.com/s/files/1/0088/6377/6815/products/Winter-Coat-Solid-Color-Plush-Simple-Fluffy-Men-Jacket-Hip-hop-Style-Winter-Coat_00cfb976-a36d-4c4d-9d79-415fe27eafc6_1024x1024@2x.jpg?v=1663142818',
        img3: 'https://ae01.alicdn.com/kf/H5fbf1b15759147b0bffa7add23cfcff1R/Men-s-Coat-Zipper-Closure-Side-Pockets-Fleece-Double-Sided-Jacket-Velvet-Stand-Collar-Warm-Casual.jpg_Q90.jpg_.webp',
        img4: 'https://ae03.alicdn.com/kf/S0252a9f5573c47b3842b027aa716cc9bV.jpg',
        price: '149',
        desc: 'The coat is so thick and warm that you will feel warm and comfortable even in snowy day. And wearing it for outdoor you can enjoy what you are doing without being distracted by the coldness. You will look so eye-catching and trendy in this great coat which is a great choice for hippies, the young and street dancers because it is hip-hop style. Made of high quality cotton blend, this coat is soft and warm.',
        detail: ['Style: Hip-hop', 'Fit Type: Loose', 'Collar: Turn-down Collar', 'Season: Winter', 'Material: Polyester',]
      },
      {
        id: 'price_1MB4QkKFRYyirzJ3357YTzSp',
        name: 'Mayfair Quilted Bomber Jacket',
        alt: 'Mens Solid Color Jacket',
        img: 'https://n.nordstrommedia.com/id/sr3/cf0104fa-870c-4489-a4cd-76ad715c0be7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
        img2: 'https://n.nordstrommedia.com/id/sr3/9bf1a1c3-e2b1-449c-8127-4fc644d39289.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
        img3: 'https://n.nordstrommedia.com/id/sr3/a4badd35-4d0e-4f3f-99cf-16480215b3a8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
        img4: 'https://n.nordstrommedia.com/id/sr3/77c03a4e-4510-4c10-8e7a-c516988f4879.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
        price: '148',
        desc: 'Athlete Russell Wilson and his partners launched Good Man Brand with designs on making a difference in the world and bringing out the best in all men. The brand\'s motto is "Lead. Inspire. Live." Good Man Brand runs the gamut from sharp blazers to streamlined sneakers, and, for each item purchased, the company donates $3 to the Why Not You Foundation, which works to encourage and empower children.',
        detail: ['Quilted cotton construction defines a classic jacket in a versatile bomber cut.', 'True to size.', 'Ribbed collar, cuffs and hem', 'Front snap-welt pockets', 'Black Owned/Founded',]
      }
    ]
  },
  {
    id: 2,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 'price_1MB4K3KFRYyirzJ3AwdNMZax',
        name: 'God is a designer',
        alt: 'Black hat',
        img: 'https://bookstore.thefutur.com/wp-content/uploads/2019/09/GOD-Raised-Front.jpg',
        img2: 'https://bookstore.thefutur.com/wp-content/uploads/2019/09/GOD-Raised-Angle.jpg',
        img3: 'https://bookstore.thefutur.com/wp-content/uploads/2019/09/GOD-Back.jpg',
        img4: 'https://bookstore.thefutur.com/wp-content/uploads/2019/09/GOD-Back-Angle.jpg',
        price: '24.99',
        desc: 'The “God Is A Designer” is an Arkadia1981 x Futur limited edition snapback cap. It\’s a 6-panel cap with a wide flat brim, fitted with an adjustable snap on the back of the hat, which makes it one size fits all. Woven Arkadia1981 & Futur sewn in back center with custom blue taping inside.',
        detail: ['Sleek fit', 'Custom blue taping in interior', '6-pannel cap', 'Classic Raised Embroidery', 'Weight:	8 oz',]
      },
      {
        id: 'price_1MB4KiKFRYyirzJ3YVyYMMf6',
        name: 'AMI Paris',
        alt: 'designer hat',
        img: 'https://cdn-images.farfetch-contents.com/17/95/96/96/17959696_38954944_1000.jpg',
        img2: 'https://cdn-images.farfetch-contents.com/17/95/96/96/17959696_38954936_1000.jpg',
        img3: '',
        img4: '',
        price: '145',
        desc: 'Embodying AMI Paris\' relaxed approach to style, the instantly recognisable Ami de Coeur monogram details an array of the Parisian label\'s designs. Crafted from denim, the motif finds a home on this cap.',
        detail: ['faded black', 'signature Ami de Coeur monogram motif', 'embroidered logo', 'curved peak', 'Fabric 100%',]
      },
      {
        id:'price_1MB4LMKFRYyirzJ35Aixwywj',
        name: 'Montauk Surf Shop Dad Hat',
        alt: 'Dad Hat',
        img: 'https://images.urbndata.com/is/image/UrbanOutfitters/78161403_020_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720',
        img2: 'https://images.urbndata.com/is/image/UrbanOutfitters/78161403_020_f?$redesign-zoom-5x$',
        img3: 'https://images.urbndata.com/is/image/UrbanOutfitters/78161403_020_g?$redesign-zoom-5x$',
        img4: 'https://images.urbndata.com/is/image/UrbanOutfitters/78161403_020_e?$redesign-zoom-5x$',
        price: '19.99',
        desc: 'Paneled cotton dad hat with embroidery at the front. Adjustable size and finished with a curved brim.',
        detail: ['Cotton', 'Spot clean', 'retro', 'washed out', 'imported',]
      },
      {
        id: 'price_1MB4M2KFRYyirzJ3d2phPcgi',
        name: 'EDC Vybration Snapback',
        alt: 'Retro black and pick hat',
        img: 'https://cdn.shopify.com/s/files/1/1501/7282/products/Insomniacholdings627ac2e776e3a1627ac2e77707f.23294810627ac2e77707f_2048x2048.jpg?v=1652217508',
        img2: 'https://cdn.shopify.com/s/files/1/1501/7282/products/Insomniacholdings627ac2e7949990627ac2e794b62.38294973627ac2e794b62_2048x2048.jpg?v=1652217510',
        img3: 'https://cdn.shopify.com/s/files/1/1501/7282/products/Insomniacholdings627ac2e7aad9c6627ac2e7aae51.28153010627ac2e7aae51_2048x2048.jpg?v=1652217511',
        img4: '',
        price: '34.99',
        desc: 'Electric Daisy Carnival Festival 100% Cotton snapback hat. Embroidered logo on front.',
        detail: ['Adjustable snaps for seamless fit.', 'Vivid design for bold look', 'imported', 'Cotton/Polyester blend', 'Embroidered stiching for 3d feel.',]
      },
      {
        id: 'price_1MB4MpKFRYyirzJ3EZzVNB6m',
        name: 'Liquify Casual Bucket Hat',
        alt: 'Bucket Hat',
        img: 'https://www.hats.com/media/catalog/product/K/3/K3588-Kangol-LIQUIFY-CASUAL-Bucket-RED-DEEP-SPRINGS-1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img2: 'https://www.hats.com/media/catalog/product/K/3/K3588-Kangol-LIQUIFY-CASUAL-Bucket-RED-DEEP-SPRINGS-5.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img3: 'https://www.hats.com/media/catalog/product/K/3/K3588-Kangol-LIQUIFY-CASUAL-Bucket-RED-DEEP-SPRINGS-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img4: '',
        price: '70',
        desc: 'The Liquify Casual is a 2 color knit jacquard in high contrast colors to create a wavy liquid effect. It is finished with our K-roo logo on the front and will definitely be a street fashion staple for this season.',
        detail: ['High quality fabrication & design', 'Headband: 100% Nylon', 'Imported', '2 1/4" BRIM', 'Bucket Hat',]
      },
      {
        id: 'price_1MB4NKKFRYyirzJ3oO7QR8Se',
        name: 'Stellar 20X Cowboy Western Hat',
        alt: 'Expensive Cowboy Hat',
        img: 'https://www.hats.com/media/catalog/product/W/1/W1520A_BK001_MAIN.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img2: 'https://www.hats.com/media/catalog/product/W/1/W1520A_BK001_AV1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img3: 'https://www.hats.com/media/catalog/product/W/1/W1520A_BK001_AV2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img4: 'https://www.hats.com/media/catalog/product/W/1/W1520A_BK001_AV3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        price: '550',
        desc: 'The Bailey Western Stellar 20X is a fur felt hat with a 4.5" rodeo crown and a gorgeous embellished buckle set in silver and gold on a self felt band. Crafted from a blend of beaver and rabbit fur, the Stellar is fully lined with a satin lining and features a leather sweatband. Proudly made in the U.S.A. with Globally Sourced Materials. The Stellar 20X is a round oval Rodeo crown.',
        detail: ['50% Rabbit Fur', '50% Beaver Fur', 'Crown	Rodeo', 'Crown Height: 4 1/2"', 'Style:	Cowboy Western',]
      },
      {
        id:'price_1MB4NnKFRYyirzJ3bD3a66D9',
        name: 'Denim Flexfit Army Cap',
        alt: 'Army Cap',
        img: 'https://www.hats.com/media/catalog/product/5/0/5067bc-kangol-denim-flexfit-army-cap-black-3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img2: 'https://www.hats.com/media/catalog/product/5/0/5067bc-kangol-denim-flexfit-army-cap-black-4.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img3: 'https://www.hats.com/media/catalog/product/5/0/5067bc-kangol-denim-flexfit-army-cap-black-5.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img4: 'https://www.hats.com/media/catalog/product/5/0/5067bc-kangol-denim-flexfit-army-cap-black-1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        price: '40',
        desc: 'Get compliments when you wear this military-style Denim Flexfit Army Cap. It features a distinctive denim material with a 2 3/8" peak brim, a flat crown, and a 3 1/2" crown height. It’s the perfect functional and fashionable hat for that casual look during any season. Add this Kangol army cap to your wardrobe to create a cool and classic vibe with any street-casual outfit, any day. ',
        detail: ['Style:	Army Cap', 'Material:	Cotton-Spandex Blend', 'Unlined', 'Fabric: Denim', 'Imported',]
      },
      {
        id: 'price_1MB4OIKFRYyirzJ3labU0yW3',
        name: 'Go Banana\'s Trucker Hat',
        alt: 'Monkey Truckers Hat',
        img: 'https://www.hats.com/media/catalog/product/1/0/101-0107-goorin-go-bananas-trucker-black-1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img2: 'https://www.hats.com/media/catalog/product/1/0/101-0107-goorin-go-bananas-trucker-black-2_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img3: 'https://www.hats.com/media/catalog/product/1/0/101-0107-goorin-go-bananas-trucker-black-3_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img4: 'https://www.hats.com/media/catalog/product/1/0/101-0107-goorin-go-bananas-trucker-black-4_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        price: '60',
        desc: 'That\'s bananas! This faux fur trucker hat from Goorin Bros. will have you goin\'bananas. It features a novelty patch, and a snapback closure that allows for the perfect fit. This new cap won\'t last long.',
        detail: ['Style:	Baseball & Sport Caps', 'Material:	57% Poly/43% Cotton', 'Air vents for cooling', 'Embroidered stitching for lasting quality.', 'Imported from China'],
      },
      {
        id: 'price_1MB4OoKFRYyirzJ3a67G96sq',
        name: 'Faux Leather Cap',
        alt: 'designer hat',
        img: 'https://www.hats.com/media/catalog/product/K/5/K5313-Kangol-FAUX-LEATHER-CAP-BLACK-1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img2: 'https://www.hats.com/media/catalog/product/K/5/K5313-Kangol-FAUX-LEATHER-CAP-BLACK-3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img3: 'https://www.hats.com/media/catalog/product/K/5/K5313-Kangol-FAUX-LEATHER-CAP-BLACK-4.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img4: 'https://www.hats.com/media/catalog/product/K/5/K5313-Kangol-FAUX-LEATHER-CAP-BLACK-5.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        price: '60',
        desc: 'The Faux Leather Cap is a traditional pub cap crafted from a luxe faux leather. The retro inspired cap is modernized with an added loop on the side to hold your essential writing tool and a hidden pocket inside for whatever you may need.',
        detail: ['Style:	Ivy Caps & Flat Caps', 'Lined', 'Imported', 'Brim:	3"', 'Polyester',]
      },
      {
        id: 'price_1MB4PeKFRYyirzJ3b5wpw9p0',
        name: 'Mens Lion & Crown Hat',
        alt: 'Designer Lion Hat',
        img: 'https://img.ltwebstatic.com/images3_pi/2022/08/09/1660028108b4bbf32a8cd00fa3ae37695648763d22_thumbnail_900x.webp',
        img2: 'https://img.ltwebstatic.com/images3_pi/2022/08/09/1660028110e1e33cfd0b925976ec6d7e76ce6af972_thumbnail_900x.webp',
        img3: 'https://img.ltwebstatic.com/images3_pi/2022/08/09/16600281143b5d161fa6d92600d6ea5fc4a32adb0c_thumbnail_900x.webp',
        img4: 'https://img.ltwebstatic.com/images3_pi/2022/08/09/1660028118a69911d403d8011f103a7c296b827b58_thumbnail_900x.webp',
        price: '17.99',
        desc: 'Designer hip-hop hat with slick design and pattern to atract attention in all the right ways.',
        detail: ['Style:	Hip-Hop Cap', 'High qualtiy embroidering for lasting quality.', 'Vivid red', 'Imported', '60% Polyester, 40% Polyamide',]
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
        title: 'Shirts',
        name: 'AE Graphic Tee',
        alt: 'White Graphic shirt',
        img: 'https://s7d2.scene7.com/is/image/aeo/0181_2187_100_of?$pdp-m-opt$&fmt=webp',
        img2: 'https://s7d2.scene7.com/is/image/aeo/0181_2187_100_ob?$pdp-m-opt$&fmt=webp',
        img3: 'https://s7d2.scene7.com/is/image/aeo/0181_2187_100_f?$pdp-m-opt$&fmt=webp',
        img4: 'https://s7d2.scene7.com/is/image/aeo/0181_2187_100_b?$pdp-m-opt$&fmt=webp',
        price: '14.99',
        desc: '',
        detail: ['Super soft cotton jersey', 'Chest graphics', 'Straight hem', '100% Cotton', 'Standard fit & length'],
      },
      {
        id: 'price_1LvTpNKFRYyirzJ33Lf8RniP',
        name: 'Men\'s Random Allover Shirt',
        alt: 'Printed Button-Up',
        img: 'https://img.ltwebstatic.com/images3_pi/2022/04/24/165076834615aa93b86a959f2d85ef6b3ba8e53f62_thumbnail_900x.webp',
        img2: 'https://img.ltwebstatic.com/images3_pi/2022/04/24/165076834851cafbb7a54dcd43dddba85623b7b681_thumbnail_900x.webp',
        img3: 'https://img.ltwebstatic.com/images3_pi/2022/04/24/1650768350620c8475dca1936e2c3ed314539161c6_thumbnail_900x.webp',
        img4: 'https://img.ltwebstatic.com/images3_pi/2022/04/24/1650768352d51017ffd5f2255fd16d5bb422506951_thumbnail_900x.webp',
        price: '12',
        desc: '',
        detail: ['Casual', '100% Polyester', 'Collar', 'Button Front', 'Black',],
      },
      {
        id: 'price_1LvTq3KFRYyirzJ3ABcOFBbR',
        name: 'Men\'s Fashion Design Long Sleeve',
        alt: 'White Long Sleeve Shirt',
        img: 'https://i5.walmartimages.com/asr/eaaba20d-1327-4338-a4d5-8858c01d5146.c569110490e2abc067a864cd8a6d8a80.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        img2: 'https://i5.walmartimages.com/asr/89668cda-b8ab-4e21-a444-869d6fbf823b.a648f72c123d45121effafb5fb6d75b2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        img3: '',
        img4: '',
        price: '15',
        desc: '',
        detail: ['', '', '', '', '',],
      },
      {
        id: 'price_1LvTqeKFRYyirzJ3X9O7i0RO',
        name: 'Men\'s NFL Cincinnati, Joe Mixon Legend Jersey',
        alt: 'Black and Striped Jersey',
        img: 'https://fanatics.frgimages.com/cincinnati-bengals/mens-nike-joe-mixon-black-cincinnati-bengals-legend-jersey_pi4059000_altimages_ff_4059559-367f39bca1048a771872alt2_full.jpg?_hv=2&w=900',
        img2: 'https://fanatics.frgimages.com/cincinnati-bengals/mens-nike-joe-mixon-black-cincinnati-bengals-legend-jersey_pi4059000_altimages_ff_4059559-367f39bca1048a771872alt3_full.jpg?_hv=2&w=900',
        img3: '',
        img4: '',
        price: '99',
        desc: 'Rep the on-field look of your favorite Cincinnati Bengals player with this Joe Mixon Game jersey from Nike. Its heat-sealed name, numbers and team details provide a kickoff-ready aesthetic while also offering a comfortable, lightweight feel. Designed for everyday movement, this jersey has a versatile tailored fit and features mesh side panels for added ventilation as you celebrate every big play by the Cincinnati Bengals this season.',
        detail: ['Tagless Collar', 'Officially licensed', 'Material: 100% Polyester Tricot', 'Mesh side panels for extra breathability', 'Heat-sealed name, numbers and team details',]
      },
      {
        id: 'price_1LvTrEKFRYyirzJ3Vc8xfuJV',
        name: 'Women\'s Chargers NFL Nike Jersey',
        alt: 'Chargers NFL Home Jersey',
        img: 'https://fanatics.frgimages.com/los-angeles-chargers/womens-nike-justin-herbert-powder-blue-los-angeles-chargers-game-jersey_pi3911000_altimages_ff_3911893-6d26fc46bc56f4fdb2bcalt2_full.jpg?_hv=2&w=900',
        img2: 'https://fanatics.frgimages.com/los-angeles-chargers/womens-nike-justin-herbert-powder-blue-los-angeles-chargers-game-jersey_pi3911000_altimages_ff_3911893-6d26fc46bc56f4fdb2bcalt3_full.jpg?_hv=2&w=900',
        img3: '',
        img4: '',
        price: '129',
        desc: '',
        detail: ['', '', '', '', '',]
      },
      {
        id: 'price_1LvTs4KFRYyirzJ30UtLkz2v',
        name: 'Women\'s Pro Choice Tee',
        alt: 'Feminism Shirt',
        img: 'https://i.ebayimg.com/images/g/pMIAAOSw32dixu~~/s-l300.jpg',
        img2: 'https://i.ebayimg.com/images/g/uukAAOSw7lRixvAS/s-l300.jpg',
        img3: '',
        img4: '',
        price: '17.99',
        desc: '',
        detail: ['', '', '', '', '',]
      },
      {
        id: 'price_1LvTtEKFRYyirzJ3zr45II15',
        name: 'Women\'s Classic Denim',
        alt: 'Classic Long Sleeve Denim',
        img: 'https://i5.walmartimages.com/asr/b6caa34c-ab70-471e-a5ec-280355f786dc.41023d3576fab5ecbc91fb32056b8e00.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        img2: 'https://i5.walmartimages.com/asr/ce4de04c-5ae1-4aae-9f42-009b553c7fc8.d9942e1476445df8f57ff11515091a13.jpeg',
        img3: '',
        img4: '',
        price: '36',
        desc: '',
        detail: ['', '', '', '', '',]
      },
      {
        id: 'price_1LvTtqKFRYyirzJ3kr5VAjtp',
        name: 'Women\'s Evil Natural Tee',
        alt: 'Creme Melodie T-Shirt',
        img: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Melodie-Evil-Natural-T-Shirt-_332986-front-US.jpg',
        img2: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Melodie-Evil-Natural-T-Shirt-_332986-back-US.jpg',
        img3: '',
        img4: '',
        price: '31.95',
        desc: '',
        detail: ['', '', '', '', '',]
      }
    ]
  }
]

export const MENS_SHOP_LIST = [
      {
        id:'price_1MB4NnKFRYyirzJ3bD3a66D9',
        name: 'Denim Flexfit Army Cap',
        alt: 'Army Cap',
        img: 'https://www.hats.com/media/catalog/product/5/0/5067bc-kangol-denim-flexfit-army-cap-black-3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img2: 'https://www.hats.com/media/catalog/product/5/0/5067bc-kangol-denim-flexfit-army-cap-black-4.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img3: 'https://www.hats.com/media/catalog/product/5/0/5067bc-kangol-denim-flexfit-army-cap-black-5.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img4: 'https://www.hats.com/media/catalog/product/5/0/5067bc-kangol-denim-flexfit-army-cap-black-1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        price: '40',
        desc: 'Get compliments when you wear this military-style Denim Flexfit Army Cap. It features a distinctive denim material with a 2 3/8" peak brim, a flat crown, and a 3 1/2" crown height. It’s the perfect functional and fashionable hat for that casual look during any season. Add this Kangol army cap to your wardrobe to create a cool and classic vibe with any street-casual outfit, any day. ',
        detail: ['Style:	Army Cap', 'Material:	Cotton-Spandex Blend', 'Unlined', 'Fabric: Denim', 'Imported',]
      },
      {
        id: 'price_1MB4OIKFRYyirzJ3labU0yW3',
        name: 'Go Banana\'s Trucker Hat',
        alt: 'Monkey Truckers Hat',
        img: 'https://www.hats.com/media/catalog/product/1/0/101-0107-goorin-go-bananas-trucker-black-1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img2: 'https://www.hats.com/media/catalog/product/1/0/101-0107-goorin-go-bananas-trucker-black-2_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img3: 'https://www.hats.com/media/catalog/product/1/0/101-0107-goorin-go-bananas-trucker-black-3_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img4: 'https://www.hats.com/media/catalog/product/1/0/101-0107-goorin-go-bananas-trucker-black-4_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        price: '60',
        desc: 'That\'s bananas! This faux fur trucker hat from Goorin Bros. will have you goin\'bananas. It features a novelty patch, and a snapback closure that allows for the perfect fit. This new cap won\'t last long.',
        detail: ['Style:	Baseball & Sport Caps', 'Material:	57% Poly/43% Cotton', 'Air vents for cooling', 'Embroidered stitching for lasting quality.', 'Imported from China'],
      },
      {
        id: 'price_1MB4OoKFRYyirzJ3a67G96sq',
        name: 'Faux Leather Cap',
        alt: 'designer hat',
        img: 'https://www.hats.com/media/catalog/product/K/5/K5313-Kangol-FAUX-LEATHER-CAP-BLACK-1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img2: 'https://www.hats.com/media/catalog/product/K/5/K5313-Kangol-FAUX-LEATHER-CAP-BLACK-3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img3: 'https://www.hats.com/media/catalog/product/K/5/K5313-Kangol-FAUX-LEATHER-CAP-BLACK-4.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        img4: 'https://www.hats.com/media/catalog/product/K/5/K5313-Kangol-FAUX-LEATHER-CAP-BLACK-5.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
        price: '60',
        desc: 'The Faux Leather Cap is a traditional pub cap crafted from a luxe faux leather. The retro inspired cap is modernized with an added loop on the side to hold your essential writing tool and a hidden pocket inside for whatever you may need.',
        detail: ['Style:	Ivy Caps & Flat Caps', 'Lined', 'Imported', 'Brim:	3"', 'Polyester',]
      },
      {
        id: 'price_1MB4PeKFRYyirzJ3b5wpw9p0',
        name: 'Mens Lion & Crown Hat',
        alt: 'Designer Lion Hat',
        img: 'https://img.ltwebstatic.com/images3_pi/2022/08/09/1660028108b4bbf32a8cd00fa3ae37695648763d22_thumbnail_900x.webp',
        img2: 'https://img.ltwebstatic.com/images3_pi/2022/08/09/1660028110e1e33cfd0b925976ec6d7e76ce6af972_thumbnail_900x.webp',
        img3: 'https://img.ltwebstatic.com/images3_pi/2022/08/09/16600281143b5d161fa6d92600d6ea5fc4a32adb0c_thumbnail_900x.webp',
        img4: 'https://img.ltwebstatic.com/images3_pi/2022/08/09/1660028118a69911d403d8011f103a7c296b827b58_thumbnail_900x.webp',
        price: '17.99',
        desc: 'Designer hip-hop hat with slick design and pattern to atract attention in all the right ways.',
        detail: ['Style:	Hip-Hop Cap', 'High qualtiy embroidering for lasting quality.', 'Vivid red', 'Imported', '60% Polyester, 40% Polyamide',]
      },
      {
        // id: uuid(),
        id: 'price_1Lv4dkKFRYyirzJ3scXKuUNb',
        title: 'sneakers',
        name: 'Mens Nike Dunk High Retro',
        alt: 'Nike Shoe',
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a0374c16-982d-44a8-b791-18d7b47fab9f/dunk-high-retro-mens-shoe-dTVTCk.png',
        img2: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0916b11d-470b-4fb9-90ea-f7a703b48749/dunk-high-retro-mens-shoe-dTVTCk.png',
        img3: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2a01fe-2d3f-4c84-8ca6-b3fb15e6e886/dunk-high-retro-mens-shoe-dTVTCk.png',
        img4: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/329146ed-226c-47d0-bc20-88b380598f46/dunk-high-retro-mens-shoe-dTVTCk.png',
        price: '125',
        desc: 'The Nike Dunk High arrived in 1985 and was worn on both college and NBA courts while Michael Jordan was rewriting history in his similarly looking Air Jordan 1. The Nike Dunk High\'s reputation as a sneaker that can be easily adjusted to match specific colors delivered the Dunk to a new generation in 1998, when customization, graphics, and experimentation with fabrics became more prevalent.',
        detail: ['Foam insole', 'Perforations on toe', 'The foam midsole offers lightweight, responsive cushioning.', 'The bold color blocking returns to the original university colors released in 1985, letting you choose who reigned supreme and rep your team.', 'The rubber sole with classic hoops pivot circle adds durability, tractions and heritage style.']
      },
      {
        // id: uuid(),
        id: 'price_1Lv4fDKFRYyirzJ3zo5SjNBm',
        title: 'sneakers',
        name: 'Air Jordan 6 Retro Low',
        alt: 'Air Jordan Shoe',
        img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/1f1b7246-1dcd-43de-af62-995320e977ef/air-jordan-6-retro-low-mens-shoes-MPwhfh.png',
        img2: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a102e607-0d73-45ed-865d-d9ebb9a82ef4/air-jordan-6-retro-low-mens-shoes-MPwhfh.png',
        img3: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/72cecc94-7710-4251-beb1-cb88f21d7f2a/air-jordan-6-retro-low-mens-shoes-MPwhfh.png',
        img4: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bd5328dd-45b8-46b0-ba12-ff4473819a36/air-jordan-6-retro-low-mens-shoes-MPwhfh.png',
        price: '200',
        desc: 'Released in \'91 and reissued throughout the early 2000s, the Air Jordan VI\'s first low-cut form didn\'t arrive until 2002. Twenty years later, we\'re bringing you a fresh, yet familiar new pair of kicks for spring.',
        detail: ['Air-Sole unit and foam midsole cushion every step.', 'Toggle lacing lets you easily adjust your fit.', 'Full-grain leather and polyster upper', 'Shown: Spruce Aura/Spruce Aura/Metallic Gold', 'Full-grain leather and polyster upper',]
      },
      {
        id: 'price_1LvS4lKFRYyirzJ3nai5kJRN',
        title: 'sneakers',
        name: 'Vans: Era Core Classics',
        alt: 'Vans Shoe',
        img: 'https://m.media-amazon.com/images/I/71b8Cc6XRfL._AC_SR1840,1472__FMwebp_.jpg',
        img2: 'https://m.media-amazon.com/images/I/81iW6Cf4YXL._AC_SR1840,1472__FMwebp_.jpg',
        img3: 'https://m.media-amazon.com/images/I/714QMAXFTDL._AC_SR1840,1472__FMwebp_.jpg',
        img4: 'https://m.media-amazon.com/images/I/71pXaOz882L._AC_SR1840,1472__FMwebp_.jpg',
        price:'54.95',
        desc: 'Vans Authentic Black has long been a Vans top seller for good reasons. Originally unveiled as the Vans #44 Deck Shoes in 1966, Anaheim’s finest export has gone from strength to strength on a journey to its current form. What form is that? A simple low top, lace-up profile, metal eyelets, rubber waffle outsoles, and a sleek black finish that never goes out of style. Vans Authentic black shoes are Vans heritage style at its most engrossing. Vans Authentic black shoes are what Vans “Off The Wall” approach is all about. Vans Authentic black shoes are sneaker fashion as it should be.',
        detail: ['Double stitch vamp detailing.', 'Die-cut EVA insert.', 'Cotton drill lining and a textile insole.', 'Uppers of durable canvas in a low-top silhouette with a classic lace-up style', 'From your board to chill sessions, keep it classic with the Vans® Era™ Core Classics skate shoes!',]
      },
      {
        id: 'price_1LvS5pKFRYyirzJ3DPIitZ5j',
        title: 'sneakers',
        name: 'Men\'s Leather Oxford Dress Shoes',
        alt: 'Mens Dress Shoe',
        img: 'https://cdnimg.brunomarcshoes.com/brunomarcshoes/product/product/SBOX222M/DARK%20BROWN/1.jpg',
        img2: 'https://cdnimg.brunomarcshoes.com/brunomarcshoes/product/product/SBOX222M/DARK%20BROWN/2.jpg',
        img3: 'https://cdnimg.brunomarcshoes.com/brunomarcshoes/product/product/SBOX222M/DARK%20BROWN/3.jpg',
        img4: 'https://cdnimg.brunomarcshoes.com/brunomarcshoes/product/product/SBOX222M/DARK%20BROWN/4.jpg',
        price: '42.99',
        desc: 'Showcase your style in these Bruno Marc men\'s oxford dress shoes. Crafted with 100% vegan leather, rubber sole, and plain toe, for a classic style. A foam insole is soft and shock absorbent for all-day action, while laces deliver a snug fit. Suitable for the office or other formal occasions.',
        detail: ['100% vegan leather', 'Rubber sole', 'Exquisite new vegan leather with plain toe design delivers a classic style.', 'Covered with PU leather, the foam insole is soft and shock-absorbent.', 'These men\'s oxford dress shoes with rubber outsole provide stability and flexibility',]
      },
    // ]
  // },
  // {
  //   routeName: 'jackets',
  //   items: [
    {
      id: 'price_1MB4S6KFRYyirzJ3YMLFubNj',
      name: 'Men\'s Winter Trench Overcoat',
      alt: 'Mens Leather Jacket',
      img: 'https://litb-cgis.rightinthebox.com/images/640x853/202011/ydly1604652840961.jpg?fmt=webp&v=1',
      img2: 'https://litb-cgis.rightinthebox.com/images/640x853/202011/ehdx1604652861066.jpg?fmt=webp&v=1',
      img3: 'https://litb-cgis.rightinthebox.com/images/640x853/202011/xjgt1604652843642.jpg?fmt=webp&v=1',
      img4: 'https://litb-cgis.rightinthebox.com/images/640x853/201911/jzcd1574156005503.jpg?fmt=webp&v=1',
      price: '50.50',
      desc: 'Rain or shine, this water-resistant trench is a staple for the lone wanderer, with lightweight organic cotton produced by Italian mill Emmetex, beloved for beautiful and sustainable fabrics.',
      detail: ['Outerwear Type: Trench Coat', 'Fabric: Cotton, Polyester', ' Style: Vintage, Basic', 'Sleeve Length: Long Sleeve', 'Occasion: Business, Casual, Daily',]
    },
    {
      id: 'price_1LvSBuKFRYyirzJ3ypNdwwz8',
      name: 'Men\'s Lightweight Bomber Jacket',
      alt: 'Mens Bomber Jacket Shell',
      img: 'https://ae01.alicdn.com/kf/S48cfa54081a548fd93359d38ab53927aU/Spring-Jacket-Men-Lightweight-Bomber-Jacket-Men-Fashion-Clothing-Baseball-Collared-Thin-Slim-Fit-Coat-For.jpg_Q90.jpg_.webp',
      img2: 'https://ae01.alicdn.com/kf/S5ebc51e6705b43b4b7f8b213268ce557q/Spring-Jacket-Men-Lightweight-Bomber-Jacket-Men-Fashion-Clothing-Baseball-Collared-Thin-Slim-Fit-Coat-For.jpg_Q90.jpg_.webp',
      img3: 'https://ae01.alicdn.com/kf/Sc8230c3a094c4b69a1b73a0b8be3240dR/Spring-Jacket-Men-Lightweight-Bomber-Jacket-Men-Fashion-Clothing-Baseball-Collared-Thin-Slim-Fit-Coat-For.jpg_Q90.jpg_.webp',
      img4: 'https://ae01.alicdn.com/kf/Sffbc5825bd68482e97f3563b534ac507Y.jpg?width=790&height=907&hash=1697',
      price: '33.99',
      desc: 'This men\'s jacket is built to endure cold, wind, and tough days on the job. Rugged without being rigid, it\'s made with durable cotton duck and is reinforced with Cordura® at wear points along the cuffs. This warm layer is lined with soft sherpa fleece through the body and hood, with warm quilted nylon through the sleeves.',
      detail: ['Two snap-button chest pockets; Two lower front pockets', 'Pleated bi-swing back for extra stretch across the shoulders', 'Interior: 100% Polyester boucle', 'Attached adjustable hood', '100% Polyester',]
    },
    {
      id: 'price_1LvSCSKFRYyirzJ3t7hf3Y3r',
      name: 'Men\'s Hip-Hop Style Fluffy Winter Coat',
      alt: 'Fluffy winter Jacket',
      img: 'https://cdn.shopify.com/s/files/1/0088/6377/6815/products/Winter-Coat-Solid-Color-Plush-Simple-Fluffy-Men-Jacket-Hip-hop-Style-Winter-Coat_47264229-222a-4ea0-ab13-252a2516c1b2_1024x1024@2x.jpg?v=1663142831',
      img2: 'https://cdn.shopify.com/s/files/1/0088/6377/6815/products/Winter-Coat-Solid-Color-Plush-Simple-Fluffy-Men-Jacket-Hip-hop-Style-Winter-Coat_00cfb976-a36d-4c4d-9d79-415fe27eafc6_1024x1024@2x.jpg?v=1663142818',
      img3: 'https://ae01.alicdn.com/kf/H5fbf1b15759147b0bffa7add23cfcff1R/Men-s-Coat-Zipper-Closure-Side-Pockets-Fleece-Double-Sided-Jacket-Velvet-Stand-Collar-Warm-Casual.jpg_Q90.jpg_.webp',
      img4: 'https://ae03.alicdn.com/kf/S0252a9f5573c47b3842b027aa716cc9bV.jpg',
      price: '149',
      desc: 'The coat is so thick and warm that you will feel warm and comfortable even in snowy day. And wearing it for outdoor you can enjoy what you are doing without being distracted by the coldness. You will look so eye-catching and trendy in this great coat which is a great choice for hippies, the young and street dancers because it is hip-hop style. Made of high quality cotton blend, this coat is soft and warm.',
      detail: ['Style: Hip-hop', 'Fit Type: Loose', 'Collar: Turn-down Collar', 'Season: Winter', 'Material: Polyester',]
    },
    {
      id: 'price_1MB4QkKFRYyirzJ3357YTzSp',
      name: 'Mayfair Quilted Bomber Jacket',
      alt: 'Mens Solid Color Jacket',
      img: 'https://n.nordstrommedia.com/id/sr3/cf0104fa-870c-4489-a4cd-76ad715c0be7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
      img2: 'https://n.nordstrommedia.com/id/sr3/9bf1a1c3-e2b1-449c-8127-4fc644d39289.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
      img3: 'https://n.nordstrommedia.com/id/sr3/a4badd35-4d0e-4f3f-99cf-16480215b3a8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
      img4: 'https://n.nordstrommedia.com/id/sr3/77c03a4e-4510-4c10-8e7a-c516988f4879.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
      price: '148',
      desc: 'Athlete Russell Wilson and his partners launched Good Man Brand with designs on making a difference in the world and bringing out the best in all men. The brand\'s motto is "Lead. Inspire. Live." Good Man Brand runs the gamut from sharp blazers to streamlined sneakers, and, for each item purchased, the company donates $3 to the Why Not You Foundation, which works to encourage and empower children.',
      detail: ['Quilted cotton construction defines a classic jacket in a versatile bomber cut.', 'True to size.', 'Ribbed collar, cuffs and hem', 'Front snap-welt pockets', 'Black Owned/Founded',]
    }
      // {
      //   id: 'price_1LvSBNKFRYyirzJ3uzz096kf',
      //   title: 'Jackets',
      //   name: 'Men\'s Vintage Fashion Coat',
      //   alt: 'Mens Leather Jacket',
      //   img: 'https://i.ebayimg.com/images/g/O1MAAOSw~z5jMXTu/s-l500.jpg',
      //   img2: 'https://i.ebayimg.com/images/g/TygAAOSw-bNjMXTv/s-l500.jpg',
      //   price: '50.50',
      //   detail: ''
      // },
      // {
      //   id: 'price_1LvSBuKFRYyirzJ3ypNdwwz8',
      //   title: 'Jackets',
      //   name: 'Men\'s Lightweight Bomber Jacket',
      //   alt: 'Mens Bomber Jacket Shell',
      //   img: 'https://m.media-amazon.com/images/I/71M8rwNjBKS._AC_UY879_.jpg',
      //   img2: 'https://m.media-amazon.com/images/I/71IvRQD5AjL._AC_UY879_.jpg',
      //   price: '33.99',
      //   detail: ''
      // },
      // {
      //   id: 'price_1LvSCSKFRYyirzJ3t7hf3Y3r',
      //   title: 'Jackets',
      //   name: 'Men\'s Hip-Hop Style Fluffy Winter Coat',
      //   alt: 'Fluffy winter Jacket',
      //   img: 'https://cdn.shopify.com/s/files/1/0088/6377/6815/products/Winter-Coat-Solid-Color-Plush-Simple-Fluffy-Men-Jacket-Hip-hop-Style-Winter-Coat_47264229-222a-4ea0-ab13-252a2516c1b2_1024x1024@2x.jpg?v=1663142831',
      //   img2: 'https://cdn.shopify.com/s/files/1/0088/6377/6815/products/Winter-Coat-Solid-Color-Plush-Simple-Fluffy-Men-Jacket-Hip-hop-Style-Winter-Coat_00cfb976-a36d-4c4d-9d79-415fe27eafc6_1024x1024@2x.jpg?v=1663142818',
      //   price: '149',
      //   detail: ''
      // },
      // {
      //   id: 'price_1LvSD0KFRYyirzJ3TfZm0pHh',
      //   title: 'Jackets',
      //   name: 'Men\'s Quilted Cotton Summer Jacket',
      //   alt: 'Mens Solid Color Jacket',
      //   img: 'https://i5.walmartimages.com/asr/4c5224a2-3e51-4a56-bc21-92ebc558ed3d.c2b0b56ba884cca32cdb3faf439392c5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      //   img2: 'https://i5.walmartimages.com/asr/7c7f9c5a-1502-44d4-a74e-3b90a5949eca.95985889496f865eb122c127bc45e42e.jpeg',
      //   price: '34.99',
      //   detail: ''
      // },
  //   ]
  // },
  // {
  //   routeName: 'shirts',
  //   items: [
      {
        id: 'price_1LvTojKFRYyirzJ3CXpdLfK5',
        title: 'Shirts',
        name: 'AE Graphic Tee',
        alt: 'White Graphic shirt',
        img: 'https://s7d2.scene7.com/is/image/aeo/0160_4124_100_f?$pdp-mtg-opt$&fmt=webp',
        img2: 'https://s7d2.scene7.com/is/image/aeo/0160_4124_100_b?$pdp-mtg-opt$&fmt=webp',
        price: '14.99',
        detail: ''
      },
      {
        id: 'price_1LvTpNKFRYyirzJ33Lf8RniP',
        title: 'Shirts',
        name: 'Men\'s Random Allover Shirt',
        alt: 'Printed Button-Up',
        img: 'https://img.ltwebstatic.com/images3_pi/2022/04/24/165076834615aa93b86a959f2d85ef6b3ba8e53f62_thumbnail_900x.webp',
        img2: 'https://img.ltwebstatic.com/images3_pi/2022/04/24/165076834851cafbb7a54dcd43dddba85623b7b681_thumbnail_900x.webp',
        price: '12',
        detail: ''
      },
      {
        id: 'price_1LvTq3KFRYyirzJ3ABcOFBbR',
        title: 'Shirts',
        name: 'Men\'s Fashion Design Long Sleeve',
        alt: 'White Long Sleeve Shirt',
        img: 'https://i5.walmartimages.com/asr/eaaba20d-1327-4338-a4d5-8858c01d5146.c569110490e2abc067a864cd8a6d8a80.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        img2: 'https://i5.walmartimages.com/asr/89668cda-b8ab-4e21-a444-869d6fbf823b.a648f72c123d45121effafb5fb6d75b2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        price: '15',
        desc: ''
      },
      {
        id: 'price_1LvTqeKFRYyirzJ3X9O7i0RO',
        title: 'Shirts',
        name: 'Men\'s NFL Cincinnati, Joe Mixon Legend Jersey',
        alt: 'Black and Striped Jersey',
        img: 'https://fanatics.frgimages.com/cincinnati-bengals/mens-nike-joe-mixon-black-cincinnati-bengals-legend-jersey_pi4059000_altimages_ff_4059559-367f39bca1048a771872alt2_full.jpg?_hv=2&w=900',
        img2: 'https://fanatics.frgimages.com/cincinnati-bengals/mens-nike-joe-mixon-black-cincinnati-bengals-legend-jersey_pi4059000_altimages_ff_4059559-367f39bca1048a771872alt3_full.jpg?_hv=2&w=900',
        price: '99',
        desc: ''
      },
  //   ]
  // } 
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
        price: '19.99',
        desc: ''
      },
      {
        id:'price_1LvSGsKFRYyirzJ350VT9sRR',
        name: 'Alumni Designer Strap-back',
        alt: 'designer hat',
        img: `${Paradise3}`,
        price: '22.99',
        desc: ''
      },
      {
        id: 'price_1LvSHLKFRYyirzJ3gM2GXxto',
        name: 'Alumni Paradise Snap-back',
        alt: 'Alumni designer hat',
        img: `${Paradise}`,
        price: '20',
        desc: ''
      },
      {
        id: 'price_1LvSHrKFRYyirzJ39iUpQjkF',
        name: 'Alumni Designer Snap-back',
        alt: 'designer hat',
        img: `${Paradise2}`,
        price: '19.99',
        desc: ''
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
        price: '125',
        desc: ''
      },
      {
        id: 'price_1Lv4fDKFRYyirzJ3zo5SjNBm',
        name: 'Air Jordan 6 Retro Low',
        alt: 'Air Jordan Shoe',
        img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/1f1b7246-1dcd-43de-af62-995320e977ef/air-jordan-6-retro-low-mens-shoes-MPwhfh.png',
        price: '200',
        desc: ''
      },
      {
        id: 'price_1LvS4lKFRYyirzJ3nai5kJRN',
        name: 'Vans: Era Core Classics',
        alt: 'Vans Shoe',
        img: 'https://m.media-amazon.com/images/I/71b8Cc6XRfL._AC_SR1840,1472__FMwebp_.jpg',
        price:'54.95',
        desc: ''
      },
      {
        id: 'price_1LvS5pKFRYyirzJ3DPIitZ5j',
        name: 'Men\'s Leather Oxford Dress Shoes',
        alt: 'Mens Dress Shoe',
        img: 'https://cdnimg.brunomarcshoes.com/brunomarcshoes/product/product/2022-09-19/9065/10:06--1.jpg',
        price: '42.99',
        desc: ''
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
        desc: ''
      },
      {
        id: 'price_1LvSBuKFRYyirzJ3ypNdwwz8',
        name: 'Men\'s Lightweight Bomber Jacket',
        alt: 'Mens Bomber Jacket Shell',
        img: 'https://m.media-amazon.com/images/I/71M8rwNjBKS._AC_UY879_.jpg',
        img2: 'https://m.media-amazon.com/images/I/71IvRQD5AjL._AC_UY879_.jpg',
        price: '33.99',
        desc: ''
      },
      {
        id: 'price_1LvSCSKFRYyirzJ3t7hf3Y3r',
        name: 'Men\'s Hip-Hop Style Fluffy Winter Coat',
        alt: 'Fluffy winter Jacket',
        img: 'https://cdn.shopify.com/s/files/1/0088/6377/6815/products/Winter-Coat-Solid-Color-Plush-Simple-Fluffy-Men-Jacket-Hip-hop-Style-Winter-Coat_47264229-222a-4ea0-ab13-252a2516c1b2_1024x1024@2x.jpg?v=1663142831',
        img2: 'https://cdn.shopify.com/s/files/1/0088/6377/6815/products/Winter-Coat-Solid-Color-Plush-Simple-Fluffy-Men-Jacket-Hip-hop-Style-Winter-Coat_00cfb976-a36d-4c4d-9d79-415fe27eafc6_1024x1024@2x.jpg?v=1663142818',
        price: '149',
        desc: ''
      },
      {
        id: 'price_1LvSD0KFRYyirzJ3TfZm0pHh',
        name: 'Men\'s Quilted Cotton Summer Jacket',
        alt: 'Mens Solid Color Jacket',
        img: 'https://i5.walmartimages.com/asr/4c5224a2-3e51-4a56-bc21-92ebc558ed3d.c2b0b56ba884cca32cdb3faf439392c5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        img2: 'https://i5.walmartimages.com/asr/7c7f9c5a-1502-44d4-a74e-3b90a5949eca.95985889496f865eb122c127bc45e42e.jpeg',
        price: '34.99',
        desc: ''
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
        desc: ''
      },
      {
        id: 'price_1LvTpNKFRYyirzJ33Lf8RniP',
        name: 'Men\'s Random Allover Shirt',
        alt: 'Printed Button-Up',
        img: 'https://img.ltwebstatic.com/images3_pi/2022/04/24/165076834615aa93b86a959f2d85ef6b3ba8e53f62_thumbnail_900x.webp',
        img2: 'https://img.ltwebstatic.com/images3_pi/2022/04/24/165076834851cafbb7a54dcd43dddba85623b7b681_thumbnail_900x.webp',
        price: '12',
        desc: ''
      },
      {
        id: 'price_1LvTq3KFRYyirzJ3ABcOFBbR',
        name: 'Men\'s Fashion Design Long Sleeve',
        alt: 'White Long Sleeve Shirt',
        img: 'https://i5.walmartimages.com/asr/eaaba20d-1327-4338-a4d5-8858c01d5146.c569110490e2abc067a864cd8a6d8a80.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        img2: 'https://i5.walmartimages.com/asr/89668cda-b8ab-4e21-a444-869d6fbf823b.a648f72c123d45121effafb5fb6d75b2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        price: '15',
        desc: ''
      },
      {
        id: 'price_1LvTqeKFRYyirzJ3X9O7i0RO',
        name: 'Men\'s NFL Cincinnati, Joe Mixon Legend Jersey',
        alt: 'Black and Striped Jersey',
        img: 'https://fanatics.frgimages.com/cincinnati-bengals/mens-nike-joe-mixon-black-cincinnati-bengals-legend-jersey_pi4059000_altimages_ff_4059559-367f39bca1048a771872alt2_full.jpg?_hv=2&w=900',
        img2: 'https://fanatics.frgimages.com/cincinnati-bengals/mens-nike-joe-mixon-black-cincinnati-bengals-legend-jersey_pi4059000_altimages_ff_4059559-367f39bca1048a771872alt3_full.jpg?_hv=2&w=900',
        price: '99',
        desc: ''
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
        price: '24.99',
        desc: ''
      },
      {
        id:'price_1LvSElKFRYyirzJ3171I58iI',
        name: 'Insomniac Snap-back',
        alt: 'Black Insomniac hat',
        img: `${Insomniac}`,
        price: '29.99',
        desc: ''
      },
      {
        id: 'price_1LvSFJKFRYyirzJ3xixTEwzK',
        name: 'Illuminated EDC snap-back',
        alt: 'Black light up EDC snap',
        img: `${EDC}`,
        price: '34.99',
        desc: ''
      },
      {
        id: 'price_1LvSFvKFRYyirzJ3SGBMCDyn',
        name: 'DB dad hat',
        alt: 'Retro hat',
        img: `${DB}`,
        price: '12.99',
        desc: ''
      },
      {
        id: 'price_1LvSIJKFRYyirzJ30xepwWJH',
        name: 'TSSF dad hat',
        alt: 'Navy blue and cream dad hat',
        img: `${TSSF}`,
        price: '17.99',
        desc: ''
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
        price: '37.99',
        desc: ''
      },
      {
        id: 'price_1LvS9ZKFRYyirzJ3OAHakPOO',
        name: 'Womens Jackets Long-sleeve Printed Fringed Jacket',
        alt: 'Womens Jacket Model',
        img: 'https://img-va.myshopline.com/image/store/2000372313/1640572147473/a425b42fb0144dd795cd40fa538010ca_1296x.jpg?w=1100&h=1500',
        price: '44.99',
        desc: ''
      },
      {
        id: 'price_1LvSA9KFRYyirzJ3Bh4H3I9c',
        name: ' Women\'s Foxy Sherpa Jacket',
        alt: 'Womens Jacket',
        img: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W4313R_01660_b1_s1_a1_1_m89_750x.jpg?v=1662676081',
        price: '198',
        desc: ''
      },
      {
        id: 'price_1LvSAjKFRYyirzJ36qRYenNv',
        name: 'Women\'s Classic Suit Blazer',
        alt: 'Womens Blazer',
        img: 'https://bananarepublicfactory.gapfactory.com/webcontent/0028/599/220/cn28599220.jpg',
        price: '104',
        desc: ''
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
        desc: ''
      },
      {
        id: 'price_1LvS7FKFRYyirzJ3Ll2Nr9bR',
        name: 'Women\'s Chuck Taylor All-Star Lift',
        alt: 'Lifted Black Converse with White Sole',
        img: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw3d987bc4/images/a_107/560845C_A_107X1.jpg?sw=964',
        img2: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw3476d3b3/images/c_107/560845C_C_107X1.jpg?sw=2000',
        price: '75',
        desc: ''
      },
      {
        id: 'price_1LvS7vKFRYyirzJ3wyDROVDB',
        name: 'Women\'s Adidas Swift Running Shoe',
        alt: 'Original Swift Running Shoe',
        img: 'https://m.media-amazon.com/images/I/71CFoM4M0-L._AC_SX695._SX._UX._SY._UY_.jpg',
        img2: 'https://m.media-amazon.com/images/I/81ew2IgxrGL._AC_SX695._SX._UX._SY._UY_.jpg',
        price: '89',
        desc: ''
      },
      {
        id: 'price_1LvS8XKFRYyirzJ3zrmm6mNi',
        name: 'Women\'s Nike Revolution 5',
        alt: 'Black and White Running Shoes',
        img: 'https://m.media-amazon.com/images/I/512tsZixA4L._AC_UX695_.jpg',
        img2: 'https://m.media-amazon.com/images/I/51-jt4VR-sL._AC_UX695_.jpg',
        price: '89.99',
        desc: ''
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
        price: '129',
        desc: ''
      },
      {
        id: 'price_1LvTs4KFRYyirzJ30UtLkz2v',
        name: 'Women\'s Pro Choice Tee',
        alt: 'Feminism Shirt',
        img: 'https://i.ebayimg.com/images/g/pMIAAOSw32dixu~~/s-l300.jpg',
        img2: 'https://i.ebayimg.com/images/g/uukAAOSw7lRixvAS/s-l300.jpg',
        price: '17.99',
        desc: ''
      },
      {
        id: 'price_1LvTtEKFRYyirzJ3zr45II15',
        name: 'Women\'s Classic Denim',
        alt: 'Classic Long Sleeve Denim',
        img: 'https://i5.walmartimages.com/asr/b6caa34c-ab70-471e-a5ec-280355f786dc.41023d3576fab5ecbc91fb32056b8e00.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        img2: 'https://i5.walmartimages.com/asr/ce4de04c-5ae1-4aae-9f42-009b553c7fc8.d9942e1476445df8f57ff11515091a13.jpeg',
        price: '36',
        desc: ''
      },
      {
        id: 'price_1LvTtqKFRYyirzJ3kr5VAjtp',
        name: 'Women\'s Evil Natural Tee',
        alt: 'Creme Melodie T-Shirt',
        img: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Melodie-Evil-Natural-T-Shirt-_332986-front-US.jpg',
        img2: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Melodie-Evil-Natural-T-Shirt-_332986-back-US.jpg',
        price: '31.95',
        desc: ''
      }
    ]
  }
]

  export const WOMENS_SHOP_LIST = [
    {
      id: 'price_1LvSDcKFRYyirzJ3nlyzkGus',
      title: 'hats',
      name: 'Bass Academy Snap-back',
      alt: 'Black hat',
      img: `${Bass}`,
      price: '24.99',
      desc: ''
    },
    {
      id:'price_1LvSElKFRYyirzJ3171I58iI',
      title: 'hats',
      name: 'Insomniac Snap-back',
      alt: 'Black Insomniac hat',
      img: `${Insomniac}`,
      price: '29.99',
      desc: ''
    },
    {
      id: 'price_1LvSFJKFRYyirzJ3xixTEwzK',
      title: 'hats',
      name: 'Illuminated EDC snap-back',
      alt: 'Black light up EDC snap',
      img: `${EDC}`,
      price: '34.99',
      desc: ''
    },
    {
      id: 'price_1LvSFvKFRYyirzJ3SGBMCDyn',
      title: 'hats',
      name: 'DB dad hat',
      alt: 'Retro hat',
      img: `${DB}`,
      price: '12.99',
      desc: ''
    },
    {
      id: 'price_1LvSIJKFRYyirzJ30xepwWJH',
      title: 'hats',
      name: 'TSSF dad hat',
      alt: 'Navy blue and cream dad hat',
      img: `${TSSF}`,
      price: '17.99',
      desc: ''
    },
    {
      // id: uuid(),
      id: 'price_1Lv4gBKFRYyirzJ3uwBrj6C1',
      title: 'jackets',
      name: 'Womens Winter Warmer Coat | Insulated Jacket',
      alt: 'Womens Winter Jacket Model',
      img: 'https://cdni.llbean.net/is/image/wim/271139_0_44?hei=1095&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2',
      price: '37.99',
      desc: ''
    },
    {
      id: 'price_1LvS9ZKFRYyirzJ3OAHakPOO',
      title: 'jackets',
      name: 'Womens Jackets Long-sleeve Printed Fringed Jacket',
      alt: 'Womens Jacket Model',
      img: 'https://img-va.myshopline.com/image/store/2000372313/1640572147473/a425b42fb0144dd795cd40fa538010ca_1296x.jpg?w=1100&h=1500',
      price: '44.99',
      desc: ''
    },
    {
      id: 'price_1LvSA9KFRYyirzJ3Bh4H3I9c',
      title: 'jackets',
      name: ' Women\'s Foxy Sherpa Jacket',
      alt: 'Womens Jacket',
      img: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W4313R_01660_b1_s1_a1_1_m89_750x.jpg?v=1662676081',
      price: '198',
      desc: ''
    },
    {
      id: 'price_1LvSAjKFRYyirzJ36qRYenNv',
      title: 'jackets',
      name: 'Women\'s Classic Suit Blazer',
      alt: 'Womens Blazer',
      img: 'https://bananarepublicfactory.gapfactory.com/webcontent/0028/599/220/cn28599220.jpg',
      price: '104',
      desc: ''
    },
    {
      id: 'price_1LvS6bKFRYyirzJ3ifZOM4Rx',
      title: 'shoes',
      name: 'Women\'s Catiba Pro',
      alt: 'Off-white Vintage Gum Sole shoe',
      img: 'https://cdn.shopify.com/s/files/1/2495/5044/products/catiba-catiba-pro-off-white-sneaker-canvas.slideshow3_1458c07d-fd02-4af5-be0e-74ae47c7be07.jpg?v=1624857339',
      img2: 'https://cdn.shopify.com/s/files/1/2495/5044/products/catiba-catiba-pro-off-white-sneaker-canvas.slideshow1_e7855403-f774-4faa-a049-c0d2b1857b09.jpg?v=1624857339',
      price: '89',
      desc: ''
    },
    {
      id: 'price_1LvS7FKFRYyirzJ3Ll2Nr9bR',
      title: 'shoes',
      name: 'Women\'s Chuck Taylor All-Star Lift',
      alt: 'Lifted Black Converse with White Sole',
      img: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw3d987bc4/images/a_107/560845C_A_107X1.jpg?sw=964',
      img2: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw3476d3b3/images/c_107/560845C_C_107X1.jpg?sw=2000',
      price: '75',
      desc: ''
    },
    {
      id: 'price_1LvS7vKFRYyirzJ3wyDROVDB',
      title: 'shoes',
      name: 'Women\'s Adidas Swift Running Shoe',
      alt: 'Original Swift Running Shoe',
      img: 'https://m.media-amazon.com/images/I/71CFoM4M0-L._AC_SX695._SX._UX._SY._UY_.jpg',
      img2: 'https://m.media-amazon.com/images/I/81ew2IgxrGL._AC_SX695._SX._UX._SY._UY_.jpg',
      price: '89',
      desc: ''
    },
    {
      id: 'price_1LvS8XKFRYyirzJ3zrmm6mNi',
      name: 'Women\'s Nike Revolution 5',
      title: 'shoes',
      alt: 'Black and White Running Shoes',
      img: 'https://m.media-amazon.com/images/I/512tsZixA4L._AC_UX695_.jpg',
      img2: 'https://m.media-amazon.com/images/I/51-jt4VR-sL._AC_UX695_.jpg',
      price: '89.99',
      desc: ''
    },
    {
      id: 'price_1LvTrEKFRYyirzJ3Vc8xfuJV',
      title: 'shirt',
      name: 'Women\'s Chargers NFL Nike Jersey',
      alt: 'Chargers NFL Home Jersey',
      img: 'https://fanatics.frgimages.com/los-angeles-chargers/womens-nike-justin-herbert-powder-blue-los-angeles-chargers-game-jersey_pi3911000_altimages_ff_3911893-6d26fc46bc56f4fdb2bcalt2_full.jpg?_hv=2&w=900',
      img2: 'https://fanatics.frgimages.com/los-angeles-chargers/womens-nike-justin-herbert-powder-blue-los-angeles-chargers-game-jersey_pi3911000_altimages_ff_3911893-6d26fc46bc56f4fdb2bcalt3_full.jpg?_hv=2&w=900',
      price: '129',
      desc: ''
    },
    {
      id: 'price_1LvTs4KFRYyirzJ30UtLkz2v',
      title: 'shirts',
      name: 'Women\'s Pro Choice Tee',
      alt: 'Feminism Shirt',
      img: 'https://i.ebayimg.com/images/g/pMIAAOSw32dixu~~/s-l300.jpg',
      img2: 'https://i.ebayimg.com/images/g/uukAAOSw7lRixvAS/s-l300.jpg',
      price: '17.99',
      desc: ''
    },
    {
      id: 'price_1LvTtEKFRYyirzJ3zr45II15',
      title: 'shirts',
      name: 'Women\'s Classic Denim',
      alt: 'Classic Long Sleeve Denim',
      img: 'https://i5.walmartimages.com/asr/b6caa34c-ab70-471e-a5ec-280355f786dc.41023d3576fab5ecbc91fb32056b8e00.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      img2: 'https://i5.walmartimages.com/asr/ce4de04c-5ae1-4aae-9f42-009b553c7fc8.d9942e1476445df8f57ff11515091a13.jpeg',
      price: '36',
      desc: ''
    },
    {
      id: 'price_1LvTtqKFRYyirzJ3kr5VAjtp',
      title: 'shirts',
      name: 'Women\'s Evil Natural Tee',
      alt: 'Creme Melodie T-Shirt',
      img: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Melodie-Evil-Natural-T-Shirt-_332986-front-US.jpg',
      img2: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Melodie-Evil-Natural-T-Shirt-_332986-back-US.jpg',
      price: '31.95',
      desc: ''
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