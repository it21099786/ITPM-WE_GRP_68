import{
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import Home from "./Pages/home/Home";
import List from "./Pages/list/List";
import Attraction from "./Pages/attraction/Attraction";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Attraction" element={<List/>}/>
        <Route path="/Attraction/:id" element={<Attraction/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
