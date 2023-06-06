import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/*
- create the main structure of the app, including the pages, routing, and components place  
- style the home page and his components
- style the about page and his components
- style the pricing page and his components
- style the contact page and his components
- add the form funtionalitie to the contact page
- refactor the app
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
