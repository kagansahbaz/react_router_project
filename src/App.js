import LoadingPage from "../src/components/LoadingPage";
import Nav from "../src/components/Nav";
import Main from "../src/components/Main";
import Blog from "../src/components/Blog";
import Gallery from "../src/components/Gallery";
import News from "../src/components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/style/app.scss";
import Content from "./components/Content";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LoadingPage />} />
        <Route path="BilgeAdam" element={<Nav />}>
          <Route path="main" element={<Main/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="news/:newsId" element={<Content/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
