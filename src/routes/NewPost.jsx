import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import blogFetch from '../axios/config'
import './NewPost.css'

const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) =>{
    e.preventDefault();
    const post = { title, body, userId: 1};
    try {
      await blogFetch.post('/posts', post);
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };


  
  return (
    <div className='new-post'>
      <h2>Inserir novo post:</h2>
      <form onSubmit={(e) => createPost()}>
        <div className="form-control">
          <label htmlFor="title">Titulo:</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            placeholder="Digite o título" 
            onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea 
            type="text" 
            id="body" 
            name="title" 
            placeholder="Digite o conteúdo" 
            onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <input type='submit' 
        value='Criar Post' 
        className='btn' 
        />
      </form>

    </div>
  )
}

export default NewPost