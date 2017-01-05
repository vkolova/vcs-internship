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
	// determine if the current mode is delete
	var isDeleteMode = $( '#button-del-delete:visible' ).length > 0;
	var isFeedbackMode = $('#dialog-feedback:visible').length > 0;
	var isShareMode = $('#dialog-share-file:visible').length > 0;
	if (event.which == 13) { // Enter key
	    if (!isFeedbackMode && !isShareMode) {
	        if (isDeleteMode) {
	            deleteConfirmed();
	        } else {
	            toggleDialog();
	        }
	        event.preventDefault();
	    }
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

$(function () {
    'use strict';

    var deferreds = {};

    init();

    window.dialog = {
        open: open,
        close: close,
        dismiss: dismiss
    };

    function init() {
        $('.dialog-buttons .dialog-button').click(function () {
            var $button = $(this),
                mode = $button.data('mode'),
                type = $button.data('type');

            if (type === 'ok') {
                close(mode);
            } else if (type == 'cancel') {
                dismiss(mode);
            }
        });
    }

    function open(mode) {
        dialogMode(mode);
        toggleDialog();
        deferreds[mode] = $.Deferred();
        return deferreds[mode].promise();
    }

    function close(mode, result) {
        var deferred = deferreds[mode];
        toggleDialog();
        if (deferred) {
            deferreds[mode] = null;
            deferred.resolve(result);
        }
    }

    function dismiss(mode, reason) {
        var deferred = deferreds[mode];
        toggleDialog();
        if (deferred) {
            deferreds[mode] = null;
            deferred.reject(new Error(reason || 'dismissed'));
        }
    }

});
