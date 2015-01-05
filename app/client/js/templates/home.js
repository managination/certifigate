Template.home.rendered = function () {
}

Template.home.events(
   {
      "click #addItem": function(evt) {
         $('#newItem').addClass('active');
      },

      "click #closeNewItem": function(evt) {
         $('#newItem').removeClass('active');
      },

      "toggle #http": function(evt){
         Log("toggle " + $("#http").hasClass("active"))
      },

      "click #showDeviceList": function(evt, template) {
         $('#deviceList').addClass('active');
      },

      "click #closeDeviceList": function(evt, template) {
         $('#deviceList').removeClass('active');
      },

      "click #pwdToClipBoard": function(evt) {
         cordova.plugins.clipboard.copy(decrypt(this.password));
      }
   });

