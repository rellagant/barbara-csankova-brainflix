import "./App.scss";
import "./styles/partials/_globals.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { UploadPage } from "./pages/UploadPage/UploadPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="upload" element={ <UploadPage/> } />
      <Route path="/:id" element={<Home />} />
      {/* <Route path="/*" element={NoPageHere}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//Nohan component needs to be fixed in the next Sprint
//make <NoPageHere> component (have fun with it)
