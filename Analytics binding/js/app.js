ko.bindingHandlers.analytics = {
  init: (element, valueAccessor, allBindings) => {
    var value = valueAccessor()

    jQuery( element).on( value.event, (evn) => {

      var gaObj = (typeof value === 'object' && !(value instanceof Array))

      if (gaObj) {

        var data = {
          hitType: evn.type,
          eventCategory:
          value.category != undefined ? value.category : 'USER_ACTION_PORTAL',
          eventAction: value.action,
          eventLabel: value.label != undefined ? value.label : ''
        }

        if (value.value === parseInt(value.value, 10)) data.eventValue = parseInt(value.value, 10)
        else if (value.value === true || value.value === 'true') data.eventValue = 1
        else if (value.value === false || value.value === 'false') data.eventValue = 0
        else throw new TypeError("eventValue is not valid")

        // ga('send', data)
        console.log("ga('send', ", data, ")")
      }

    })
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
