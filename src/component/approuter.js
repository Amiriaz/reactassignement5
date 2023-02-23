import { BrowserRouter,Link, Route, Routes } from "react-router-dom";
import Post from "../screens/post";
import Album from "../screens/album";
import Photo from "../screens/photo";
import Todo from "../screens/todo";
import Comment from "../screens/comment";
export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <h1 className="text-center">API DATA </h1>
        <nav className="text-center">
          <button className='m-1' ><Link to="/post">Posts</Link></button>
          <button className='m-1'><Link to="/album">Albums</Link></button>
          <button className='m-1'><Link to="/photo">Photos</Link></button>
          <button className='m-1'><Link to="/todo">Todos</Link></button>
          <button className='m-1'><Link to="/comment">Comments</Link></button>

        </nav>
        <Routes>
          <Route path="post" element={<Post />} />
          <Route path="album" element={<Album />} />
          <Route path="photo" element={<Photo />} />
          <Route path="todo" element={<Todo />} />
          <Route path="comment" element={<Comment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}