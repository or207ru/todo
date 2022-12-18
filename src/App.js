import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users  from './components/Users'
import Post from './components/Post'
import Nav from './components/Nav'

function App() {

  return (
    <BrowserRouter>
      <header>
        <h1>Mission and blogs</h1>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;