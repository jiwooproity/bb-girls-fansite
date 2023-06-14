import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.less";

import { TYPE } from "@/type";
import { Header, Footer } from "@/components/common";
import { Home, Gallery } from "@/components/page";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={TYPE.PATH.HOME} element={<Home />} />
          <Route path={TYPE.PATH.GALLERY} element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
