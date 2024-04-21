import $ from 'jquery';
import _ from 'lodash';

// Create elements and append them to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="startBtn">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Function to track button clicks
let count = 0;
const updateCounter = _.debounce(() => {
  count++;
  $('#count').text(`${count} clicks on the button`);
}, 500);

// Bind debounce function to button click event
$('#startBtn').click(updateCounter);
