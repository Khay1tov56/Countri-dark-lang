import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'


// ReactDOM.render(<App />, document.getElementById("root")) 
// Version 17

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  // <React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
  // </React.StrictMode>
)

// Version 18