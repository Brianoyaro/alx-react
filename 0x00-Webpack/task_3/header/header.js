import $ from 'jquery';
import './header.css';

const body = $('body');
$(body).append('<div id="logo"></div>');
$(body).append('<h1>ALX Dashboard</h1>');
console.log('Init header')