import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import "../src/styles/app.css"
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  
  const [posts, setPosts] = useState ([ //задаем массив эллементов
     {id: 1, title: "Javascript 1", body: "Description 1"},
     {id: 2, title: "Javascript 2", body: "Description 2"},
     {id: 3, title: "Javascript 3", body: "Description 3"},
  ])

  const [title, setTitle] = useState ("123")

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
  }
 

  return ( // то что выводим на страницу  
    <div className="App"> 
      <form>
        {/*Управляемый компонент*/}
        <MyInput 
          value={title} // сделали дв-ое связ-ие (связали значение импута с состаянием title)
          onChange={e => setTitle(e.target.value)} // сделали дв-ое связ-ие (связали значение состяния setTitle и value)
          type ="text" 
          placeholder="Название поста"
        />
        <MyInput type ="text" placeholder="Описание поста"/>
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title = "Список постов 1" />
    </div>
  );
}

export default App;
