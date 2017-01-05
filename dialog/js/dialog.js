////////////////////////////////////////////////////////////////
// Dialog stuff.
//
// The dialog has many elements that are toggled based on
// whether you need them. So there are some for delete
// and some for simple alert messages. dialogMode()
// lets you choose which elements are enabled.
////////////////////////////////////////////////////////////////

// --------------------------------------------------------------------------------------------------------------------
// When the window gets resized, the dialog divs need to get resized too.
// #dialog-overlay is the size of the screen,
// #dialog-box goes in the middle of the screen, but its Y pos is set by rescrollDialog().
function resizeDialog() {
	// get the screen height and width
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var winWidth = $(window).width();

    // calculate the values for center alignment
    var dialogTop =  (winHeight/2) - ($('#dialog-box').height()/2);
    var dialogLeft = (winWidth/2) - ($('#dialog-box').width()/2) + $(window).scrollLeft();

    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:docHeight, width:winWidth});
    $('#dialog-box').css({left:dialogLeft});
}
// --------------------------------------------------------------------------------------------------------------------
// When the user scrolls the window, the dialog needs to stay in the middle of the window.
// Adds the scroll position to where the dialog would have been.
function rescrollDialog() {
	var scroll = $(window).scrollTop();
	var dialogTop = ($(window).height()/2) - ($('#dialog-box').height()/2) + scroll;

	$( '#dialog-box' ).css( { top: dialogTop } );
}

// --------------------------------------------------------------------------------------------------------------------
// Toggles display of the dialog div.
// Only one dialog can be queued at once currently.
// TODO: add support for queuing more dialogs (for alerts, etc.)
// TODO: add parameter
function toggleDialog() {
	// ? Are these needed?
	resizeDialog();
	rescrollDialog();
	if($('#dialog-box').is(':visible')){
	    $('body').css({'overflow':'visible'});
	}
	else {
	    $('body').css({'overflow':'hidden'});
	}
	// Toggle display
	$('#dialog-overlay').toggle();
    $('#dialog-box').toggle();
}

function handleKeyDown( event ) {
	// don't handle any events if the dialog is not open
	if ( $('#dialog-box:visible').length == 0 ) {
		return;
	}
	if (event.which == 13) { // Enter key
        toggleDialog();
        event.preventDefault();
	}
	else if (event.which == 27) { // Escape key
	    toggleDialog();
	    event.preventDefault();
	}
}

// --------------------------------------------------------------------------------------------------------------------
// Dialog - Disable all the buttons, then re-enable the ones for a certain dialog mode.
function dialogMode( mode ) {
	$( '#dialog-inner>div' ).hide();
	$( '#dialog-' + mode ).show();
}
// --------------------------------------------------------------------------------------------------------------------
$( window ).resize( function() {
	resizeDialog();
	rescrollDialog();
} );
$( window ).scroll( function() {
	rescrollDialog();
} );

$(document).keydown( handleKeyDown );


ko.components.register('dummy', {
    viewModel: function () {},
    template: 'dummy'
})

function Dialog() {
  this.component = Dialog.component;
  this.ctx = Dialog.ctx;
  this.msg = Dialog.msg;
}

Dialog.component = ko.observable('dummy');
Dialog.ctx = ko.observable({});

Dialog.open = function (params) {
  toggleDialog();
  var deferred = $.Deferred();
  params.ctx.deferred = deferred;

  Dialog.component(params.component);
  Dialog.ctx(params.ctx);
  Dialog.msg = params.msg;

  return {
    result: deferred.promise(),
    close: (result) => {
      deferred.resolve(result)
      console.log("close")
      toggleDialog();
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
        params: {ctx: dialog.ctx, msg: Dialog.msg}
      }
    })

    return { controlsDescendantBindings: true }
  }
}

ko.components.register('alert', {
    viewModel: function AlertVM(params) {
        this.onClick = () => {
          dialog.close()
        }
        this.currentTemplate = params.ctx().template
    },
    template: '<div data-bind="template: currentTemplate"></div><button data-bind="click: onClick">Close</button>'

})

ko.applyBindings();


var dialog = Dialog.open({
  component: 'alert',
  ctx: {
    template: 'alert-template'
  }, // will be passed to the component view-model constructor
})
dialog.result.then(() => {
  console.log("oki-doki")
})
