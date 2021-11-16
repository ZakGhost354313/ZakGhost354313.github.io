let s = window.localStorage;
let thing = "Online"
s.setItem('status', thing)
function start() {
  let status = s.getItem('status');
  let date = date.toLocaleString('en-US', {
    weekday: 'short', // long, short, narrow
    day: 'numeric', // numeric, 2-digit
    year: 'numeric', // numeric, 2-digit
    month: 'long', // numeric, 2-digit, long, short, narrow
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
    second: 'numeric', // numeric, 2-digit
}); // Output: DAY, MM DD, YYYY, HH:mm:ss AM/PM
  let data = "<h1>Status Page</h1><br /><p>Status As of " + date + ": <span style='font-color: green;'><br /><b>" + status + "</b></span></p>"
  s.setItem('html',data);
}
function main() {
  let html = s.getItem('html');
  var target = document.getElementById('lol');
  target.innerHTML += html;
}
