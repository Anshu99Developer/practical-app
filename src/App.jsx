import { BrowserRouter } from "react-router-dom";
import Header from "./components/global/Header";
import Routing from "./components/global/Routing";
import Footer from "./components/global/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
