let output = document.getElementById("output-p");
let no_of_tabs_h1 = document.getElementById("no-of-tabs");
let tabs_list = [];

chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
   for(let i = 0; i < tabs.length; i++){
        output.innerText += tabs[i].url+"\n";
        tabs_list.push(tabs[i].url)
   }
no_of_tabs_h1.innerText = tabs_list.length;
})

