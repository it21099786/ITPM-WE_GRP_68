import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="fLists">
            <ul className="fList">
                <h2 className="fListItems">Support</h2>
                <li className="fListItem">Coronavirus (COVID-19) FAQs</li>
                <li className="fListItem">Manage your trips</li>
                <li className="fListItem">Attractions help centre</li>
                <li className="fListItem">Safety resource centre</li>
            </ul>
            <ul className="fList">
                <h2 className="fListItems">Discover</h2>
                <li className="fListItem">Genius loyalty programme</li>
                <li className="fListItem">Seasonal and holiday deals</li>
                <li className="fListItem">Travel articles</li>
                <li className="fListItem">Booking.com for Business</li>
            </ul>
            <ul className="fList">
                <h2 className="fListItems">DiscoverTerms and settings</h2>
                <li className="fListItem">Privacy & cookies</li>
                <li className="fListItem">Terms and conditions</li>
            </ul>
            <ul className="fList">
                <h2 className="fListItems">About</h2>
                <li className="fListItem">About Booking.com</li>
                <li className="fListItem">How we work</li>
                <li className="fListItem">Corporate contact</li>
                <li className="fListItem">Investor relations</li>
            </ul>
        </div>
        <div className="fText">Copyright © 2023 Tripify</div>
    </div>
  )
}

export default Footer