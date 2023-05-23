import './attraction.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

const Attraction = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const photos = [
    {
      src: 'https://r-xx.bstatic.com/xdata/images/xphoto/max1200/134507165.jpg?k=3929bed3b95bd10e4cf3849f7ac5ea2b7ccc91ec2c6793fe2fd8705fc116ca0e&o=',
    },
    {
      src: 'https://r-xx.bstatic.com/xdata/images/xphoto/max1200/134507217.jpg?k=069affb865047dea38291b9cceb8b7627bce0e0b8716843a751cb336ed8a38d8&o=',
    },
    {
      src: 'https://r-xx.bstatic.com/xdata/images/xphoto/max1200/134507203.jpg?k=6ebc565cbd88369a20843529e49431204b6a5210639a91b9d02b3ec6f4a98dc4&o=',
    },
    {
      src: 'https://q-xx.bstatic.com/xdata/images/xphoto/max1200/134507245.jpg?k=1de548c58eccfafbdb38e3d0a68f0edb526523e6e76d0c6091d7680440c97ea2&o=',
    },
    {
      src: 'https://r-xx.bstatic.com/xdata/images/xphoto/max1200/134507150.jpg?k=51c217d2dfdd37ec2b7198582fa5683b8fd571c804133abbcd113eb524505b55&o=',
    },
    {
      src: 'https://r-xx.bstatic.com/xdata/images/xphoto/max1200/134507185.jpg?k=f4f4c438ce376d0ba3d099dabcc808af659ee8a81d94e8e3e3f359c0a79f4500&o=',
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="attractionContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove('l')}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove('r')}
            />
          </div>
        )}
        <div className="attractionWrapper">
          <button className="bookNow"> Book Now!</button>
          <h1 className="attractionTitle"> Kandy City Highlights Tour</h1>
          <div className="subTitle">
            <span>A tour to explore the main attractions of Kandy city</span>
          </div>
          <span className="cTitle">Popular with couples</span>
          <div className="AttractionImg">
            {photos.map((photo, i) => (
              <div className="attractionImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="attractionImg"
                />
              </div>
            ))}
          </div>
          <div className="attractionDetails">
            <div className="hotelDetailsTexts">
              <p className="attractionDesc">
                On this evening tour, you will explore the ancient buildings,
                and sites of archaeological values. You will first visit Helga's
                Folly Hotel, a boutique hotel, followed by a visit to
                Bahirawakanda Vihara Buddha Statue, a hill-top Buddha statue
                with valley views. Your next stop will be Kandy Market hall,
                where you will get idea about the lives of the native people.
                You will also see the Kandy Cultural Show, which combines
                traditional cultural activities and more, before proceeding to
                the Temple of the Sacred Tooth Relic, one of the most sacred
                Buddhist temples. You can enjoy views of Kandy city from Kandy
                viewpoint, followed by dinner at a nearby restaurant. Before the
                tour ends, you can visit Queens hotel, one of the oldest hotels
                in Sri Lanka followed by a walk near the Kandy lake to end the
                day.
                <p>
                  <br />
                  <li className="main">What's included</li>
                  <li> Private transportation</li>
                  <li> Bottled water</li>
                  <li> Transportation in an air-conditioned vehicle</li>
                </p>
                <br />
                <p>
                  <li className="main">Accessibility</li>
                  <li>Transport is wheelchair accessible</li>
                  <li>Wheelchair accessible</li>
                  <li>Surfaces are wheelchair accessible</li>
                  <li>Accessible to pushchairs/prams</li>
                  <li>Public transport links nearby</li>
                  <li>Infants must sit on an adult's lap</li>
                  <li>Infant seats available</li>
                  <li>Health & safety</li>
                  <li>Suitable for all fitness levels</li>
                </p>
              </p>
            </div>
            <div className="attractionDetailsPrice">
              <h1>Grate Excellent experience</h1>
              <span>
                Evening Tour at the Last Kingdom of Sri Lanka, Kandy
              </span>
              <h2>
                  <b>$19</b>(per Tour)
              </h2>
              <button> Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Attraction;
