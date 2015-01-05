var forge = forge();
var keyPair;
var storedKeyPair = localStorage.getItem("keyPair");
if(!storedKeyPair) {
   keyPair = forge.pki.rsa.generateKeyPair({bits: 2048, e: 0x10001});
   localStorage.setItem("keyPair", JSON.stringify(keyPair));
} else {
   keyPair = JSON.parse(storedKeyPair);
}



