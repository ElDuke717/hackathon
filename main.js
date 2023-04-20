// add event listener that listens for button clicks
const button = document.querySelector("#button-display");
button.addEventListener("click", tabCounter);

const tabCount = document.querySelector(".tab-count");
const tabDiv = document.querySelector(".tab-container");

// When button is clicked, it logs the number of tabs that are open.
function tabCounter() {
  // Get an array of all the tabs open
  chrome.tabs.query({}, (tabs) => {
    // Create new array of tabs with only the information we want
    let map = tabs.map((item) => [item.title, item.favIconUrl]);
    // iterate over array of tabs and create buttons for each
    map.forEach((tab) => {
      // Create container to hold favicon and title information
      let flexContainer = document.createElement("div");
      flexContainer.setAttribute("class", "flex");

      // Create favicon element
      let favicon = tab[1]
        ? document.createElement("img")
        : document.createElement("div");
      favicon.setAttribute("class", "favicon");
      let imageSource = tab[1] || "whatever";
      if (imageSource) favicon.setAttribute("src", imageSource);

      // Create button element
      let button = document.createElement("div");
      button.setAttribute("class", "button");
      // Create button text
      let buttonText = document.createElement("p");
      buttonText.setAttribute("class", "button-text");
      buttonText.innerText = tab[0];

      // Append favicon and buttonText to container
      flexContainer.appendChild(favicon);
      flexContainer.appendChild(buttonText);
      // Append container to button
      button.appendChild(flexContainer);
      // Append button to our popup window
      tabDiv.appendChild(button);
    });
    tabCount.innerText = `You have ${tabs.length} tabs open!`;
    // Create event Listener for all buttons
    let allButtons = document.querySelectorAll(".button");
    for (let i = 0; i < tabs.length; i++) {
      allButtons[i].addEventListener("click", () => {
        // Navigate to selected tab and page
        chrome.tabs.update(tabs[i].id, { active: true });
        chrome.windows.update(tabs[i].windowId, { focused: true });
      });
    }
  });
}
