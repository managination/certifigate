
Router.route('/', function () {
   this.render('home', {
      waitOn: Meteor.subscribe('passwords'),
      data: function () { return {ready: function(){return true}} }
   });
});


