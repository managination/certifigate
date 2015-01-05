
Passwords = new Meteor.Collection("password");

Passwords.allow(
   {
      insert: function(userId, doc) {
         /** users can only add passwords for themselves*/
         return userId == doc.owner;
      },

      update: function(userId, doc, fieldNames, modifier){
         /** users can only update their own passwords and the owner can not change*/
         return userId == doc.owner && !(fieldNames).contains("owner");
      }
   })