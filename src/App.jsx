import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import FormCreate from "./pages/Form";
import PostDetails from "./pages/PostDetails";
import {PostsProvider} from "./contexts/PostsContext"

function App() {
  return(
    <BrowserRouter>
      <PostsProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
              <Route path="posts" element={<Posts />} />
              <Route path="posts/create" element={<FormCreate/>} />
            <Route path="posts/:slug" element={<PostDetails/>} />
          </Route>
        </Routes>
      </PostsProvider>
    </BrowserRouter>
  )
}

export default App
