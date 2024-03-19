import {Routes, Route} from "react-router-dom"
import "./App.css";

import Home from "./components/Home";
import Layout from "./components/Layout";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Routes>
        {/* the Layout Route is a parent Route, the other Route elements are nested inside it */}
        <Route path ="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
