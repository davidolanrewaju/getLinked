import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/ui/Navbar/Nav";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Overview from "./subpages/Overview/Overview";
import Timeline from "./subpages/Timeline/Timeline";
import FAQs from "./subpages/FAQs/FAQs";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Home />
        <Routes>
          <Route element={<Overview />} exact path="/" />
          <Route element={<Timeline />} exact path="/timeline" />
          <Route element={<FAQs />} exact path="/faqs" />
          <Route element={<Contact />} exact path="/contact" />
          <Route element={<Register />} exact path="/register" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
