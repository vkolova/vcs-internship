ko.bindingHandlers.analytics = {
  init: (element, valueAccessor, allBindings) => {
  },

  update: (element, valueAccessor, allBindings) => {

    var value = valueAccessor()
    console.log(value)

    var gaObj = (typeof value === 'object' && !(value instanceof Array))

    if (gaObj) {

      var data = {
        hitType: 'event',
        eventCategory:
          value.category != undefined ? value.category : 'USER_ACTION_PORTAL',
        eventAction: value.action,
        eventLabel: value.label != undefined ? value.label : '',
        eventValue: value.value != undefined ? 1 : 0
      }
      // ga('send', data)
      console.log("ga('send', ", data, ")")

    }
  }
}


AppViewModel = () => {
  var self = this
}


ko.applyBindings(AppViewModel())



/*
ga('send', {
  hitType: 'event',
  eventCategory: 'USER_ACTION_PORTAL',
  // default, but could be ovarriden with: `category: 'somecategory'`
  eventAction: 'the action',
  eventLabel: 'the label',
  // should be string; optional
  eventValue: 'the value'
  // should be int; encode booleans as 0 and 1; optional
});
*/
