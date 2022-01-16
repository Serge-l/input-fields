import  React, {useRef, useState} from 'react';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
        const [posts, setPosts] = useState( [
          {id: 1, title: 'Javascript', body: 'Description'},
          {id: 2, title: 'Javascript 2', body: 'Description'},
          {id: 3, title: 'Javascript 3', body: 'Description'}
        ])
        const [title,setTitle] = useState();
        const [body,setBody] = useState();


        const addNewPost = (e) => {
          e.preventDefault();
            const newPost = {
              id: Math.random(),
              title,
              body
            }
            setPosts([...posts, newPost]) 
        }

///*вызываем функцию,разворачиваем старый массив с существующими  постами и в конец добавляем новый пост/


  return (
    <div className="App">
      <form>
      
        {/*mutable component*/}
        <MyInput value={title} 
        onChange={e=>setTitle(e.target.value)} 
        type="text" placeholder="Post Name"
        />

        <MyInput 
        value={body} onChange={e=>setBody(e.target.value)} 
        type="text" 
        placeholder="Post Description"/>

        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
<PostList posts={posts} title="Post about Js"/>
    </div>
  );
}

export default App;
