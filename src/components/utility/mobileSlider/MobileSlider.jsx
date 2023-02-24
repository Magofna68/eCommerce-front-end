import react, { useState } from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx';
import Slider from 'react-touch-drag-slider';
import Container from 'react-bootstrap/Container';
import { letterSpacing } from '@mui/system';


function SlideShow(props) {
  const { categoryRedirect } = props;

  const slides = [
    {
      id: 0,
      title: 'sneakers',
      img: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&w=1000&q=80',
    },
    {
      id: 1,
      title: 'jackets',
      img: 'https://media.gq.com/photos/570d11e8c28126b633eff4e4/16:9/w_2560%2Cc_limit/jean-jackets-gq-0516-04.jpg',
    },
    {
      id: 2,
      title: 'hats',
      img: 'https://img5.goodfon.com/wallpaper/nbig/b/45/dmitry-levykin-photographer-model-face-closed-eyes-mouth-lip.jpg',
    },
    {
      id: 3,
      title: 'shirts',
      img: 'https://media.istockphoto.com/id/1392944438/photo/portrait-of-handsome-attractive-positive-curly-haired-indian-or-arabian-guy-wearing-white.jpg?b=1&s=170667a&w=0&k=20&c=AuDfv9PdKqXO3nKHFc-uBZ1bt0SXXceqFLo-OhJnI6o=',
    },
    // {
    //   id: 4,
    //   title: 'sale',
    //   img: ''
    // }
  ];

  const [index, setIndex] = useState(0)

  const setFinishedIndex = (i) => {
    console.log("finished dragging on slide", i);
    setIndex(i);
  }

  const nextSlide = () => {
    if (index < slides.length - 1) setIndex(index + 1);
  };

  const previousSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  const goToSlide = (slideIdx) => {
    setIndex(slideIdx)
  }

  return (
    <Container 
      style={{ 
        width: '100%', 
        height: '200px', 
        marginBottom: '10%', 
        marginRight: 0, 
        marginLeft: 0,
    }}>
      {
        window.innerWidth > 420 ?
        <>
          <span style={{ paddingBottom: '1%', textAlign: 'left', display: 'flex'}}>Shop by Category:</span>
          <div className='max-w[1400px] h-[300px] w-full m-auto pb-10 mb-10 relative group cursor-pointer'>
            <div style={{ backgroundImage: `url(${slides[index].img})`}} 
              className='w-full h-full rounded-2xl bg-center bg-cover duration-1000 d-flex justify-center align-center'
              onClick={() => categoryRedirect(slides[index].title)}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignSelf: 'center',
                width: '60%',
                backgroundColor: '#eaf4f4',
                height: '50%',
                opacity: '70%',
                border: 'solid 2px black',
                letterSpacing: '3px'
              }}>
                <h1 
                  style={{ 
                    margin: 'auto auto', 
                    textAlign: 'center', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    curosr: 'pointer'
                }}>
                  {slides[index].title.toUpperCase()}
                </h1>
              </div>
            </div>
          {/* Left Arrow */}
            <div className="
              group-hover:block 
              absolute top-[37%] 
              -translate-x-[-5%] 
              -traslate-y-[-50%] 
              left-0 
              text-2xl 
              rounded-full 
              p-2
              bg-black/20
              text-white 
              cursor-pointer"
              >
              <BsChevronCompactLeft size={30} onClick={previousSlide} />
            </div>
      
          {/* Right Arrow */}
            <div 
              className="
              
              group-hover:block 
              absolute top-[37%] 
              -translate-x-[5%] 
              -traslate-y-[-50%] 
              right-0 
              text-2xl 
              rounded-full 
              p-2 
              bg-black/20
              text-white 
              cursor-pointer"
              >
              <BsChevronCompactRight size={30} onClick={nextSlide} />
            </div>
            <div className='flex top-4 justify-center py-2'>
              {slides.map((slide, slideIdx) => (
                <div 
                  onClick={() => goToSlide(slideIdx)} 
                  className='text-2xl cursor-pointer active:gray'
                  key={slideIdx}
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </>
        :
        <>
          <span>Shop by Category:</span>
          <Slider
            style={{ zIndex: 0, width: '100%', paddingTop: 0}}
            onSlideComplete={setFinishedIndex}
            activeIndex={index}
            threshHold={100}
            transition={1}
            scaleOnDrag={true}
          >
            {slides.map(({ img, title }, index) => (
              <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 p-0'
              onClick={() => categoryRedirect(`${title}`)}
              key={index}
              style={{ backgroundImage: `url(${img})`, display: 'flex', justifyContent: 'center', alignItems: 'center'}} 
              >
                <div style={{
                  width: '60%',
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                  // position: 'relative',
                  // top: '25%',
                  // marginLeft: '20%',
                  backgroundColor: '#eaf4f4',
                  height: '50%',
                  opacity: '70%',
                  border: 'solid 2px black'
                }}>
                  <h1 
                    style={{ 
                      margin: 'auto auto', 
                      cursor: 'pointer'
                    }}>
                    {slides[index].title.toUpperCase()}
                  </h1>
                </div>
          {/* Left Slider Icon*/}
          <div style={{position: 'absolute', left: 0, bottom: 75, zIndex: 1}} 
            className="group-hover:block rounded-full bg-black/20 text-2xl p-2 text-white cursor-pointer"
          >
              <BsChevronCompactLeft size={30} onClick={previousSlide} />
          </div>

          {/* Right Slider Icon */}
          <div style={{position: 'absolute', right: 0, bottom: 75, zIndex: 1}} 
          className="group-hover:block rounded-full bg-black/20 text-2xl p-2 text-white cursor-pointer">
              <BsChevronCompactRight size={30} onClick={nextSlide} />
          </div>
              </div>
              ))}

          </Slider>
      </>
  }
    </Container>


    // <div className='max-w[1400px] h-[250px] w-full m-auto py-10 relative group'>
    //   <div style={{ backgroundImage: `url(${slides[currentIdx].img})`}} 
    //     className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
    //     onClick={() => categoryRedirect(slides[currentIdx].title)}
    //   >
    //     <div style={{
    //       position: 'relative',
    //       top: '25%',
    //       // left: '35%',
    //       width: '60%',
    //       // height: '300px',
    //       marginLeft: '20%',
    //       backgroundColor: '#eaf4f4',
    //       height: '50%',
    //       opacity: '70%',
    //       border: 'solid 2px black'
    //     }}>
    //       <h1 
    //         style={{ 
    //           margin: 'auto auto', 
    //           textAlign: 'center', 
    //           display: 'flex', 
    //           justifyContent: 'center', 
    //           paddingTop: '15%',
    //           curosr: 'pointer'
    //       }}>
    //         {slides[currentIdx].title.toUpperCase()}
    //       </h1>
    //       </div>
    //     </div>
      
      // {/* Left Arrow */}
      // <div className="
        
      //   group-hover:block 
      //   absolute top-[42%] 
      //   -translate-x-0 
      //   -traslate-y-[-50%] 
      //   left-0 
      //   text-2xl 
      //   rounded-full 
      //   p-2
      //   bg-black/20
      //   text-white 
      //   cursor-pointer"
      // >
      //   <BsChevronCompactLeft size={30} onClick={prevSlide} />
      // </div>
      
      // {/* Right Arrow */}
      // <div 
      //   className="
        
      //   group-hover:block 
      //   absolute top-[42%] 
      //   -translate-x-0 
      //   -traslate-y-[-50%] 
      //   right-0 
      //   text-2xl 
      //   rounded-full 
      //   p-2 
      //   bg-black/20
      //    text-white 
      //   cursor-pointer"
      // >
      //   <BsChevronCompactRight size={30} onClick={nextSlide} />
      // </div>

      // <div className='flex top-4 justify-center py-2'>
      //   {slides.map((slide, slideIdx) => (
      //     <div 
      //       key={slideIdx} 
      //       onClick={() => goToSlide(slideIdx)} className='text-2xl cursor-pointer'
      //     >
      //       <RxDotFilled />
      //     </div>
      //   ))}
      // </div>
    // </div>
  );
}

export default SlideShow;