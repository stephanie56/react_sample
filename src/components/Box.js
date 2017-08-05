import React, { Component } from 'react';
import '../styles/index.css';

const Box = props =>
  <div className='box'
  style={{backgroundColor:props.colour}}
    onClick={() => props.clickHandler()}
  >{ props.name }</div>;

export default Box;
