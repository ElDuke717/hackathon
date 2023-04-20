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
const button = document.querySelector('#happen');
button.addEventListener('click', tabCounter);

const tabCount = document.querySelector('.number');
const tabDiv = document.querySelector('.numbers');
// add functionality that when button is clicked, it logs the number of tabs that are open.
// logs the number of tabs that are open


function tabCounter() {
    chrome.tabs.query({}, (tabs)=> {
        console.log(tabs.length);
        console.log(tabs);
        let map = tabs.map(item => item.url);
        map.forEach(tab => {
            let newTab = document.createElement("a");
            newTab.setAttribute("href", tab);
            newTab.setAttribute("class", 'link');
            newTab.innerText = tab;
            tabDiv.appendChild(newTab);
           
        })
        chrome.tabs.update(tabs[0].id, { active: true });
        chrome.windows.update(tab[0].windowId, { focused: true });
        console.log(map);
        tabCount.innerText = `You have ${tabs.length} tabs open!`;
        // chrome.tabGroups.update( tabs[0].id, {width: 2400})

        // let number = document.createElement("p");
        // number.innerText = `Number of tabs open: ${tabs.length}`
        // document.appendChild(number);
    })


}