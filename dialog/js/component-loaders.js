(function (G, $, ko) {

'use strict';

var djangoTemplateLoader = {
    loadTemplate: function(name, templateConfig, callback) {
        if (templateConfig.url) {
            $.ajax({
                url: PORTAL_PREFIX + 'template/' + templateConfig.url.replace(/\/$/, '') + '/',
                async: false,
                dataType: 'html',
                success: function(data) {
                    callback(ko.utils.parseHtmlFragment(data));
                }
            });
        } else {
            callback(null);
        }

    }
};

ko.components.loaders.unshift(djangoTemplateLoader);

})(window, jQuery, ko);
