import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"
import WelcomePage from "./WelcomePage"
import PrankPage from "./PrankPage"

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/homepage" element={<HomePage/>} />
        <Route path="/prank" element={<PrankPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;