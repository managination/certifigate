/*make sure inputs is always an array*/
var inputs = document.querySelectorAll("input[type='password']");
if(!inputs || !inputs[0] || !inputs[0].type) inputs = [];

var hostname = new URL(document.location.href).hostname || "file";

/**add an event that will remember all the passwords*/
for(var i = 0; i < inputs.length; i++){
   var setEvent = function(pwd, idx){
      pwd.addEventListener("change", function () {
         chrome.runtime.sendMessage({id: "storePassword", password: pwd.value, hostname: hostname}, function(response) {
            console.log(response);
            //document.body.style.backgroundColor=response.color;
         });

      })
   }

   setEvent(inputs[i], i);
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
   if(message.id == "passwordCount"){
      console.log("message received in injected script");
      sendResponse({id: "inputCount", inputCount: inputs.length});
   }
});

var getFavicon = function(){
   var favicon = undefined;
   var nodeList = document.getElementsByTagName("link");
   for (var i = 0; i < nodeList.length; i++)
   {
      if((nodeList[i].getAttribute("rel") == "icon")||(nodeList[i].getAttribute("rel") == "shortcut icon"))
      {
         favicon = nodeList[i].getAttribute("href");
      }
   }
   return favicon;
}

console.log("favicon of " + hostname + " is " + getFavicon());