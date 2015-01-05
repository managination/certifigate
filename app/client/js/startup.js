
Meteor.subscribe("userData", function(err) {
   Log("subscribed to userData");
   if(!Meteor.user()) {
      $(".login-link-text").click();
   }
});

Accounts.onLogin = function(info) {
   Log.trace(info.user);
}
