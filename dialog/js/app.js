ko.components.register('dummy', {
    viewModel: function () {},
    template: 'dummy'
})

function Dialog() {
  this.component = Dialog.component;
  this.ctx = Dialog.ctx;
}

Dialog.component = ko.observable('dummy');
Dialog.ctx = ko.observable({});

Dialog.open = function (params) {
  var deferred = $.Deferred();
  params.ctx.deferred = deferred;

  Dialog.component(params.component);
  Dialog.ctx(params.ctx);

  return {
    result: deferred.promise(),
    close: (result) => {
      deferred.resolve(result)
      console.log("close")
      $('dialog').empty()

    },
    dismiss: (reason) => {
      deferred.reject(result)
    }
  };
}

ko.components.register('dialog', {
  synchronous: true,
  viewModel: Dialog,
  template: `
    <div id="dialog-overlay" class="dialog"></div>
    <div id="dialog-box">
        <div id="dialog-inner">
            <div data-bind="__dialog__"></div>
        </div>
    </div>`
})

ko.bindingHandlers.__dialog__ = {
  init(el, valueAccessor, allBindings, viewModel, bindingCtx) {
    var dialog = bindingCtx.$rawData

    ko.applyBindingsToNode(el, {
      component: {
        name: dialog.component,
        params: dialog.ctx
      }
    })

    return { controlsDescendantBindings: true }
  }
}

ko.components.register('alert', {
    viewModel: function AlertVM() {
        this.onClick = () => {
          dialog.close()
        }
    },
    template: '<p>Message</p><button data-bind="click: onClick">Close</button>'
})

ko.applyBindings();

var dialog = Dialog.open({
  component: 'alert',
  ctx: {}, // will be passed to the component view-model constructor
})
dialog.result.then(() => {
  console.log("oki-doki")
})
