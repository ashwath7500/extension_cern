define([
    'base/js/namespace',
    'base/js/events'
    ], function(Jupyter, events) {

        // function to redirect
        var redirct = function() {
		window.location.href = "http://spark.apache.org/";
        };
      // Button to redirect
      var defaultCellButton = function () {
          Jupyter.toolbar.add_buttons_group([
              Jupyter.keyboard_manager.actions.register ({
                  'help': 'Redriect link',
                  'icon' : 'fa-play-circle',
                  'handler': redirct
              }, 'redirct-to-spark', 'Button')
          ])
      }
    // Run on start
    function load_ipython_extension() {
        defaultCellButton();
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});
