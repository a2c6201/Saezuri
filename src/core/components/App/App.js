import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../../../App.css";
import Index from "../../../thread/Index/screens";
import New from "../../../thread/New/screens";
import Post from "../../../thread/Post/screens";
import Header from "../modules/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/thread/new" element={<New />} />
          <Route path="/thread/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
