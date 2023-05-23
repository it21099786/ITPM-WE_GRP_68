import { Link } from "react-router-dom"
import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className = "SearchItem">
        <img src="https://q-xx.bstatic.com/xdata/images/xphoto/max1200/134507150.jpg?k=51c217d2dfdd37ec2b7198582fa5683b8fd571c804133abbcd113eb524505b55&o=" 
        alt="" className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTitle">Kandy City Highlights Tour</h1>
            <span className="siDistance">A tour to explore the main attractions of Kandy city</span>
            <span className="siCancel10p">Free cancellation available</span>
            <span className="siCancel0pSubtitle"> Popular with couples</span>
        </div>
        <div className="siDetails">
            <div className="siDetailTexts">
                <span className="siPrice">US$19</span>
                <span className="siTax0p">Include taxes and fees</span>
                <Link to={`/attraction/sad`}>
                <button className="siCheckButton">See availability</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SearchItem