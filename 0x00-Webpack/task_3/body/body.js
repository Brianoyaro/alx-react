import $ from 'jquery';
import _ from 'lodash';
import './body.css';

const body = $('body');
$(body).append("<button id='btn-click' class='custom-span'>Click here to get started</button>");
$(body).append("<p id='count' class='custom-span'></p>");

function updateCounter() {
    let count = parseInt($("#count").text()) || 0;
    count++;
    $("#count").text(`${count} clicks on the button`);
  };
  
  // Normal click event which is susceptible to multiple clicks on the button which will increase the counter multiple times sort of a spam click attack on your website
  //$('#btn-click').click(() => { updateCounter(); });
  
  // Debounce the click event i.e the click event will only be triggered after 1 second. This helps prevent multiple clicks on the button kind of like a spam filter
  $('#btn-click').click(_.debounce(updateCounter, 1000));