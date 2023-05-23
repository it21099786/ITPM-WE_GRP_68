import {
  faBed,
  faCalendarDays,
  faCamera,
  faCar,
  faPlane,
  faTaxi,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/attraction', { state: { destination, date } });
  };

  return (
    <div className="header">
      <div
        className={
          type === 'list' ? 'headerContrainer listMode' : 'headerContrainer'
        }
      >
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays </span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight </span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental </span>
          </div>
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faCamera} />
            <span>Attraction </span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>

        {type !== 'list' && (
          <>
            <h1 className="headerTitle">What do you want to see and do?</h1>
            <p className="headerDesc">
              Discover new attractions and experiences to match your interests
              and travel style{' '}
            </p>
            <button className="headerBtn"> signIn / Register </button>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCamera} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, 'MM/dd/yyyy')} 
                to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setdate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faUser} className="headerIcon" />
                <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children`}</span>
                {openOptions && <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button
                       disabled={options.adult<=1}
                        className="optionCounterButton"
                        onClick={() => handleOption('adult', 'd')}
                      >
                        -
                      </button>
                      <span className="optionCounterButton">{options.adult}</span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption('adult', 'i')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button
                      disabled={options.children<=0}
                        className="optionCounterButton"
                        onClick={() => handleOption('children', 'd')}
                      >
                        -
                      </button>
                      <span className="optionCounterButton">{options.children}</span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption('children', 'i')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
