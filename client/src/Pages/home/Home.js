import AttractionList from "../../components/attractionList/AttractionList"
import Featured from "../../components/featured/Featured"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import "./home.css"

function Home() {
  return (
    <div>
        <Navbar />
        <Header/>
        <div className="homeContainer">
         <Featured/> 
         <h1 className="homeTitle">Nearby destinations</h1>
         <AttractionList/>
         <MailList/>
         <Footer/>
        </div>
    </div>
  )
}

export default Home