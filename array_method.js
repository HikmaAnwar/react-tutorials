// array method 
import React from 'React';
import ReactDOM from 'react-dom/client';

const myArray = ['apple','banana','pineapple'];
const myList = myArray.map((item) => <p>{item}</p>)

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myList);
