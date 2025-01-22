import $ from "jquery";
import _ from "lodash";

const body = $("body");
$(body).append("<p>ALX Dashboard</p>");
$(body).append("<p>Dashboard data for the students</p>");
$(body).append("<button id='btn-click'>Click here to get started</button>");
$(body).append("<p id='count'></p>");
$(body).append("<p>Copyright - ALX</p>");

function updateCounter() {
  let count = parseInt($("#count").text()) || 0;
  count++;
  $("#count").text(`${count} clicks on the button`);
};
// $('#btn-click').click(() => {
//   _.debounce(updateCounter, 1000);
// });
$('#btn-click').on('click', () => {
  _.debounce(updateCounter, 1000);
});
