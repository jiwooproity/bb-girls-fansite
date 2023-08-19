import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.less";

import Header from "./components/common/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <Routes>
          <Route path={TYPE.PATH.HOME} element={<Home />} />
          <Route path={TYPE.PATH.GALLERY} element={<Gallery />} />
        </Routes>
        <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
