let output = document.getElementById("output-p");
let tabs_list = [];
chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
   for(let i = 0; i < tabs.length; i++){
        output.innerText += tabs[i].url;
   }

})


