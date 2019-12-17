import React from 'react';
import './Clock2.css';

export default function Clock() {
  
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    <div className="bar">
     {time}
    </div>
  )
  
} 