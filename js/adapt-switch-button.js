define(function(require) {

    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    var switchButton = ComponentView.extend({

        postRender: function() {
            this.setReadyStatus();
        },
 
        events: function() {
            return {
                'click .switch-button': 'switch'
            }
        },

        switch: function (e) {
            e.preventDefault();
            var switchTo = e.currentTarget.dataset.switch,
                switchFrom = (switchTo === "0" ? "1" : "0"),
                switchToEl = this.model.get('switch')[switchTo],
                switchFromEl = this.model.get('switch')[switchFrom];

                $(switchFromEl).fadeOut('fast', function(){
                    $(switchToEl).fadeIn();
                    e.currentTarget.dataset.switch = switchFrom;
                });
                
        }


    });

    Adapt.register('switchButton', switchButton);

    return switchButton;

});



