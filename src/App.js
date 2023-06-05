import React, { useState } from 'react';
import './style.css';
import Student from './Student';
import 'bootstrap/dist/css/bootstrap.min.css';

//create a component student form and add four input boxes and collect student information Create a submit button and on click of submit button, read all the values from the form and show it in a table
export default function App() {
  return (
    <div>
      <Student />
    </div>
  );
}
