// expand tab width when certain number is reached

// add a level of tabs when number is reached.

// async function tabTester() {

// const tabs = await chrome.tabs.query({
//     url: [
//       "https://developer.chrome.com/docs/webstore/*",
//       "https://developer.chrome.com/docs/extensions/*",
//     ],
//   });

//   console.log(tabs);
// };

// tabTester();

// chrome.tabs.query({}, function(tabs) {
//     // tabs contains an array of all open tabs
//     console.log(tabs);
//   });

// add event lister that listens for button clicks
const button = document.querySelector("#happen");
button.addEventListener("click", tabCounter);

const tabCount = document.querySelector(".number");
const tabDiv = document.querySelector(".numbers");
// add functionality that when button is clicked, it logs the number of tabs that are open.
// logs the number of tabs that are open

function tabCounter() {
  chrome.tabs.query({}, (tabs) => {
    console.log(tabs);
    let map = tabs.map((item) => [
      item.title,
      item.favIconUrl,
      item.id,
      item.windowId,
    ]);
    map.forEach((tab) => {
      let flexWrapper = document.createElement("div");
      flexWrapper.setAttribute("class", "flex");

      let favicon = tab[1]
        ? document.createElement("img")
        : document.createElement("div");
      favicon.setAttribute("class", "favicon");
      let imageSource = tab[1] ? tab[1] : null;
      if (imageSource) favicon.setAttribute("src", imageSource);

      let button = document.createElement("div");
      button.setAttribute("class", "button");
      button.classList.add(`${tab[2]}`);
      button.classList.add(`${tab[3]}`);

      let buttonText = document.createElement("p");
      buttonText.setAttribute("class", "button-text");
      buttonText.innerText = tab[0];

      flexWrapper.appendChild(favicon);
      flexWrapper.appendChild(buttonText);
      tabDiv.appendChild(button);
      button.appendChild(flexWrapper);
    });
    console.log(map);
    tabCount.innerText = `You have ${tabs.length} tabs open!`;
  });
}

let hmm = document.querySelectorAll(".button");
console.log(hmm);
let buttons = document.getElementsByClassName("button");
let length = buttons.length;
console.log(buttons.length);
for (let i = 0; i < length; i++) {
  buttons[i].addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    chrome.tabs.update(tabs[0].id, { active: true });
    chrome.windows.update(tabs[0].windowId, { focused: true });
  });
}
// chrome.tabGroups.update( tabs[0].id, {width: 2400})

// let number = document.createElement("p");
// number.innerText = `Number of tabs open: ${tabs.length}`
// document.appendChild(number);
