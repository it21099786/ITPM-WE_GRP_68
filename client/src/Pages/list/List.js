import "./list.css"
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

export const List = () => {

  const location = useLocation()

  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)

  return (
    <div>
      <Navbar/>
    <Header type="list"/>
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <lable>Where are you going?</lable>
            <input placeholder={destination} type="text"></input>
          </div>
          <div className="lsItem">
            <lable>Select your dates</lable>
            <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
            </span>
            {openDate && (<DateRange
            onChange={(item) => setDate([item.selection])} minDate={new Date()}
            ranges={date}/>
            )}
          </div>
          <div className="lsItem">
            <lable>options</lable>
            <div className="lsOptions">
            <div className="lsOptionItem">
              <span className="lsOptionText"> 
                Min Price <small> per Tour</small>
              </span>
              <input type="number" min={1000} className="lsOptionInput"/>
            </div>

            <div className="lsOptionItem">
              <span className="lsOptionText"> 
                Max Price <small> per Tour</small>
              </span>
              <input type="number" className="lsOptionInput"/>
            </div>

            <div className="lsOptionItem">
              <span className="lsOptionText"> 
                Adult 
              </span>
              <input type="number" min={1} className="lsOptionInput" placeholder={Option.adult}/>
            </div>

            <div className="lsOptionItem">
              <span className="lsOptionText"> 
                Children
              </span>
              <input type="number" min={0} className="lsOptionInput" placeholder={Option.childern}/>
            </div>
          </div>
          </div>
          <button>Search</button>
        </div>
        <div className="listResult">
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default List;