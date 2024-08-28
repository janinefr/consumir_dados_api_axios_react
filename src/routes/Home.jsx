import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Home.css";

const Home = () => {

  const [post, setPost] = useState([]);

  // resgatar os dados da API
  const getPosts = async () => {
    
    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = response.data;
      console.log(data);

    } catch(error){
      console.log(error)
    }

  };

  useEffect(() =>{
    getPosts();
  }, []);

  return <div>Home</div>;
}

export default Home