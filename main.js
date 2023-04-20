// expand tab width when certain number is reached

// add a level of tabs when number is reached.

// async function tabTester() {

// const tabs = await chrome.tabs.query({
//   url: [
//     "https://developer.chrome.com/docs/webstore/*",
//     "https://developer.chrome.com/docs/extensions/*",
//   ],
// });

// };

// tabTester();

// chrome.tabs.query({}, function(tabs) {
//     // tabs contains an array of all open tabs
//     console.log(tabs);
//   });

// add event lister that listens for button clicks

const button = document.querySelector("#happen");

button.addEventListener("click", log);

function log() {
  console.log("do something");
}
