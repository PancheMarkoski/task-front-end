import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import EventsContextProvider from "./context/EventsContext"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <EventsContextProvider>
        <App />
      </EventsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

