import { BrowserRouter } from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Routers from './Routers';
import Footer from "./components/footer/Footer";

import { data } from "./utils/data";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routers data={data} />
      <Footer data={data} />
    </BrowserRouter>
  )
}

export default App
