DashboardController = AppController.extend({
  waitOn: function() {
    return this.subscribe('restaurants');
  },
  data: {
   restaurants: Restaurants.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
    
  }
});
