import { useState } from 'react';

import axios from "axios";

import {usePosts} from "../contexts/PostsContext"

const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;

function Form() {
    const { categories, tags } = usePosts();
    
    const dataDefault = {
        title: '',
        image:'',
        description: '',
        category: '',
        publish: false,
        tags:[],
    } 

    const [postData, setPostData] = useState(dataDefault);

    const addPost = async (url, data) => {
        await axios.post(url, data);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        addPost(`${apiBaseUrl}/posts`, postData);

        setPostData(dataDefault);
    }

    const addData = (key, newData) => {
        setPostData(data => ({...data, [key]: newData}))
    }

    const addTags = (tag) => {
        const currentTag = postData.tags;
        const newTags = currentTag.includes(tag) ? currentTag.filter(element => element !== tag) : [...currentTag, tag];
        addData('tags', newTags)
    }
    return (
        <div className="container">
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="title">Titolo</label>
                    <input
                        id="title"
                        type="text"
                        value={postData.title}
                        onChange={event => addData('title', event.target.value)}
                    />
                </div>

                <div className="margin">
                    <label htmlFor="image">Url Immagine</label>
                    <input
                        id="image"
                        type="text"
                        value={postData.image}
                        onChange={event => addData('image', event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="description">Descrizione</label>
                    <textarea
                        id="description"
                        value={postData.description}
                        onChange={event => addData('description', event.target.value)}
                    ></textarea>
                </div>

                <div className="margin">
                <label htmlFor="category">Scegli la categoria</label>
                    <select
                        id="category"
                        value={postData.category}
                        onChange={event => addData('category', event.target.value)}
                    >
                        <option selected>Categoria</option>
                        {
                            categories.map((category, index) => (
                                <option
                                    key={`category_${index}`}
                                    value={category.name}
                                >
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="check">
                    {
                        tags.map((tag, index) => (
                            <div key={`tag_${index}`}>
                                <input
                                    id="tags"
                                    type="checkbox"
                                    checked={postData.tags.includes(tag)}
                                    onChange={() => addTags(tag)}
                                />
                                <label htmlFor="tags">
                                  {tag.name}
                                </label>
                            </div>
                        ))
                    }
                </div>

                <div className="margin">
                    <input
                        id="publish"
                        type="checkbox"
                        checked={postData.publish}
                        onChange={(event) => addData('publish', Boolean(event.target.checked))}
                    />
                    <label htmlFor="publish">
                      Pubblica
                    </label>
                </div>

                <button>Invia</button>
            </form>
        </div>
    )
}

export default Form