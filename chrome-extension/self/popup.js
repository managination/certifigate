chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
   console.log("message received");
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   chrome.tabs.sendMessage(tabs[0].id, {id: "passwordCount"}, function(response) {
      if(response && response.id == "inputCount"){
         console.log("there are " + response.inputCount + " passwords");
         document.querySelector("#pcount").innerHTML = response.inputCount;
      }
   });
});