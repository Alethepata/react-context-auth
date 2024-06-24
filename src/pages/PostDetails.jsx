import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL


function PostDetails(){
  const {slug} = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    getPost(`${baseApiUrl}/posts/${slug}`)
  }, [slug])

  const getPost =  async (url) => {
    const data = await axios.get(url);
    setPost(data.data.post)

  }

  return(
    <div className="container">
      <h1>{post.title}</h1>
      <figure>
        <img src={post.image} alt={post.title} />
      </figure>
      <div className="text">
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default PostDetails