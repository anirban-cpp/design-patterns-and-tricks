import { Route, Routes } from "react-router-dom";
import "./App.css";
import Animate from "./components/Animate/Animate";
import Carousel from "./components/Carousel/Carousel";
import { SliderData } from "./components/Carousel/SliderData";
import Elements from "./components/Elements/Elements";
import Framer from "./components/Framer/Framer";
import Header from "./components/Header";
import Home from "./components/Home";
import Hook from "./components/Hooks/Hook";
import Upload from "./components/Image-upload/Upload";
import Images from "./components/Images";
import Parallax from "./components/Parallax/Parallax";

import Fibonacci from "./components/Web-worker/Fibonacci";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<Images />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="/carousel" element={<Carousel slides={SliderData} />} />
        <Route path="/fibonacci" element={<Fibonacci />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/animate" element={<Animate />} />
        <Route path="/framer" element={<Framer />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/parallax" element={<Parallax/>} />
      </Routes>
    </div>
  );
}

export default App;
