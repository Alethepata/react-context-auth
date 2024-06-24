import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/partials/Card";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL

function Posts(){
  const [posts, setPosts] = useState([]);

  const getPosts = async (url) => {
    const data = await axios.get(url);
    setPosts(data.data)
  }
  useEffect(() =>{
    getPosts(`${baseApiUrl}/posts`)
  },[])
  return(
    <div className="container">
      <h1>Posts</h1>
      <Card
        posts={posts}
      />
    </div>
  )
}

export default Posts