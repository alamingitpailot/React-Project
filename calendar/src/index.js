import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from '@testing-library/react';


const ReactCalendar = () => {
  return <div>
    <App />
  </div>
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>

//   </div>
// );

render(<ReactCalendar />, document.querySelector('#root'));


