import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Component/Header/Header";
import { Contact } from "./Component/Contact/Contact";
import { Footer } from "./Component/Footer/Footer";
import {Acoustics} from "./Component/Acoustics/Acoustics"
import { Teams } from "./Component/Teams/Teams";
import { Software } from "./Component/Software/Software";
import { Residential } from "./Component/Services/Residential";
import { Professional } from "./Component/Services/Professional";
import { Home } from "./Component/Home/Home";

function App() {
  return (
    <>
    <BrowserRouter basename="/medrasacoustics-FE/">
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/acoustics" element={<Acoustics />} />
    <Route path="/team" element={<Teams />} />
    <Route path="/software" element={<Software />} />
    <Route path="/services/residential" element={<Residential />} />
    <Route path="/services/professional" element={<Professional />} />
    <Route path="/contact-us" element={<Contact />} />
  </Routes>
  <Footer />
</BrowserRouter>

    </>
  );
}

export default App;
