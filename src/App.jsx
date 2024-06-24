import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="posts" element={<Posts/>} />
          <Route path="posts/:slug" element={<PostDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
