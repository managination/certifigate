
Meteor.publish("userData", function () {
   if (this.userId) {
      return Meteor.users.find({_id: this.userId},
                               {fields: {'keys': 1, 'iv': 1}});
   } else {
      this.ready();
   }
});

Meteor.publish("passwords", function() {
   Log.info("publishing passwords");
   return Passwords.find({owner: this.userId});
})