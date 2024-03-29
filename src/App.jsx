import { BrowserRouter } from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Routers from './Routers';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routers />
      <Footer />
    </BrowserRouter>
  )
}

export default App
