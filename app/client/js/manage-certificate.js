

keys = undefined;

var key = frg.util.decode64("Vs4MBBGUIZ7FQ+N+hgBkCwSZykvf+Lpg8dVlopZVMlk=");
var iv = frg.util.decode64("INMa1FZE/jSfBQgalA/FxB4iNeUbjdikzzgianhI2W0=");

Meteor.startup(function () {
   var rsa = frg.pki.rsa;

// generate an RSA key pair in steps that attempt to run for a specified period
// of time on the main JS thread
/*
   var state = rsa.createKeyPairGenerationState(2048, 0x10001);
   var stepNum = 1;
   var step = function () {
      // run for 100 ms
      if (!rsa.stepKeyPairGenerationState(state, 250)) {
         log.trace("running step " + (stepNum++));
         setTimeout(step, 1);
      }
      else {
         log.trace("done generating keys");
         keys = state.keys;


      }
   };
// turn on progress indicator, schedule generation to run
   setTimeout(step);
*/

   //keys = rsa.generateKeyPair({bits: 2048, e: 0x10001});

})

encryptMe = function() {
   var cipher = frg.cipher.createCipher('AES-CBC', key);
   cipher.start({iv: iv});
   cipher.update(frg.util.createBuffer(EJSON.stringify(keys)));
   cipher.finish();
   var encrypted = cipher.output;
// outputs encrypted hex
   log.info(encrypted.toHex());

   var decipher = forge.cipher.createDecipher('AES-CBC', key);
   decipher.start({iv: iv});
   decipher.update(encrypted);
   decipher.finish();
// outputs decrypted hex
   log.info(EJSON.parse(decipher.output.data));

}