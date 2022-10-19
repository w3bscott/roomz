import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Chat from './Components/Chat.jsx'
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Profile from './Components/Profile.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path='/home/*' element={<App /> }/> 
      <Route path='/chat/*' element={<Chat/>}/>
      <Route path='/profile/*' element={<Profile/>} />

    </Routes>

  </React.StrictMode>  
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
